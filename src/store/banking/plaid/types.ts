export enum PlaidActionTypes {
    SET_LINK_TOKEN = "SET_PLAID_LINK_TOKEN",
    ADD_PLAID_ACCOUNT = "ADD_PLAID_ACCOUNT",
    SAVE_ACCESS_TOKEN = "SAVE_PLAID_ACCESS_TOKEN",
    REQUEST_ERROR = "REQUEST_PLAID_ERROR",
    GET_BANK_INFO = "get_PLAID_bank_info",
}

export interface PlaidState {
    backend: boolean;
    linkToken: string;
    linkTokenError: any;
    accessTokens: string[];
    savedAccounts: PlaidAccountAPI[];
    tokens: string [];
    accounts: PlaidAccount[];
}

export interface PlaidAccount {
    account_id: string;
    mask: string;
    name: string;
    official_name: string;
    subtype: string;
    type: string;
    current: number;
    balances: PlaidAccountBalance;
}

export interface PlaidAccountAPI {
    account_id: string;
    mask: string;
    name: string;
    official_name: string;
    subtype: string;
    type: string;
    current: number;
    balances: PlaidAccountBalance;
    assets: PlaidAsset[];
}

export interface PlaidAsset{
    account_id: string;
    cost_basis: number;
    institution_price: number;
    institution_price_as_of: string | null;
    institution_value: number;
    quantity: number;
    security_id: string;
    unofficial_currency_code: string | null;
    security: Security;
}

export interface Security{
    close_price: number;
    close_price_as_of: string | null;
    cusip: string | null;
    institution_id: string | null;
    institution_security_id: string | null;
    is_cash_equivalent: boolean;
    isin: string | null;
    iso_currency_code: string;
    name: string;
    proxy_security_id: string | null;
    security_id: string;
    sedol: string | null;
    ticker_symbol: string | null;
    type: string;
    unofficial_currency_code: string | null;
}

export interface PlaidAccountBalance {
    available: number;
    current: number;
    iso_currency_code: string;
    limit: number | null;
}

export interface PlaidResult {
    token: string;
    accounts: PlaidAccount[];
}
