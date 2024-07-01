import type { Readable } from 'svelte/store';

export type FieldOptions = {
	valid: boolean;
	checkOnInit: boolean;
	validateOnChange: boolean;
	stopAtFirstError: boolean;
	isOptional: boolean;
};
export type Field<T> = {
	name: string;
	value: T;
	valid: boolean;
	invalid: boolean;
	dirty: boolean;
	errors: string[];
};
export declare const defaultFieldOptions: FieldOptions;
export type FieldsValues<T> =
	T extends Readable<infer U>
		? U
		: {
				[K in keyof T]: T[K] extends Readable<infer U> ? U : never;
			};
export type Fields =
	| Readable<any>
	| [Readable<any>, ...Array<Readable<any>>]
	| Array<Readable<any>>;
export type Form = {
	valid: boolean;
	dirty: boolean;
	errors: string[];
};

export declare function isField<T>(field: any): field is Field<T>;
