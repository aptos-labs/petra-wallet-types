
declare global {
  interface Window {
    aptos: Aptos | undefined;
  }
}

export interface Aptos {
  connect(): AddressInfo;
  isConnected(): boolean;
  account(): AddressInfo;
  disconnect(): undefined;
  network(): string;
  requestId: number;
  eventListenerMap: object;
  signAndSubmitTransaction(
    transaction: TransactionPayload
  ): Promise<SubmitResponse>;
  signMessage(message: SignMessagePayload): Promise<SignMessageResponse>;
  signTransaction(transaction: TransactionPayload): Promise<SignResponse>;
}

export type AddressInfo = { address: string; publicKey: string };

export type TransactionPayload = {
  arguments: string[];
  function: string;
  type: string;
  type_arguments: string[];
};

export interface SignMessagePayload {
  address?: boolean;
  application?: boolean;
  chainId?: boolean;
  message: string;
  nonce: string;
}

export interface SignMessageResponse {
  address: string;
  application: string;
  chainId: number;
  fullMessage: string;
  message: string;
  nonce: string;
  prefix: string;
  signature: string;
}

export interface SignResponse {
  [index: number]: number;
}

export interface SubmitResponse {
  hash: string;
  sender: string;
  sequence_number: string;
  max_gas_amount: string;
  gas_unit_price: string;
  expiration_timestamp_secs: string;
  payload: TransactionPayload;
  signature: Signature;
}

export interface Signature {
  public_key: string;
  signature: string;
  type: string;
}
