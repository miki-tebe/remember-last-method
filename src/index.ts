import type { BetterAuthClientPlugin } from "better-auth/client";

const STORAGE_KEY = "lastAuthMethod";

export const rememberLastMethodClientPlugin = () => {
  return {
    id: "remember-last-method-plugin",
    getActions: () => ({
      saveProvider: async (provider: string) => {
        try {
          localStorage.setItem(STORAGE_KEY, provider);
          return { data: true, error: null };
        } catch (error) {
          return { data: false, error };
        }
      },
      getProvider: async () => {
        const provider = localStorage.getItem(STORAGE_KEY);
        return { data: provider, error: null };
      },
    }),
  } satisfies BetterAuthClientPlugin;
};
