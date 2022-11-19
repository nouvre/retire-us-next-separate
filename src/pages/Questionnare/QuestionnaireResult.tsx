import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "@/store";
import { getQuestionnare } from "@/store/questions/action";
import Header from "../Header";
import CheckPointResults from "@/components/Questionnare/CheckPointResults";
import { Answer } from "@/store/questions/types";
import { questionOrder } from "../../constants/variables";
import { useQuestionnaire } from "../../util/func";
import TagManager from "react-gtm-module";

const QuestionnaireResult = (props: any) => {
    const dispatch = useDispatch();

    const user = useSelector((state: ApplicationState) => state.auth.user);
    const answers: Answer = useSelector(
        (state: ApplicationState) => state.questions.answers
    );
    const step = useSelector((state: ApplicationState) => state.questions.step);

    const [showPage, setShowPage] = useState<boolean>(
        user?.user_type == "intro" ? true : false
    );

    const {
        checkRetRF1,
        checkRetRF2,
        checkRetRF3,
        checkRetRF4,
        checkRetRF5,
        checkRetRF6,
        checkTaxRF1,
        checkTaxRF2,
        checkTaxRF3,
        checkTaxRF4,
        checkTaxRF5,
        checkCfpRF1,
        checkCfpRF2,
        checkCfpRF3,
    } = useQuestionnaire({ answers });

    useEffect(() => {
        let habspotEl: HTMLElement | null;
        setTimeout(() => {
            habspotEl = document.getElementById(
                "hubspot-messages-iframe-container"
            );
            if (habspotEl)
                habspotEl.style.cssText = "display: none !important;";
        }, 1500);

        return () => {
            if (habspotEl)
                habspotEl.style.cssText =
                    "display: block !important;width: 100px; height: 96px;";
        };
    }, []);

    useEffect(() => {
        if (user) {
            dispatch(getQuestionnare());

            TagManager.dataLayer({
                dataLayer: {
                    userName: user?.name,
                    email: user?.email,
                    message: "Checkpoint result",
                },
                dataLayerName: "CheckpointResultDataLayer",
            });
        } else {
            if (step < questionOrder.length) props.history.push("/checkpoint");
        }
    }, [user, step]);

    const handleClick = () => {
        props.history.push("/recommendation");
    };

    return (
        <div className="w-full min-h-screen relative">
            <Header opacity={false} />
            {Object.keys(answers).length > 0 && (
                <div className="w-full mt-[126px]">
                    {step >= questionOrder.length && !showPage && (
                        <CheckPointResults
                            user={user}
                            answers={answers}
                            handleClick={handleClick}
                            checkRetRF1={checkRetRF1}
                            checkRetRF2={checkRetRF2}
                            checkRetRF3={checkRetRF3}
                            checkRetRF4={checkRetRF4}
                            checkRetRF5={checkRetRF5}
                            checkRetRF6={checkRetRF6}
                            checkTaxRF1={checkTaxRF1}
                            checkTaxRF2={checkTaxRF2}
                            checkTaxRF3={checkTaxRF3}
                            checkTaxRF4={checkTaxRF4}
                            checkTaxRF5={checkTaxRF5}
                            checkCfpRF1={checkCfpRF1}
                            checkCfpRF2={checkCfpRF2}
                            checkCfpRF3={checkCfpRF3}
                        />
                    )}
                    {user?.authenticate_type == 2 && (
                        <div className="d-flex w-full justify-center pt-12 pb-[100px]">
                            <div
                                className="max-w-[400px] mx-auto flex h-[60px] justify-center items-center rounded-[60px] bg-[#001F55] text-white text-[18px] font-bold cursor-pointer"
                                onClick={handleClick}
                            >
                                Continue for recommendations
                            </div>
                        </div>
                    )}
                </div>
            )}
            <div className="md:hidden">
                <img
                    src="/assets/images/glass-man.svg"
                    alt="Glass man"
                    className="relative ml-auto mt-auto z-[10] max-w-[250px]"
                />
                <img
                    src="/assets/images/ico-retire-leaf.svg"
                    alt="ico-retire-leaf"
                    className="absolute left-0 bottom-0 max-w-[100px]"
                />
                <img
                    src="/assets/images/ico-ellipse.svg"
                    alt="ico-ellipse"
                    className="absolute w-4 left-[50px] bottom-[100px] md:block"
                />
            </div>
        </div>
    );
};

export default QuestionnaireResult;
