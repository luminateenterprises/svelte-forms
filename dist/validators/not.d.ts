import type { Validator } from '..';

export declare function not(validation: Validator): (value: any) => Promise<{
	valid: boolean;
	name: string;
}>;
