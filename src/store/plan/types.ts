export interface Plan {
    id: number;
    title: string;
    amount: number;
    status: string;
    icon: string;
    icon_url: string;
    plan_features: Plan_feature[]; 
    plan_description: string; 
    plan_id: string;
    created_at: string;
    updated_at: string;
}

export interface Plan_feature{
    plan_id?: number;
    title: string;
    type: string;
}


export interface Plan_description{
    plan_id: number;
    description: string;
}

export interface PlanState {
    plans: Plan[];
    selectedPlan: Plan | null,
}

export interface AddPriceData {
    title: string;
    amount: number;
    plan_description: string;
    icon: string | undefined;
    features: Plan_feature[];
}

export interface UpdatePriceData {
    id: number,
    title: string;
    amount: number;
    plan_description: string;
    icon: string | undefined;
    features: Plan_feature[];
    price: Plan;
}

export enum PlanActionTypes {
    STORE_PLAN_TO_LOCAL = "store_plan_to_local",
    GET_PLANS = "get_plans",
    ADD_PLAN = 'add_plan',
    EDIT_PLAN = 'edit_plan',
    DELETE_PLAN = 'delete_plan',
}