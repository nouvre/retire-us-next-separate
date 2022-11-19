import React, { useEffect, useRef, useState, useCallback } from "react";

interface UseDynamicSVGImportOptions {
    onCompleted?: (
        name: string,
        SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
    ) => void;
    onError?: (err: any) => void;
}

function useDynamicSVGImport(
    name: string,
    options: UseDynamicSVGImportOptions = {}
) {
    const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();

    const { onCompleted, onError } = options;
    useEffect(() => {
        setLoading(true);
        const importIcon = async (): Promise<void> => {
            try {
                ImportedIconRef.current = (
                    await import(`../../assets/images/${name}.svg`)
                ).ReactComponent;
                onCompleted?.(name, ImportedIconRef.current);
            } catch (err) {
                onError?.(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, onCompleted, onError]);

    return { error, loading, SvgIcon: ImportedIconRef.current };
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    onCompleted?: UseDynamicSVGImportOptions["onCompleted"];
    onError?: UseDynamicSVGImportOptions["onError"];
}

export const Icon: React.FC<IconProps> = ({
    name,
    onCompleted,
    onError,
    ...rest
}): JSX.Element | null => {
    const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
        onCompleted,
        onError,
    });
    if (error) {
        return error.message;
    }
    if (loading) {
        return <></>;
    }
    if (SvgIcon) {
        return <SvgIcon {...rest} />;
    }
    return null;
};
