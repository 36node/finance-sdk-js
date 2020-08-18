declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  account: AccountAPI;
}

declare global {
  export interface Options {
    base?: string;
    token?: string | (() => string);
  }

  export interface AccountAPI {
    /**
     * List all accounts
     */
    listAccounts(req: ListAccountsRequest): Promise<ListAccountsResponse>;
    /**
     * Create an account
     */
    createAccount(req: CreateAccountRequest): Promise<CreateAccountResponse>;
    /**
     * Find account by id
     */
    getAccount(req: GetAccountRequest): Promise<GetAccountResponse>;
    /**
     * Update account
     */
    updateAccount(req: UpdateAccountRequest): Promise<UpdateAccountResponse>;
    /**
     *
     */
    deleteAccount(req: DeleteAccountRequest): Promise<DeleteAccountResponse>;
    /**
     * List Transcations by {accountId}
     */
    listAccountTranscations(
      req: ListAccountTranscationsRequest
    ): Promise<ListAccountTranscationsResponse>;
    /**
     * 为 {accountId} 账户充值
     */
    accountRecharge(req: AccountRechargeRequest): Promise<AccountRechargeResponse>;
    /**
     * 为 {accountId} 提现
     */
    accountWithdraw(req: AccountWithdrawRequest): Promise<AccountWithdrawResponse>;
    /**
     * 为 {accountId} 转账
     */
    accountTransfer(req: AccountTransferRequest): Promise<AccountTransferResponse>;
    /**
     * Find transcation by accountId &amp; transcationId
     */
    getAccountTranscation(
      req: GetAccountTranscationRequest
    ): Promise<GetAccountTranscationResponse>;
  }

  export interface ListAccountsRequest {
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      type?: string;
      tags?: string[];
      owner?: string;
      project?: string;
    };
  }
  export interface ListAccountsResponse {
    content?: ({
      /**
       * 用户或组织
       */
      owner?: string;
      /**
       * 余额，可能是负的
       */
      balance?: number;
      /**
       * 授信额度
       */
      credits?: number;
      /**
       * 所属项目
       */
      project?: string;
      /**
       * 账户类别
       */
      type?: "BUDGET" | "WALLET" | "POINTS";
      /**
       * 应用层自行定义的标签
       */
      tags?: string[];
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED" | "FROZEN";
      /**
       * 最近更新者
       */
      updateBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      createAt?: Date;
    } & {
      /**
       * 创建人
       */
      createBy: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface CreateAccountRequest {
    body: {
      /**
       * 用户或组织
       */
      owner?: string;
      /**
       * 余额，可能是负的
       */
      balance?: number;
      /**
       * 授信额度
       */
      credits?: number;
      /**
       * 所属项目
       */
      project?: string;
      /**
       * 账户类别
       */
      type?: "BUDGET" | "WALLET" | "POINTS";
      /**
       * 应用层自行定义的标签
       */
      tags?: string[];
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED" | "FROZEN";
      /**
       * 最近更新者
       */
      updateBy?: string;
    } & {
      /**
       * account's owner
       */
      owner: string;
    };
  }
  export interface CreateAccountResponse {
    content?: {
      /**
       * 用户或组织
       */
      owner?: string;
      /**
       * 余额，可能是负的
       */
      balance?: number;
      /**
       * 授信额度
       */
      credits?: number;
      /**
       * 所属项目
       */
      project?: string;
      /**
       * 账户类别
       */
      type?: "BUDGET" | "WALLET" | "POINTS";
      /**
       * 应用层自行定义的标签
       */
      tags?: string[];
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED" | "FROZEN";
      /**
       * 最近更新者
       */
      updateBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      createAt?: Date;
    } & {
      /**
       * 创建人
       */
      createBy: string;
    };
  }
  export interface GetAccountRequest {
    accountId: string;
  }
  export interface GetAccountResponse {
    content?: {
      /**
       * 用户或组织
       */
      owner?: string;
      /**
       * 余额，可能是负的
       */
      balance?: number;
      /**
       * 授信额度
       */
      credits?: number;
      /**
       * 所属项目
       */
      project?: string;
      /**
       * 账户类别
       */
      type?: "BUDGET" | "WALLET" | "POINTS";
      /**
       * 应用层自行定义的标签
       */
      tags?: string[];
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED" | "FROZEN";
      /**
       * 最近更新者
       */
      updateBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      createAt?: Date;
    } & {
      /**
       * 创建人
       */
      createBy: string;
    };
  }
  export interface UpdateAccountRequest {
    accountId: string;
    body: {
      /**
       * 用户或组织
       */
      owner?: string;
      /**
       * 余额，可能是负的
       */
      balance?: number;
      /**
       * 授信额度
       */
      credits?: number;
      /**
       * 所属项目
       */
      project?: string;
      /**
       * 账户类别
       */
      type?: "BUDGET" | "WALLET" | "POINTS";
      /**
       * 应用层自行定义的标签
       */
      tags?: string[];
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED" | "FROZEN";
      /**
       * 最近更新者
       */
      updateBy?: string;
    };
  }
  export interface UpdateAccountResponse {
    content?: {
      /**
       * 用户或组织
       */
      owner?: string;
      /**
       * 余额，可能是负的
       */
      balance?: number;
      /**
       * 授信额度
       */
      credits?: number;
      /**
       * 所属项目
       */
      project?: string;
      /**
       * 账户类别
       */
      type?: "BUDGET" | "WALLET" | "POINTS";
      /**
       * 应用层自行定义的标签
       */
      tags?: string[];
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED" | "FROZEN";
      /**
       * 最近更新者
       */
      updateBy?: string;
    } & {
      id: string;
      updateAt?: Date;
      createAt?: Date;
    } & {
      /**
       * 创建人
       */
      createBy: string;
    };
  }
  export interface DeleteAccountRequest {
    accountId: string;
  }
  export interface ListAccountTranscationsRequest {
    accountId: string;
    query?: {
      _limit?: number;
      _offset?: number;
      _sort?: string;
      _select?: string[];
      type?: string;
      createAt_gte?: Date;
      createAt_let?: Date;
      updateAt_gte?: Date;
      updateAt_let?: Date;
    };
  }
  export interface ListAccountTranscationsResponse {
    content?: ({
      /**
       * 入账账户
       */
      entryAccount?: string;
      /**
       * 出账账户
       */
      outAccount?: string;
      /**
       * 转账金额
       */
      amount?: number;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账
       */
      type?: "RECHARGE" | "WITHDRAW" | "TRANSFER";
    } & {
      id: string;
      updateAt?: Date;
      createAt?: Date;
    } & {
      /**
       * 创建人
       */
      createBy: string;
    })[];
    headers?: {
      "X-Total-Count": number;
    };
  }
  export interface AccountRechargeRequest {
    accountId: string;
    body: {
      /**
       * 转账金额
       */
      amount: number;
      /**
       * 备注
       */
      remark?: string;
    };
  }
  export interface AccountRechargeResponse {
    content?: {
      /**
       * 入账账户
       */
      entryAccount?: string;
      /**
       * 出账账户
       */
      outAccount?: string;
      /**
       * 转账金额
       */
      amount?: number;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账
       */
      type?: "RECHARGE" | "WITHDRAW" | "TRANSFER";
    } & {
      id: string;
      updateAt?: Date;
      createAt?: Date;
    } & {
      /**
       * 创建人
       */
      createBy: string;
    };
  }
  export interface AccountWithdrawRequest {
    accountId: string;
    body: {
      /**
       * 转账金额
       */
      amount: number;
      /**
       * 备注
       */
      remark?: string;
    };
  }
  export interface AccountWithdrawResponse {
    content?: {
      /**
       * 入账账户
       */
      entryAccount?: string;
      /**
       * 出账账户
       */
      outAccount?: string;
      /**
       * 转账金额
       */
      amount?: number;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账
       */
      type?: "RECHARGE" | "WITHDRAW" | "TRANSFER";
    } & {
      id: string;
      updateAt?: Date;
      createAt?: Date;
    } & {
      /**
       * 创建人
       */
      createBy: string;
    };
  }
  export interface AccountTransferRequest {
    accountId: string;
    body: {
      /**
       * 转账金额
       */
      amount: number;
      /**
       * 备注
       */
      remark?: string;
    } & {
      /**
       * 入账账户ID
       */
      entryAccount: string;
    };
  }
  export interface AccountTransferResponse {
    content?: {
      /**
       * 入账账户
       */
      entryAccount?: string;
      /**
       * 出账账户
       */
      outAccount?: string;
      /**
       * 转账金额
       */
      amount?: number;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账
       */
      type?: "RECHARGE" | "WITHDRAW" | "TRANSFER";
    } & {
      id: string;
      updateAt?: Date;
      createAt?: Date;
    } & {
      /**
       * 创建人
       */
      createBy: string;
    };
  }
  export interface GetAccountTranscationRequest {
    accountId: string;
    transcationId: string;
  }
  export interface GetAccountTranscationResponse {
    content?: {
      /**
       * 入账账户
       */
      entryAccount?: string;
      /**
       * 出账账户
       */
      outAccount?: string;
      /**
       * 转账金额
       */
      amount?: number;
      /**
       * 备注
       */
      remark?: string;
      /**
       * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账
       */
      type?: "RECHARGE" | "WITHDRAW" | "TRANSFER";
    } & {
      id: string;
      updateAt?: Date;
      createAt?: Date;
    } & {
      /**
       * 创建人
       */
      createBy: string;
    };
  }
}

export = SDK;
