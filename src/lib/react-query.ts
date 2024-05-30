import {
	type UseMutationOptions,
	type DefaultOptions,
	QueryClient,
} from "@tanstack/react-query";

export const queryConfig = {
	queries: {
		refetchOnWindowFocus: true,
		retry: false,
	},
} satisfies DefaultOptions;

export const queryClient = new QueryClient({
	defaultOptions: queryConfig,
});

// biome-ignore lint/suspicious/noExplicitAny: stfu
export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
	Awaited<ReturnType<FnType>>;

// biome-ignore lint/suspicious/noExplicitAny: stfu
export type QueryConfig<T extends (...args: any[]) => any> = Omit<
	ReturnType<T>,
	"queryKey" | "queryFn"
>;

export type MutationConfig<
	// biome-ignore lint/suspicious/noExplicitAny: stfu
	MutationFnType extends (...args: any) => Promise<any>,
> = UseMutationOptions<
	ApiFnReturnType<MutationFnType>,
	Error,
	Parameters<MutationFnType>[0]
>;
