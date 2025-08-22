declare global {
  interface Window {
    OpenPay: {
      setId: (merchantId: string) => void;
      setApiKey: (publicKey: string) => void;
      setSandboxMode: (sandbox: boolean) => void;
      token: {
        create: (
          cardData: {
            card_number: string;
            holder_name: string;
            expiration_year: string;
            expiration_month: string;
            cvv2: string;
          },
          success: (response: { data: { id: string } }) => void,
          error: (response: { data: { description: string; error_code: number } }) => void
        ) => void;
      };
      deviceData: {
        setup: (
          success: (deviceId: string) => void,
          error: (error: any) => void
        ) => void;
      };
    };
  }
}

export {};