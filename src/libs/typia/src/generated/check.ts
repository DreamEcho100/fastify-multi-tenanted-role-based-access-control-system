import typia from 'typia';
import { IMember } from "../structures/IMember";
import { IUser } from "../structures/IUser";
export const memberValidator = (input: unknown) => ((input: any, errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error): IMember => {
    const __is = (input: any): input is IMember => {
        return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test((input as any).id) && ("string" === typeof (input as any).email && /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test((input as any).email)) && ("number" === typeof (input as any).age && (19 < (input as any).age && (input as any).age <= 100)) && ("string" === typeof (input as any).test && /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test((input as any).test)) && "string" === typeof (input as any).fullName);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is IMember => {
            const $guard = (typia.assert as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id && (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(input.id) || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string & Format<\"uuid\">",
                value: input.id
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "(string & Format<\"uuid\">)",
                value: input.id
            }, errorFactory)) && ("string" === typeof input.email && (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(input.email) || $guard(_exceptionable, {
                path: _path + ".email",
                expected: "string & Format<\"email\">",
                value: input.email
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".email",
                expected: "(string & Format<\"email\">)",
                value: input.email
            }, errorFactory)) && ("number" === typeof input.age && (19 < input.age || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number & ExclusiveMinimum<19>",
                value: input.age
            }, errorFactory)) && (input.age <= 100 || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number & Maximum<100>",
                value: input.age
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "(number & ExclusiveMinimum<19> & Maximum<100>)",
                value: input.age
            }, errorFactory)) && ("string" === typeof input.test && (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(input.test) || $guard(_exceptionable, {
                path: _path + ".test",
                expected: "string & Format<\"uuid\">",
                value: input.test
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".test",
                expected: "(string & Format<\"uuid\">)",
                value: input.test
            }, errorFactory)) && ("string" === typeof input.fullName || $guard(_exceptionable, {
                path: _path + ".fullName",
                expected: "string",
                value: input.fullName
            }, errorFactory));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "IMember",
                value: input
            }, errorFactory)) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "IMember",
                value: input
            }, errorFactory);
        })(input, "$input", true);
    return input;
})(input);
export const userValidator = (input: unknown) => ((input: any, errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error): IUser => {
    const __is = (input: any): input is IUser => {
        const $io0 = (input: any): boolean => "string" === typeof input.id && 2 <= input.id.length && ("string" === typeof input.name && 2 <= input.name.length) && ("string" === typeof input.email && /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(input.email)) && (undefined === input.age || "number" === typeof input.age && (19 < input.age && input.age <= 100));
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is IUser => {
            const $guard = (typia.assert as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id && (2 <= input.id.length || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string & MinLength<2>",
                value: input.id
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "(string & MinLength<2>)",
                value: input.id
            }, errorFactory)) && ("string" === typeof input.name && (2 <= input.name.length || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string & MinLength<2>",
                value: input.name
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "(string & MinLength<2>)",
                value: input.name
            }, errorFactory)) && ("string" === typeof input.email && (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(input.email) || $guard(_exceptionable, {
                path: _path + ".email",
                expected: "string & Format<\"email\">",
                value: input.email
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".email",
                expected: "(string & Format<\"email\">)",
                value: input.email
            }, errorFactory)) && (undefined === input.age || "number" === typeof input.age && (19 < input.age || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number & ExclusiveMinimum<19>",
                value: input.age
            }, errorFactory)) && (input.age <= 100 || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number & Maximum<100>",
                value: input.age
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "((number & ExclusiveMinimum<19> & Maximum<100>) | undefined)",
                value: input.age
            }, errorFactory));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "IUser",
                value: input
            }, errorFactory)) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "IUser",
                value: input
            }, errorFactory);
        })(input, "$input", true);
    return input;
})(input);
export const userCreateValidator = (input: unknown) => ((input: any, errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error): Omit<IUser, 'id'> => {
    const __is = (input: any): input is Omit<IUser, 'id'> => {
        const $io0 = (input: any): boolean => "string" === typeof input.email && /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(input.email) && ("string" === typeof input.name && 2 <= input.name.length) && (undefined === input.age || "number" === typeof input.age && (19 < input.age && input.age <= 100));
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Omit<IUser, 'id'> => {
            const $guard = (typia.assert as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.email && (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(input.email) || $guard(_exceptionable, {
                path: _path + ".email",
                expected: "string & Format<\"email\">",
                value: input.email
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".email",
                expected: "(string & Format<\"email\">)",
                value: input.email
            }, errorFactory)) && ("string" === typeof input.name && (2 <= input.name.length || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string & MinLength<2>",
                value: input.name
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "(string & MinLength<2>)",
                value: input.name
            }, errorFactory)) && (undefined === input.age || "number" === typeof input.age && (19 < input.age || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number & ExclusiveMinimum<19>",
                value: input.age
            }, errorFactory)) && (input.age <= 100 || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number & Maximum<100>",
                value: input.age
            }, errorFactory)) || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "((number & ExclusiveMinimum<19> & Maximum<100>) | undefined)",
                value: input.age
            }, errorFactory));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "Omit<IUser, \"id\">",
                value: input
            }, errorFactory)) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "Omit<IUser, \"id\">",
                value: input
            }, errorFactory);
        })(input, "$input", true);
    return input;
})(input);
export const isUser = typia.is<IUser>;
