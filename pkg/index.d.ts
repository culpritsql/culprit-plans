import initialize from "./native/culprit_wasm.js";
import type { CompareContext } from "./models/CompareContext.js";
import type { Deadlock } from "./models/Deadlock.js";
import type { Engine } from "./models/Engine.js";
import type { Error as CoreError } from "./models/Error.js";
import type { ExportFile } from "./models/ExportFile.js";
import type { ExportFormat } from "./models/ExportFormat.js";
import type { ExportOptions } from "./models/ExportOptions.js";
import type { Plan } from "./models/Plan.js";
import type { PlanDiff } from "./models/PlanDiff.js";
export type { CompareContext, Deadlock, Engine, CoreError, ExportFile, ExportFormat, ExportOptions, Plan, PlanDiff };
/** Initialize the local module once before calling its synchronous pure operations. */
export declare function init(input?: Parameters<typeof initialize>[0]): Promise<void>;
/** The exact Core error returned by the shared parser/export owner, without a second message catalogue. */
export declare class ParserError extends Error {
    readonly error: CoreError;
    constructor(error: CoreError);
}
/** Parse only supplied text. An engine hint is checked by the existing strict native-format owner. */
export declare function parsePlan(input: string, engine?: Engine): Plan;
/** Compare supplied originals. Optional statistics are explicit; no database is opened or discovered. */
export declare function diffPlans(a: Plan, nameA: string, b: Plan, nameB: string, context?: CompareContext): PlanDiff;
/** Parse native deadlock text into the existing Core observations; no source or clock is inferred. */
export declare function parseDeadlock(input: string): Deadlock[];
/** Keep the existing Markdown/HTML/native redaction and file-naming policy. */
export declare function exportPlan(plan: Plan, title: string, format: ExportFormat, options: ExportOptions): ExportFile;
