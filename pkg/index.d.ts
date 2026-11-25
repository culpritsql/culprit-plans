import initialize from "./native/culprit_wasm.js";
import type { ActivityClient } from "./models/ActivityClient.js";
import type { CompareContext } from "./models/CompareContext.js";
import type { Deadlock } from "./models/Deadlock.js";
import type { DefinitionPayload } from "./models/DefinitionPayload.js";
import type { Engine } from "./models/Engine.js";
import type { Error as CoreError } from "./models/Error.js";
import type { ExportFile } from "./models/ExportFile.js";
import type { ExportFormat } from "./models/ExportFormat.js";
import type { ExportOptions } from "./models/ExportOptions.js";
import type { ExtendedEventsBatch } from "./models/ExtendedEventsBatch.js";
import type { ExtendedEventsFormat } from "./models/ExtendedEventsFormat.js";
import type { ImportedEventDeadlock } from "./models/ImportedEventDeadlock.js";
import type { ImportedEventLocation } from "./models/ImportedEventLocation.js";
import type { MssqlExtendedEventKind } from "./models/MssqlExtendedEventKind.js";
import type { MssqlExtendedEventObservation } from "./models/MssqlExtendedEventObservation.js";
import type { NativeLogIssue } from "./models/NativeLogIssue.js";
import type { NativeLogLimits } from "./models/NativeLogLimits.js";
import type { NativeLogProblem } from "./models/NativeLogProblem.js";
import type { PayloadUnavailable } from "./models/PayloadUnavailable.js";
import type { Plan } from "./models/Plan.js";
import type { PlanDiff } from "./models/PlanDiff.js";
export type { ActivityClient, CompareContext, CoreError, Deadlock, DefinitionPayload, Engine, ExportFile, ExportFormat, ExportOptions, ExtendedEventsBatch, ExtendedEventsFormat, ImportedEventDeadlock, ImportedEventLocation, MssqlExtendedEventKind, MssqlExtendedEventObservation, NativeLogIssue, NativeLogLimits, NativeLogProblem, PayloadUnavailable, Plan, PlanDiff, };
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
/** Decode a binary SQL Server Extended Events (.xel) buffer within explicit or default bounds. XML text is refused on this route. */
export declare function parseXel(input: Uint8Array, limits?: Partial<NativeLogLimits>): ExtendedEventsBatch;
/** Decode exported SQL Server Extended Events XML (`<events>`, `<RingBufferTarget>`, or `<event>`) within bounds. Binary .xel is refused. */
export declare function parseExtendedEventsXml(input: string | Uint8Array, limits?: Partial<NativeLogLimits>): ExtendedEventsBatch;
/** Keep the existing Markdown/HTML/native redaction and file-naming policy. */
export declare function exportPlan(plan: Plan, title: string, format: ExportFormat, options: ExportOptions): ExportFile;
