export declare function style(
	node: HTMLElement,
	{
		field,
		valid,
		invalid,
		dirty
	}?: {
		field?: any;
		valid?: string;
		invalid?: string;
		dirty?: string;
	}
): {
	destroy: () => any;
};
