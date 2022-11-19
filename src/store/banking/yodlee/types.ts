export enum YodleeActionTypes {
    SET_LINK_TOKEN = "SET_YODLEE_LINK_TOKEN",
    ADD_ACCOUNT = "ADD_YODLEE_ACCOUNT",
    SAVE_ACCESS_TOKEN = "SAVE_YODLEE_ACCESS_TOKEN",
    REQUEST_ERROR = "REQUEST_YODLEE_ERROR",
    GET_BANK_INFO = "get_YODLEE_bank_info",
}

export interface YodleeState {
    backend: boolean;
    linkToken: string;
    linkTokenError: any;
    accessTokens: string[];
    savedAccounts: YodleeAccountAPI[];
    tokens: string [];
    accounts: YodleeAccount[];
}

export interface YodleeAccount {
    CONTAINER           : string;
    accountName         : string;
    accountNumber       : string;
    accountStatus       : string;
    accountType         : string;
    aggregationSource   : string;
    availableBalance    : Balance;
    balance             : Balance;
    bankTransferCode    : YodleeBankTransferCode[];
    classification      : string
    createdDate         : string;
    currentBalance      : Balance
    dataset             : YodleeDataSet[];
    displayedName       : string;
    fullAccountNumber   : string;
    holder              : YodleeHolder[];
    id                  :number;
    includeInNetWorth   : boolean;
    isAsset             :boolean;
    isManual            :boolean;
    lastUpdated         :string;
    providerAccountId   :number;
    providerId          :number;
    providerName        :string;
    
}

export interface YodleeBankTransferCode {
    additionalStatus: string;
    lastUpdateAttempt: string;
    lastUpdated: string;
    name: string;
    updateEligibility: string;
}

export interface YodleeDataSet {
    id: string;
    type: string;
}

export interface YodleeHolder {
    name: Name;
}

export interface Name {
    fullName: string;
}

export interface YodleeAccountAPI {
    account_id: string;
    mask: string;
    name: string;
    official_name: string;
    subtype: string;
    type: string;
    current: number;
    balances: Balance;
    assets: YodleeAsset[];
}

export interface YodleeAsset{
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

export interface Balance {
    amount      : Float32Array;
    currency    : string;
}

export interface BankResult {
    token: string;
    accounts: YodleeAccount[];
}
export interface YodleeFirstStepResult {
    providerId          : number,
    providerName        : string,
    requestId           : string,
    status              : string,
    additionalStatus    : string,
    providerAccountId   : number,
    fnToCall            : string
}
////---------------------------
/*export enum PlaidActionTypes {
    SET_PLAID_LINK_TOKEN = "SET_LINK_TOKEN",
    ADD_PLAID_ACCOUNT = "ADD_BANKING_ACCOUNT",
    SAVE_PLAID_ACCESS_TOKEN = "SAVE_ACCESS_TOKEN",
    REQUEST_PLAID_ERROR = "REQUEST_ERROR",
    GET_PLAID_INFO = "get_bank_info",
}
export enum PlaidActionTypes {
    SET_YODLEE_LINK_TOKEN = "SET_LINK_TOKEN",
    ADD_YODLEE_ACCOUNT = "ADD_BANKING_ACCOUNT",
    SAVE_YODLEE_ACCESS_TOKEN = "SAVE_ACCESS_TOKEN",
    REQUEST_YODLEE_ERROR = "REQUEST_ERROR",
    GET_YODLEE_INFO = "get_bank_info",
}

export interface PlaidState {
    //Plaid
    backend: boolean;
    linkToken: string;
    linkTokenError: any;
    accessTokens: string[];
    savedAccounts: PlaidAccountAPI[];
    tokens: string [];
    accounts: PlaidAccount[];
}
export interface YodleeState {
    backend: boolean;
    linkToken: string;
    linkTokenError: any;
    accessTokens: string[];
    savedAccounts: YodleeAccountAPI[];
    tokens: string [];
    accounts: YodleeAccount[];
}

export interface PlaidAccount {
    account_id: string;
    mask: string;
    name: string;
    official_name: string;
    subtype: string;
    type: string;
    current: number;
    balances: BankingAccountBalance;
}
export interface YodleeAccount {
    account_id: string;
    mask: string;
    name: string;
    official_name: string;
    subtype: string;
    type: string;
    current: number;
    balances: BankingAccountBalance;
}

export interface PlaidAccountAPI {
    account_id: string;
    mask: string;
    name: string;
    official_name: string;
    subtype: string;
    type: string;
    current: number;
    balances: BankingAccountBalance;
    assets: BankingAsset[];
}
export interface YodleeAccountAPI {
    account_id: string;
    mask: string;
    name: string;
    official_name: string;
    subtype: string;
    type: string;
    current: number;
    balances: BankingAccountBalance;
    assets: BankingAsset[];
}

export interface BankingAsset{
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

export interface BankingAccountBalance {
    //Plaid
    available: number;
    current: number;
    iso_currency_code: string;
    limit: number | null;
    //Yodlee
    yodlee_available: number;
    yodlee_current: number;
    yodlee_iso_currency_code: string;
    yodlee_limit: number | null;
}

export interface PlaidResult {
    token: string;
    accounts: PlaidAccount[];
}

export interface YodleeResult {
    token: string;
    accounts: YodleeAccount[];
}
*/