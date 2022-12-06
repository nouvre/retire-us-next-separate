import { useMemo, useState } from 'react';
import { Answer } from '@/store/questions/types';
import { useQuestionnaire } from '@/util/func';

type RecommendedType = {
  standard: boolean;
  tax: boolean;
  wealth: boolean;
};

const useRecommend = ({ answers }: { answers: Answer }) => {
  const [recommended, setRecommended] = useState<RecommendedType>({
    standard: true,
    tax: false,
    wealth: false
  });

  const { getTaxVal, getWealthVal } = useQuestionnaire({ answers });

  useMemo(() => {
    const taxVal = getTaxVal();
    const wealthVal = getWealthVal();
    const data = { ...recommended };
    data.standard = true;
    data.tax = false;
    data.wealth = false;

    if (taxVal >= 2) {
      data.standard = false;
      data.tax = true;
      data.wealth = false;
    }
    if (wealthVal > 0) {
      data.standard = false;
      data.tax = false;
      data.wealth = true;
    }
    setRecommended(data);
  }, [answers]);

  return recommended;
};

export default useRecommend;
