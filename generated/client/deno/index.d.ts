
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model ExerciseProgresses
 * 
 */
export type ExerciseProgresses = {
  id: string
  date: Date
  prevRep: number | null
  newRep: number | null
  prevWeight: number | null
  newWeight: number | null
  prevDur: number | null
  newDur: number | null
}

/**
 * Model Exercises
 * 
 */
export type Exercises = {
  id: string
  name: string
  description: string | null
  muscle_group: MuscleGroup | null
  exercise_type: ExerciseType
}

/**
 * Model Exercises_WorkoutPlans
 * 
 */
export type Exercises_WorkoutPlans = {
  Exercises_id: string
  WorkoutPlans_id: string
}

/**
 * Model Users
 * 
 */
export type Users = {
  id: string
  username: string
  email: string
  created_at: Date | null
  profile_pic_uri: string | null
}

/**
 * Model Users_Exercises
 * 
 */
export type Users_Exercises = {
  Users_id: string
  Exercises_id: string
}

/**
 * Model Users_WorkoutPlans
 * 
 */
export type Users_WorkoutPlans = {
  Users_id: string
  WorkoutPlans_id: string
}

/**
 * Model WorkoutPlans
 * 
 */
export type WorkoutPlans = {
  id: string
  name: string
  description: string | null
}

/**
 * Model nessie_migrations
 * 
 */
export type nessie_migrations = {
  id: bigint
  file_name: string | null
  created_at: Date | null
}


/**
 * Enums
 */

export const ExerciseType: {
  Cardio: 'Cardio',
  Muscle: 'Muscle'
};

export type ExerciseType = (typeof ExerciseType)[keyof typeof ExerciseType]


export const MuscleGroup: {
  Chest: 'Chest',
  Back: 'Back',
  Legs: 'Legs',
  Shoulders: 'Shoulders',
  Arms: 'Arms',
  Abs: 'Abs'
};

export type MuscleGroup = (typeof MuscleGroup)[keyof typeof MuscleGroup]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ExerciseProgresses
 * const exerciseProgresses = await prisma.exerciseProgresses.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ExerciseProgresses
   * const exerciseProgresses = await prisma.exerciseProgresses.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.exerciseProgresses`: Exposes CRUD operations for the **ExerciseProgresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExerciseProgresses
    * const exerciseProgresses = await prisma.exerciseProgresses.findMany()
    * ```
    */
  get exerciseProgresses(): Prisma.ExerciseProgressesDelegate<GlobalReject>;

  /**
   * `prisma.exercises`: Exposes CRUD operations for the **Exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercises.findMany()
    * ```
    */
  get exercises(): Prisma.ExercisesDelegate<GlobalReject>;

  /**
   * `prisma.exercises_WorkoutPlans`: Exposes CRUD operations for the **Exercises_WorkoutPlans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises_WorkoutPlans
    * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.findMany()
    * ```
    */
  get exercises_WorkoutPlans(): Prisma.Exercises_WorkoutPlansDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.users_Exercises`: Exposes CRUD operations for the **Users_Exercises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_Exercises
    * const users_Exercises = await prisma.users_Exercises.findMany()
    * ```
    */
  get users_Exercises(): Prisma.Users_ExercisesDelegate<GlobalReject>;

  /**
   * `prisma.users_WorkoutPlans`: Exposes CRUD operations for the **Users_WorkoutPlans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_WorkoutPlans
    * const users_WorkoutPlans = await prisma.users_WorkoutPlans.findMany()
    * ```
    */
  get users_WorkoutPlans(): Prisma.Users_WorkoutPlansDelegate<GlobalReject>;

  /**
   * `prisma.workoutPlans`: Exposes CRUD operations for the **WorkoutPlans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutPlans
    * const workoutPlans = await prisma.workoutPlans.findMany()
    * ```
    */
  get workoutPlans(): Prisma.WorkoutPlansDelegate<GlobalReject>;

  /**
   * `prisma.nessie_migrations`: Exposes CRUD operations for the **nessie_migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nessie_migrations
    * const nessie_migrations = await prisma.nessie_migrations.findMany()
    * ```
    */
  get nessie_migrations(): Prisma.nessie_migrationsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ExerciseProgresses: 'ExerciseProgresses',
    Exercises: 'Exercises',
    Exercises_WorkoutPlans: 'Exercises_WorkoutPlans',
    Users: 'Users',
    Users_Exercises: 'Users_Exercises',
    Users_WorkoutPlans: 'Users_WorkoutPlans',
    WorkoutPlans: 'WorkoutPlans',
    nessie_migrations: 'nessie_migrations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ExercisesCountOutputType
   */


  export type ExercisesCountOutputType = {
    Exercises_WorkoutPlans: number
    Users_Exercises: number
  }

  export type ExercisesCountOutputTypeSelect = {
    Exercises_WorkoutPlans?: boolean
    Users_Exercises?: boolean
  }

  export type ExercisesCountOutputTypeGetPayload<S extends boolean | null | undefined | ExercisesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExercisesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ExercisesCountOutputTypeArgs)
    ? ExercisesCountOutputType 
    : S extends { select: any } & (ExercisesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ExercisesCountOutputType ? ExercisesCountOutputType[P] : never
  } 
      : ExercisesCountOutputType




  // Custom InputTypes

  /**
   * ExercisesCountOutputType without action
   */
  export type ExercisesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ExercisesCountOutputType
     */
    select?: ExercisesCountOutputTypeSelect | null
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    Users_Exercises: number
    Users_WorkoutPlans: number
  }

  export type UsersCountOutputTypeSelect = {
    Users_Exercises?: boolean
    Users_WorkoutPlans?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Count Type WorkoutPlansCountOutputType
   */


  export type WorkoutPlansCountOutputType = {
    Exercises_WorkoutPlans: number
    Users_WorkoutPlans: number
  }

  export type WorkoutPlansCountOutputTypeSelect = {
    Exercises_WorkoutPlans?: boolean
    Users_WorkoutPlans?: boolean
  }

  export type WorkoutPlansCountOutputTypeGetPayload<S extends boolean | null | undefined | WorkoutPlansCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkoutPlansCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WorkoutPlansCountOutputTypeArgs)
    ? WorkoutPlansCountOutputType 
    : S extends { select: any } & (WorkoutPlansCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WorkoutPlansCountOutputType ? WorkoutPlansCountOutputType[P] : never
  } 
      : WorkoutPlansCountOutputType




  // Custom InputTypes

  /**
   * WorkoutPlansCountOutputType without action
   */
  export type WorkoutPlansCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorkoutPlansCountOutputType
     */
    select?: WorkoutPlansCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model ExerciseProgresses
   */


  export type AggregateExerciseProgresses = {
    _count: ExerciseProgressesCountAggregateOutputType | null
    _avg: ExerciseProgressesAvgAggregateOutputType | null
    _sum: ExerciseProgressesSumAggregateOutputType | null
    _min: ExerciseProgressesMinAggregateOutputType | null
    _max: ExerciseProgressesMaxAggregateOutputType | null
  }

  export type ExerciseProgressesAvgAggregateOutputType = {
    prevRep: number | null
    newRep: number | null
    prevWeight: number | null
    newWeight: number | null
    prevDur: number | null
    newDur: number | null
  }

  export type ExerciseProgressesSumAggregateOutputType = {
    prevRep: number | null
    newRep: number | null
    prevWeight: number | null
    newWeight: number | null
    prevDur: number | null
    newDur: number | null
  }

  export type ExerciseProgressesMinAggregateOutputType = {
    id: string | null
    date: Date | null
    prevRep: number | null
    newRep: number | null
    prevWeight: number | null
    newWeight: number | null
    prevDur: number | null
    newDur: number | null
  }

  export type ExerciseProgressesMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    prevRep: number | null
    newRep: number | null
    prevWeight: number | null
    newWeight: number | null
    prevDur: number | null
    newDur: number | null
  }

  export type ExerciseProgressesCountAggregateOutputType = {
    id: number
    date: number
    prevRep: number
    newRep: number
    prevWeight: number
    newWeight: number
    prevDur: number
    newDur: number
    _all: number
  }


  export type ExerciseProgressesAvgAggregateInputType = {
    prevRep?: true
    newRep?: true
    prevWeight?: true
    newWeight?: true
    prevDur?: true
    newDur?: true
  }

  export type ExerciseProgressesSumAggregateInputType = {
    prevRep?: true
    newRep?: true
    prevWeight?: true
    newWeight?: true
    prevDur?: true
    newDur?: true
  }

  export type ExerciseProgressesMinAggregateInputType = {
    id?: true
    date?: true
    prevRep?: true
    newRep?: true
    prevWeight?: true
    newWeight?: true
    prevDur?: true
    newDur?: true
  }

  export type ExerciseProgressesMaxAggregateInputType = {
    id?: true
    date?: true
    prevRep?: true
    newRep?: true
    prevWeight?: true
    newWeight?: true
    prevDur?: true
    newDur?: true
  }

  export type ExerciseProgressesCountAggregateInputType = {
    id?: true
    date?: true
    prevRep?: true
    newRep?: true
    prevWeight?: true
    newWeight?: true
    prevDur?: true
    newDur?: true
    _all?: true
  }

  export type ExerciseProgressesAggregateArgs = {
    /**
     * Filter which ExerciseProgresses to aggregate.
     */
    where?: ExerciseProgressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseProgresses to fetch.
     */
    orderBy?: Enumerable<ExerciseProgressesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseProgressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExerciseProgresses
    **/
    _count?: true | ExerciseProgressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseProgressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseProgressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseProgressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseProgressesMaxAggregateInputType
  }

  export type GetExerciseProgressesAggregateType<T extends ExerciseProgressesAggregateArgs> = {
        [P in keyof T & keyof AggregateExerciseProgresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExerciseProgresses[P]>
      : GetScalarType<T[P], AggregateExerciseProgresses[P]>
  }




  export type ExerciseProgressesGroupByArgs = {
    where?: ExerciseProgressesWhereInput
    orderBy?: Enumerable<ExerciseProgressesOrderByWithAggregationInput>
    by: ExerciseProgressesScalarFieldEnum[]
    having?: ExerciseProgressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseProgressesCountAggregateInputType | true
    _avg?: ExerciseProgressesAvgAggregateInputType
    _sum?: ExerciseProgressesSumAggregateInputType
    _min?: ExerciseProgressesMinAggregateInputType
    _max?: ExerciseProgressesMaxAggregateInputType
  }


  export type ExerciseProgressesGroupByOutputType = {
    id: string
    date: Date
    prevRep: number | null
    newRep: number | null
    prevWeight: number | null
    newWeight: number | null
    prevDur: number | null
    newDur: number | null
    _count: ExerciseProgressesCountAggregateOutputType | null
    _avg: ExerciseProgressesAvgAggregateOutputType | null
    _sum: ExerciseProgressesSumAggregateOutputType | null
    _min: ExerciseProgressesMinAggregateOutputType | null
    _max: ExerciseProgressesMaxAggregateOutputType | null
  }

  type GetExerciseProgressesGroupByPayload<T extends ExerciseProgressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExerciseProgressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseProgressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseProgressesGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseProgressesGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseProgressesSelect = {
    id?: boolean
    date?: boolean
    prevRep?: boolean
    newRep?: boolean
    prevWeight?: boolean
    newWeight?: boolean
    prevDur?: boolean
    newDur?: boolean
    Users?: boolean | UsersArgs
    Exercises?: boolean | ExercisesArgs
  }


  export type ExerciseProgressesInclude = {
    Users?: boolean | UsersArgs
    Exercises?: boolean | ExercisesArgs
  }

  export type ExerciseProgressesGetPayload<S extends boolean | null | undefined | ExerciseProgressesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ExerciseProgresses :
    S extends undefined ? never :
    S extends { include: any } & (ExerciseProgressesArgs | ExerciseProgressesFindManyArgs)
    ? ExerciseProgresses  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Users' ? UsersGetPayload<S['include'][P]> :
        P extends 'Exercises' ? ExercisesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExerciseProgressesArgs | ExerciseProgressesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Users' ? UsersGetPayload<S['select'][P]> :
        P extends 'Exercises' ? ExercisesGetPayload<S['select'][P]> :  P extends keyof ExerciseProgresses ? ExerciseProgresses[P] : never
  } 
      : ExerciseProgresses


  type ExerciseProgressesCountArgs = 
    Omit<ExerciseProgressesFindManyArgs, 'select' | 'include'> & {
      select?: ExerciseProgressesCountAggregateInputType | true
    }

  export interface ExerciseProgressesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ExerciseProgresses that matches the filter.
     * @param {ExerciseProgressesFindUniqueArgs} args - Arguments to find a ExerciseProgresses
     * @example
     * // Get one ExerciseProgresses
     * const exerciseProgresses = await prisma.exerciseProgresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExerciseProgressesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExerciseProgressesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ExerciseProgresses'> extends True ? Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T>> : Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T> | null, null>

    /**
     * Find one ExerciseProgresses that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExerciseProgressesFindUniqueOrThrowArgs} args - Arguments to find a ExerciseProgresses
     * @example
     * // Get one ExerciseProgresses
     * const exerciseProgresses = await prisma.exerciseProgresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExerciseProgressesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExerciseProgressesFindUniqueOrThrowArgs>
    ): Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T>>

    /**
     * Find the first ExerciseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseProgressesFindFirstArgs} args - Arguments to find a ExerciseProgresses
     * @example
     * // Get one ExerciseProgresses
     * const exerciseProgresses = await prisma.exerciseProgresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExerciseProgressesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExerciseProgressesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ExerciseProgresses'> extends True ? Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T>> : Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T> | null, null>

    /**
     * Find the first ExerciseProgresses that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseProgressesFindFirstOrThrowArgs} args - Arguments to find a ExerciseProgresses
     * @example
     * // Get one ExerciseProgresses
     * const exerciseProgresses = await prisma.exerciseProgresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExerciseProgressesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExerciseProgressesFindFirstOrThrowArgs>
    ): Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T>>

    /**
     * Find zero or more ExerciseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseProgressesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExerciseProgresses
     * const exerciseProgresses = await prisma.exerciseProgresses.findMany()
     * 
     * // Get first 10 ExerciseProgresses
     * const exerciseProgresses = await prisma.exerciseProgresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseProgressesWithIdOnly = await prisma.exerciseProgresses.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExerciseProgressesFindManyArgs>(
      args?: SelectSubset<T, ExerciseProgressesFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExerciseProgressesGetPayload<T>>>

    /**
     * Create a ExerciseProgresses.
     * @param {ExerciseProgressesCreateArgs} args - Arguments to create a ExerciseProgresses.
     * @example
     * // Create one ExerciseProgresses
     * const ExerciseProgresses = await prisma.exerciseProgresses.create({
     *   data: {
     *     // ... data to create a ExerciseProgresses
     *   }
     * })
     * 
    **/
    create<T extends ExerciseProgressesCreateArgs>(
      args: SelectSubset<T, ExerciseProgressesCreateArgs>
    ): Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T>>

    /**
     * Create many ExerciseProgresses.
     *     @param {ExerciseProgressesCreateManyArgs} args - Arguments to create many ExerciseProgresses.
     *     @example
     *     // Create many ExerciseProgresses
     *     const exerciseProgresses = await prisma.exerciseProgresses.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExerciseProgressesCreateManyArgs>(
      args?: SelectSubset<T, ExerciseProgressesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExerciseProgresses.
     * @param {ExerciseProgressesDeleteArgs} args - Arguments to delete one ExerciseProgresses.
     * @example
     * // Delete one ExerciseProgresses
     * const ExerciseProgresses = await prisma.exerciseProgresses.delete({
     *   where: {
     *     // ... filter to delete one ExerciseProgresses
     *   }
     * })
     * 
    **/
    delete<T extends ExerciseProgressesDeleteArgs>(
      args: SelectSubset<T, ExerciseProgressesDeleteArgs>
    ): Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T>>

    /**
     * Update one ExerciseProgresses.
     * @param {ExerciseProgressesUpdateArgs} args - Arguments to update one ExerciseProgresses.
     * @example
     * // Update one ExerciseProgresses
     * const exerciseProgresses = await prisma.exerciseProgresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExerciseProgressesUpdateArgs>(
      args: SelectSubset<T, ExerciseProgressesUpdateArgs>
    ): Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T>>

    /**
     * Delete zero or more ExerciseProgresses.
     * @param {ExerciseProgressesDeleteManyArgs} args - Arguments to filter ExerciseProgresses to delete.
     * @example
     * // Delete a few ExerciseProgresses
     * const { count } = await prisma.exerciseProgresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExerciseProgressesDeleteManyArgs>(
      args?: SelectSubset<T, ExerciseProgressesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExerciseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseProgressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExerciseProgresses
     * const exerciseProgresses = await prisma.exerciseProgresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExerciseProgressesUpdateManyArgs>(
      args: SelectSubset<T, ExerciseProgressesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExerciseProgresses.
     * @param {ExerciseProgressesUpsertArgs} args - Arguments to update or create a ExerciseProgresses.
     * @example
     * // Update or create a ExerciseProgresses
     * const exerciseProgresses = await prisma.exerciseProgresses.upsert({
     *   create: {
     *     // ... data to create a ExerciseProgresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExerciseProgresses we want to update
     *   }
     * })
    **/
    upsert<T extends ExerciseProgressesUpsertArgs>(
      args: SelectSubset<T, ExerciseProgressesUpsertArgs>
    ): Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T>>

    /**
     * Count the number of ExerciseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseProgressesCountArgs} args - Arguments to filter ExerciseProgresses to count.
     * @example
     * // Count the number of ExerciseProgresses
     * const count = await prisma.exerciseProgresses.count({
     *   where: {
     *     // ... the filter for the ExerciseProgresses we want to count
     *   }
     * })
    **/
    count<T extends ExerciseProgressesCountArgs>(
      args?: Subset<T, ExerciseProgressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseProgressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExerciseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseProgressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseProgressesAggregateArgs>(args: Subset<T, ExerciseProgressesAggregateArgs>): Prisma.PrismaPromise<GetExerciseProgressesAggregateType<T>>

    /**
     * Group by ExerciseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseProgressesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseProgressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseProgressesGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseProgressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseProgressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseProgressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ExerciseProgresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExerciseProgressesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Users<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    Exercises<T extends ExercisesArgs= {}>(args?: Subset<T, ExercisesArgs>): Prisma__ExercisesClient<ExercisesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ExerciseProgresses base type for findUnique actions
   */
  export type ExerciseProgressesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
    /**
     * Filter, which ExerciseProgresses to fetch.
     */
    where: ExerciseProgressesWhereUniqueInput
  }

  /**
   * ExerciseProgresses findUnique
   */
  export interface ExerciseProgressesFindUniqueArgs extends ExerciseProgressesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExerciseProgresses findUniqueOrThrow
   */
  export type ExerciseProgressesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
    /**
     * Filter, which ExerciseProgresses to fetch.
     */
    where: ExerciseProgressesWhereUniqueInput
  }


  /**
   * ExerciseProgresses base type for findFirst actions
   */
  export type ExerciseProgressesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
    /**
     * Filter, which ExerciseProgresses to fetch.
     */
    where?: ExerciseProgressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseProgresses to fetch.
     */
    orderBy?: Enumerable<ExerciseProgressesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseProgresses.
     */
    cursor?: ExerciseProgressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseProgresses.
     */
    distinct?: Enumerable<ExerciseProgressesScalarFieldEnum>
  }

  /**
   * ExerciseProgresses findFirst
   */
  export interface ExerciseProgressesFindFirstArgs extends ExerciseProgressesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ExerciseProgresses findFirstOrThrow
   */
  export type ExerciseProgressesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
    /**
     * Filter, which ExerciseProgresses to fetch.
     */
    where?: ExerciseProgressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseProgresses to fetch.
     */
    orderBy?: Enumerable<ExerciseProgressesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExerciseProgresses.
     */
    cursor?: ExerciseProgressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExerciseProgresses.
     */
    distinct?: Enumerable<ExerciseProgressesScalarFieldEnum>
  }


  /**
   * ExerciseProgresses findMany
   */
  export type ExerciseProgressesFindManyArgs = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
    /**
     * Filter, which ExerciseProgresses to fetch.
     */
    where?: ExerciseProgressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExerciseProgresses to fetch.
     */
    orderBy?: Enumerable<ExerciseProgressesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExerciseProgresses.
     */
    cursor?: ExerciseProgressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExerciseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExerciseProgresses.
     */
    skip?: number
    distinct?: Enumerable<ExerciseProgressesScalarFieldEnum>
  }


  /**
   * ExerciseProgresses create
   */
  export type ExerciseProgressesCreateArgs = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
    /**
     * The data needed to create a ExerciseProgresses.
     */
    data: XOR<ExerciseProgressesCreateInput, ExerciseProgressesUncheckedCreateInput>
  }


  /**
   * ExerciseProgresses createMany
   */
  export type ExerciseProgressesCreateManyArgs = {
    /**
     * The data used to create many ExerciseProgresses.
     */
    data: Enumerable<ExerciseProgressesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ExerciseProgresses update
   */
  export type ExerciseProgressesUpdateArgs = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
    /**
     * The data needed to update a ExerciseProgresses.
     */
    data: XOR<ExerciseProgressesUpdateInput, ExerciseProgressesUncheckedUpdateInput>
    /**
     * Choose, which ExerciseProgresses to update.
     */
    where: ExerciseProgressesWhereUniqueInput
  }


  /**
   * ExerciseProgresses updateMany
   */
  export type ExerciseProgressesUpdateManyArgs = {
    /**
     * The data used to update ExerciseProgresses.
     */
    data: XOR<ExerciseProgressesUpdateManyMutationInput, ExerciseProgressesUncheckedUpdateManyInput>
    /**
     * Filter which ExerciseProgresses to update
     */
    where?: ExerciseProgressesWhereInput
  }


  /**
   * ExerciseProgresses upsert
   */
  export type ExerciseProgressesUpsertArgs = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
    /**
     * The filter to search for the ExerciseProgresses to update in case it exists.
     */
    where: ExerciseProgressesWhereUniqueInput
    /**
     * In case the ExerciseProgresses found by the `where` argument doesn't exist, create a new ExerciseProgresses with this data.
     */
    create: XOR<ExerciseProgressesCreateInput, ExerciseProgressesUncheckedCreateInput>
    /**
     * In case the ExerciseProgresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseProgressesUpdateInput, ExerciseProgressesUncheckedUpdateInput>
  }


  /**
   * ExerciseProgresses delete
   */
  export type ExerciseProgressesDeleteArgs = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
    /**
     * Filter which ExerciseProgresses to delete.
     */
    where: ExerciseProgressesWhereUniqueInput
  }


  /**
   * ExerciseProgresses deleteMany
   */
  export type ExerciseProgressesDeleteManyArgs = {
    /**
     * Filter which ExerciseProgresses to delete
     */
    where?: ExerciseProgressesWhereInput
  }


  /**
   * ExerciseProgresses without action
   */
  export type ExerciseProgressesArgs = {
    /**
     * Select specific fields to fetch from the ExerciseProgresses
     */
    select?: ExerciseProgressesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExerciseProgressesInclude | null
  }



  /**
   * Model Exercises
   */


  export type AggregateExercises = {
    _count: ExercisesCountAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  export type ExercisesMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    muscle_group: MuscleGroup | null
    exercise_type: ExerciseType | null
  }

  export type ExercisesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    muscle_group: MuscleGroup | null
    exercise_type: ExerciseType | null
  }

  export type ExercisesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    muscle_group: number
    exercise_type: number
    _all: number
  }


  export type ExercisesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscle_group?: true
    exercise_type?: true
  }

  export type ExercisesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscle_group?: true
    exercise_type?: true
  }

  export type ExercisesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    muscle_group?: true
    exercise_type?: true
    _all?: true
  }

  export type ExercisesAggregateArgs = {
    /**
     * Filter which Exercises to aggregate.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: Enumerable<ExercisesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExercisesMaxAggregateInputType
  }

  export type GetExercisesAggregateType<T extends ExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateExercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercises[P]>
      : GetScalarType<T[P], AggregateExercises[P]>
  }




  export type ExercisesGroupByArgs = {
    where?: ExercisesWhereInput
    orderBy?: Enumerable<ExercisesOrderByWithAggregationInput>
    by: ExercisesScalarFieldEnum[]
    having?: ExercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExercisesCountAggregateInputType | true
    _min?: ExercisesMinAggregateInputType
    _max?: ExercisesMaxAggregateInputType
  }


  export type ExercisesGroupByOutputType = {
    id: string
    name: string
    description: string | null
    muscle_group: MuscleGroup | null
    exercise_type: ExerciseType
    _count: ExercisesCountAggregateOutputType | null
    _min: ExercisesMinAggregateOutputType | null
    _max: ExercisesMaxAggregateOutputType | null
  }

  type GetExercisesGroupByPayload<T extends ExercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], ExercisesGroupByOutputType[P]>
        }
      >
    >


  export type ExercisesSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    muscle_group?: boolean
    exercise_type?: boolean
    ExerciseProgresses?: boolean | ExerciseProgressesArgs
    Exercises_WorkoutPlans?: boolean | Exercises$Exercises_WorkoutPlansArgs
    Users_Exercises?: boolean | Exercises$Users_ExercisesArgs
    _count?: boolean | ExercisesCountOutputTypeArgs
  }


  export type ExercisesInclude = {
    ExerciseProgresses?: boolean | ExerciseProgressesArgs
    Exercises_WorkoutPlans?: boolean | Exercises$Exercises_WorkoutPlansArgs
    Users_Exercises?: boolean | Exercises$Users_ExercisesArgs
    _count?: boolean | ExercisesCountOutputTypeArgs
  }

  export type ExercisesGetPayload<S extends boolean | null | undefined | ExercisesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Exercises :
    S extends undefined ? never :
    S extends { include: any } & (ExercisesArgs | ExercisesFindManyArgs)
    ? Exercises  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ExerciseProgresses' ? ExerciseProgressesGetPayload<S['include'][P]> | null :
        P extends 'Exercises_WorkoutPlans' ? Array < Exercises_WorkoutPlansGetPayload<S['include'][P]>>  :
        P extends 'Users_Exercises' ? Array < Users_ExercisesGetPayload<S['include'][P]>>  :
        P extends '_count' ? ExercisesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ExercisesArgs | ExercisesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ExerciseProgresses' ? ExerciseProgressesGetPayload<S['select'][P]> | null :
        P extends 'Exercises_WorkoutPlans' ? Array < Exercises_WorkoutPlansGetPayload<S['select'][P]>>  :
        P extends 'Users_Exercises' ? Array < Users_ExercisesGetPayload<S['select'][P]>>  :
        P extends '_count' ? ExercisesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Exercises ? Exercises[P] : never
  } 
      : Exercises


  type ExercisesCountArgs = 
    Omit<ExercisesFindManyArgs, 'select' | 'include'> & {
      select?: ExercisesCountAggregateInputType | true
    }

  export interface ExercisesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Exercises that matches the filter.
     * @param {ExercisesFindUniqueArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExercisesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExercisesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Exercises'> extends True ? Prisma__ExercisesClient<ExercisesGetPayload<T>> : Prisma__ExercisesClient<ExercisesGetPayload<T> | null, null>

    /**
     * Find one Exercises that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExercisesFindUniqueOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExercisesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExercisesFindUniqueOrThrowArgs>
    ): Prisma__ExercisesClient<ExercisesGetPayload<T>>

    /**
     * Find the first Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesFindFirstArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExercisesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExercisesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Exercises'> extends True ? Prisma__ExercisesClient<ExercisesGetPayload<T>> : Prisma__ExercisesClient<ExercisesGetPayload<T> | null, null>

    /**
     * Find the first Exercises that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesFindFirstOrThrowArgs} args - Arguments to find a Exercises
     * @example
     * // Get one Exercises
     * const exercises = await prisma.exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExercisesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExercisesFindFirstOrThrowArgs>
    ): Prisma__ExercisesClient<ExercisesGetPayload<T>>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercises.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exercisesWithIdOnly = await prisma.exercises.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExercisesFindManyArgs>(
      args?: SelectSubset<T, ExercisesFindManyArgs>
    ): Prisma.PrismaPromise<Array<ExercisesGetPayload<T>>>

    /**
     * Create a Exercises.
     * @param {ExercisesCreateArgs} args - Arguments to create a Exercises.
     * @example
     * // Create one Exercises
     * const Exercises = await prisma.exercises.create({
     *   data: {
     *     // ... data to create a Exercises
     *   }
     * })
     * 
    **/
    create<T extends ExercisesCreateArgs>(
      args: SelectSubset<T, ExercisesCreateArgs>
    ): Prisma__ExercisesClient<ExercisesGetPayload<T>>

    /**
     * Create many Exercises.
     *     @param {ExercisesCreateManyArgs} args - Arguments to create many Exercises.
     *     @example
     *     // Create many Exercises
     *     const exercises = await prisma.exercises.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExercisesCreateManyArgs>(
      args?: SelectSubset<T, ExercisesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exercises.
     * @param {ExercisesDeleteArgs} args - Arguments to delete one Exercises.
     * @example
     * // Delete one Exercises
     * const Exercises = await prisma.exercises.delete({
     *   where: {
     *     // ... filter to delete one Exercises
     *   }
     * })
     * 
    **/
    delete<T extends ExercisesDeleteArgs>(
      args: SelectSubset<T, ExercisesDeleteArgs>
    ): Prisma__ExercisesClient<ExercisesGetPayload<T>>

    /**
     * Update one Exercises.
     * @param {ExercisesUpdateArgs} args - Arguments to update one Exercises.
     * @example
     * // Update one Exercises
     * const exercises = await prisma.exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExercisesUpdateArgs>(
      args: SelectSubset<T, ExercisesUpdateArgs>
    ): Prisma__ExercisesClient<ExercisesGetPayload<T>>

    /**
     * Delete zero or more Exercises.
     * @param {ExercisesDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExercisesDeleteManyArgs>(
      args?: SelectSubset<T, ExercisesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercises = await prisma.exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExercisesUpdateManyArgs>(
      args: SelectSubset<T, ExercisesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercises.
     * @param {ExercisesUpsertArgs} args - Arguments to update or create a Exercises.
     * @example
     * // Update or create a Exercises
     * const exercises = await prisma.exercises.upsert({
     *   create: {
     *     // ... data to create a Exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercises we want to update
     *   }
     * })
    **/
    upsert<T extends ExercisesUpsertArgs>(
      args: SelectSubset<T, ExercisesUpsertArgs>
    ): Prisma__ExercisesClient<ExercisesGetPayload<T>>

    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercises.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExercisesCountArgs>(
      args?: Subset<T, ExercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExercisesAggregateArgs>(args: Subset<T, ExercisesAggregateArgs>): Prisma.PrismaPromise<GetExercisesAggregateType<T>>

    /**
     * Group by Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExercisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExercisesGroupByArgs['orderBy'] }
        : { orderBy?: ExercisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExercisesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ExerciseProgresses<T extends ExerciseProgressesArgs= {}>(args?: Subset<T, ExerciseProgressesArgs>): Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T> | Null>;

    Exercises_WorkoutPlans<T extends Exercises$Exercises_WorkoutPlansArgs= {}>(args?: Subset<T, Exercises$Exercises_WorkoutPlansArgs>): Prisma.PrismaPromise<Array<Exercises_WorkoutPlansGetPayload<T>>| Null>;

    Users_Exercises<T extends Exercises$Users_ExercisesArgs= {}>(args?: Subset<T, Exercises$Users_ExercisesArgs>): Prisma.PrismaPromise<Array<Users_ExercisesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Exercises base type for findUnique actions
   */
  export type ExercisesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
    /**
     * Filter, which Exercises to fetch.
     */
    where: ExercisesWhereUniqueInput
  }

  /**
   * Exercises findUnique
   */
  export interface ExercisesFindUniqueArgs extends ExercisesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exercises findUniqueOrThrow
   */
  export type ExercisesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
    /**
     * Filter, which Exercises to fetch.
     */
    where: ExercisesWhereUniqueInput
  }


  /**
   * Exercises base type for findFirst actions
   */
  export type ExercisesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: Enumerable<ExercisesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: Enumerable<ExercisesScalarFieldEnum>
  }

  /**
   * Exercises findFirst
   */
  export interface ExercisesFindFirstArgs extends ExercisesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exercises findFirstOrThrow
   */
  export type ExercisesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: Enumerable<ExercisesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: Enumerable<ExercisesScalarFieldEnum>
  }


  /**
   * Exercises findMany
   */
  export type ExercisesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: Enumerable<ExercisesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: Enumerable<ExercisesScalarFieldEnum>
  }


  /**
   * Exercises create
   */
  export type ExercisesCreateArgs = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
    /**
     * The data needed to create a Exercises.
     */
    data: XOR<ExercisesCreateInput, ExercisesUncheckedCreateInput>
  }


  /**
   * Exercises createMany
   */
  export type ExercisesCreateManyArgs = {
    /**
     * The data used to create many Exercises.
     */
    data: Enumerable<ExercisesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Exercises update
   */
  export type ExercisesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
    /**
     * The data needed to update a Exercises.
     */
    data: XOR<ExercisesUpdateInput, ExercisesUncheckedUpdateInput>
    /**
     * Choose, which Exercises to update.
     */
    where: ExercisesWhereUniqueInput
  }


  /**
   * Exercises updateMany
   */
  export type ExercisesUpdateManyArgs = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExercisesUpdateManyMutationInput, ExercisesUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExercisesWhereInput
  }


  /**
   * Exercises upsert
   */
  export type ExercisesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
    /**
     * The filter to search for the Exercises to update in case it exists.
     */
    where: ExercisesWhereUniqueInput
    /**
     * In case the Exercises found by the `where` argument doesn't exist, create a new Exercises with this data.
     */
    create: XOR<ExercisesCreateInput, ExercisesUncheckedCreateInput>
    /**
     * In case the Exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExercisesUpdateInput, ExercisesUncheckedUpdateInput>
  }


  /**
   * Exercises delete
   */
  export type ExercisesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
    /**
     * Filter which Exercises to delete.
     */
    where: ExercisesWhereUniqueInput
  }


  /**
   * Exercises deleteMany
   */
  export type ExercisesDeleteManyArgs = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExercisesWhereInput
  }


  /**
   * Exercises.Exercises_WorkoutPlans
   */
  export type Exercises$Exercises_WorkoutPlansArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    where?: Exercises_WorkoutPlansWhereInput
    orderBy?: Enumerable<Exercises_WorkoutPlansOrderByWithRelationInput>
    cursor?: Exercises_WorkoutPlansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Exercises_WorkoutPlansScalarFieldEnum>
  }


  /**
   * Exercises.Users_Exercises
   */
  export type Exercises$Users_ExercisesArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    where?: Users_ExercisesWhereInput
    orderBy?: Enumerable<Users_ExercisesOrderByWithRelationInput>
    cursor?: Users_ExercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Users_ExercisesScalarFieldEnum>
  }


  /**
   * Exercises without action
   */
  export type ExercisesArgs = {
    /**
     * Select specific fields to fetch from the Exercises
     */
    select?: ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExercisesInclude | null
  }



  /**
   * Model Exercises_WorkoutPlans
   */


  export type AggregateExercises_WorkoutPlans = {
    _count: Exercises_WorkoutPlansCountAggregateOutputType | null
    _min: Exercises_WorkoutPlansMinAggregateOutputType | null
    _max: Exercises_WorkoutPlansMaxAggregateOutputType | null
  }

  export type Exercises_WorkoutPlansMinAggregateOutputType = {
    Exercises_id: string | null
    WorkoutPlans_id: string | null
  }

  export type Exercises_WorkoutPlansMaxAggregateOutputType = {
    Exercises_id: string | null
    WorkoutPlans_id: string | null
  }

  export type Exercises_WorkoutPlansCountAggregateOutputType = {
    Exercises_id: number
    WorkoutPlans_id: number
    _all: number
  }


  export type Exercises_WorkoutPlansMinAggregateInputType = {
    Exercises_id?: true
    WorkoutPlans_id?: true
  }

  export type Exercises_WorkoutPlansMaxAggregateInputType = {
    Exercises_id?: true
    WorkoutPlans_id?: true
  }

  export type Exercises_WorkoutPlansCountAggregateInputType = {
    Exercises_id?: true
    WorkoutPlans_id?: true
    _all?: true
  }

  export type Exercises_WorkoutPlansAggregateArgs = {
    /**
     * Filter which Exercises_WorkoutPlans to aggregate.
     */
    where?: Exercises_WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises_WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<Exercises_WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Exercises_WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises_WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises_WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises_WorkoutPlans
    **/
    _count?: true | Exercises_WorkoutPlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Exercises_WorkoutPlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Exercises_WorkoutPlansMaxAggregateInputType
  }

  export type GetExercises_WorkoutPlansAggregateType<T extends Exercises_WorkoutPlansAggregateArgs> = {
        [P in keyof T & keyof AggregateExercises_WorkoutPlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercises_WorkoutPlans[P]>
      : GetScalarType<T[P], AggregateExercises_WorkoutPlans[P]>
  }




  export type Exercises_WorkoutPlansGroupByArgs = {
    where?: Exercises_WorkoutPlansWhereInput
    orderBy?: Enumerable<Exercises_WorkoutPlansOrderByWithAggregationInput>
    by: Exercises_WorkoutPlansScalarFieldEnum[]
    having?: Exercises_WorkoutPlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Exercises_WorkoutPlansCountAggregateInputType | true
    _min?: Exercises_WorkoutPlansMinAggregateInputType
    _max?: Exercises_WorkoutPlansMaxAggregateInputType
  }


  export type Exercises_WorkoutPlansGroupByOutputType = {
    Exercises_id: string
    WorkoutPlans_id: string
    _count: Exercises_WorkoutPlansCountAggregateOutputType | null
    _min: Exercises_WorkoutPlansMinAggregateOutputType | null
    _max: Exercises_WorkoutPlansMaxAggregateOutputType | null
  }

  type GetExercises_WorkoutPlansGroupByPayload<T extends Exercises_WorkoutPlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Exercises_WorkoutPlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Exercises_WorkoutPlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Exercises_WorkoutPlansGroupByOutputType[P]>
            : GetScalarType<T[P], Exercises_WorkoutPlansGroupByOutputType[P]>
        }
      >
    >


  export type Exercises_WorkoutPlansSelect = {
    Exercises_id?: boolean
    WorkoutPlans_id?: boolean
    Exercises?: boolean | ExercisesArgs
    WorkoutPlans?: boolean | WorkoutPlansArgs
  }


  export type Exercises_WorkoutPlansInclude = {
    Exercises?: boolean | ExercisesArgs
    WorkoutPlans?: boolean | WorkoutPlansArgs
  }

  export type Exercises_WorkoutPlansGetPayload<S extends boolean | null | undefined | Exercises_WorkoutPlansArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Exercises_WorkoutPlans :
    S extends undefined ? never :
    S extends { include: any } & (Exercises_WorkoutPlansArgs | Exercises_WorkoutPlansFindManyArgs)
    ? Exercises_WorkoutPlans  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Exercises' ? ExercisesGetPayload<S['include'][P]> :
        P extends 'WorkoutPlans' ? WorkoutPlansGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Exercises_WorkoutPlansArgs | Exercises_WorkoutPlansFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Exercises' ? ExercisesGetPayload<S['select'][P]> :
        P extends 'WorkoutPlans' ? WorkoutPlansGetPayload<S['select'][P]> :  P extends keyof Exercises_WorkoutPlans ? Exercises_WorkoutPlans[P] : never
  } 
      : Exercises_WorkoutPlans


  type Exercises_WorkoutPlansCountArgs = 
    Omit<Exercises_WorkoutPlansFindManyArgs, 'select' | 'include'> & {
      select?: Exercises_WorkoutPlansCountAggregateInputType | true
    }

  export interface Exercises_WorkoutPlansDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Exercises_WorkoutPlans that matches the filter.
     * @param {Exercises_WorkoutPlansFindUniqueArgs} args - Arguments to find a Exercises_WorkoutPlans
     * @example
     * // Get one Exercises_WorkoutPlans
     * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Exercises_WorkoutPlansFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Exercises_WorkoutPlansFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Exercises_WorkoutPlans'> extends True ? Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T>> : Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T> | null, null>

    /**
     * Find one Exercises_WorkoutPlans that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Exercises_WorkoutPlansFindUniqueOrThrowArgs} args - Arguments to find a Exercises_WorkoutPlans
     * @example
     * // Get one Exercises_WorkoutPlans
     * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Exercises_WorkoutPlansFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Exercises_WorkoutPlansFindUniqueOrThrowArgs>
    ): Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T>>

    /**
     * Find the first Exercises_WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exercises_WorkoutPlansFindFirstArgs} args - Arguments to find a Exercises_WorkoutPlans
     * @example
     * // Get one Exercises_WorkoutPlans
     * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Exercises_WorkoutPlansFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Exercises_WorkoutPlansFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Exercises_WorkoutPlans'> extends True ? Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T>> : Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T> | null, null>

    /**
     * Find the first Exercises_WorkoutPlans that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exercises_WorkoutPlansFindFirstOrThrowArgs} args - Arguments to find a Exercises_WorkoutPlans
     * @example
     * // Get one Exercises_WorkoutPlans
     * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Exercises_WorkoutPlansFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Exercises_WorkoutPlansFindFirstOrThrowArgs>
    ): Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T>>

    /**
     * Find zero or more Exercises_WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exercises_WorkoutPlansFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises_WorkoutPlans
     * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.findMany()
     * 
     * // Get first 10 Exercises_WorkoutPlans
     * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.findMany({ take: 10 })
     * 
     * // Only select the `Exercises_id`
     * const exercises_WorkoutPlansWithExercises_idOnly = await prisma.exercises_WorkoutPlans.findMany({ select: { Exercises_id: true } })
     * 
    **/
    findMany<T extends Exercises_WorkoutPlansFindManyArgs>(
      args?: SelectSubset<T, Exercises_WorkoutPlansFindManyArgs>
    ): Prisma.PrismaPromise<Array<Exercises_WorkoutPlansGetPayload<T>>>

    /**
     * Create a Exercises_WorkoutPlans.
     * @param {Exercises_WorkoutPlansCreateArgs} args - Arguments to create a Exercises_WorkoutPlans.
     * @example
     * // Create one Exercises_WorkoutPlans
     * const Exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.create({
     *   data: {
     *     // ... data to create a Exercises_WorkoutPlans
     *   }
     * })
     * 
    **/
    create<T extends Exercises_WorkoutPlansCreateArgs>(
      args: SelectSubset<T, Exercises_WorkoutPlansCreateArgs>
    ): Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T>>

    /**
     * Create many Exercises_WorkoutPlans.
     *     @param {Exercises_WorkoutPlansCreateManyArgs} args - Arguments to create many Exercises_WorkoutPlans.
     *     @example
     *     // Create many Exercises_WorkoutPlans
     *     const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Exercises_WorkoutPlansCreateManyArgs>(
      args?: SelectSubset<T, Exercises_WorkoutPlansCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exercises_WorkoutPlans.
     * @param {Exercises_WorkoutPlansDeleteArgs} args - Arguments to delete one Exercises_WorkoutPlans.
     * @example
     * // Delete one Exercises_WorkoutPlans
     * const Exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.delete({
     *   where: {
     *     // ... filter to delete one Exercises_WorkoutPlans
     *   }
     * })
     * 
    **/
    delete<T extends Exercises_WorkoutPlansDeleteArgs>(
      args: SelectSubset<T, Exercises_WorkoutPlansDeleteArgs>
    ): Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T>>

    /**
     * Update one Exercises_WorkoutPlans.
     * @param {Exercises_WorkoutPlansUpdateArgs} args - Arguments to update one Exercises_WorkoutPlans.
     * @example
     * // Update one Exercises_WorkoutPlans
     * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Exercises_WorkoutPlansUpdateArgs>(
      args: SelectSubset<T, Exercises_WorkoutPlansUpdateArgs>
    ): Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T>>

    /**
     * Delete zero or more Exercises_WorkoutPlans.
     * @param {Exercises_WorkoutPlansDeleteManyArgs} args - Arguments to filter Exercises_WorkoutPlans to delete.
     * @example
     * // Delete a few Exercises_WorkoutPlans
     * const { count } = await prisma.exercises_WorkoutPlans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Exercises_WorkoutPlansDeleteManyArgs>(
      args?: SelectSubset<T, Exercises_WorkoutPlansDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises_WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exercises_WorkoutPlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises_WorkoutPlans
     * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Exercises_WorkoutPlansUpdateManyArgs>(
      args: SelectSubset<T, Exercises_WorkoutPlansUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercises_WorkoutPlans.
     * @param {Exercises_WorkoutPlansUpsertArgs} args - Arguments to update or create a Exercises_WorkoutPlans.
     * @example
     * // Update or create a Exercises_WorkoutPlans
     * const exercises_WorkoutPlans = await prisma.exercises_WorkoutPlans.upsert({
     *   create: {
     *     // ... data to create a Exercises_WorkoutPlans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercises_WorkoutPlans we want to update
     *   }
     * })
    **/
    upsert<T extends Exercises_WorkoutPlansUpsertArgs>(
      args: SelectSubset<T, Exercises_WorkoutPlansUpsertArgs>
    ): Prisma__Exercises_WorkoutPlansClient<Exercises_WorkoutPlansGetPayload<T>>

    /**
     * Count the number of Exercises_WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exercises_WorkoutPlansCountArgs} args - Arguments to filter Exercises_WorkoutPlans to count.
     * @example
     * // Count the number of Exercises_WorkoutPlans
     * const count = await prisma.exercises_WorkoutPlans.count({
     *   where: {
     *     // ... the filter for the Exercises_WorkoutPlans we want to count
     *   }
     * })
    **/
    count<T extends Exercises_WorkoutPlansCountArgs>(
      args?: Subset<T, Exercises_WorkoutPlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Exercises_WorkoutPlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercises_WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exercises_WorkoutPlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Exercises_WorkoutPlansAggregateArgs>(args: Subset<T, Exercises_WorkoutPlansAggregateArgs>): Prisma.PrismaPromise<GetExercises_WorkoutPlansAggregateType<T>>

    /**
     * Group by Exercises_WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Exercises_WorkoutPlansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Exercises_WorkoutPlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Exercises_WorkoutPlansGroupByArgs['orderBy'] }
        : { orderBy?: Exercises_WorkoutPlansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Exercises_WorkoutPlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExercises_WorkoutPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercises_WorkoutPlans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Exercises_WorkoutPlansClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Exercises<T extends ExercisesArgs= {}>(args?: Subset<T, ExercisesArgs>): Prisma__ExercisesClient<ExercisesGetPayload<T> | Null>;

    WorkoutPlans<T extends WorkoutPlansArgs= {}>(args?: Subset<T, WorkoutPlansArgs>): Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Exercises_WorkoutPlans base type for findUnique actions
   */
  export type Exercises_WorkoutPlansFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    /**
     * Filter, which Exercises_WorkoutPlans to fetch.
     */
    where: Exercises_WorkoutPlansWhereUniqueInput
  }

  /**
   * Exercises_WorkoutPlans findUnique
   */
  export interface Exercises_WorkoutPlansFindUniqueArgs extends Exercises_WorkoutPlansFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exercises_WorkoutPlans findUniqueOrThrow
   */
  export type Exercises_WorkoutPlansFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    /**
     * Filter, which Exercises_WorkoutPlans to fetch.
     */
    where: Exercises_WorkoutPlansWhereUniqueInput
  }


  /**
   * Exercises_WorkoutPlans base type for findFirst actions
   */
  export type Exercises_WorkoutPlansFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    /**
     * Filter, which Exercises_WorkoutPlans to fetch.
     */
    where?: Exercises_WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises_WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<Exercises_WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises_WorkoutPlans.
     */
    cursor?: Exercises_WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises_WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises_WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises_WorkoutPlans.
     */
    distinct?: Enumerable<Exercises_WorkoutPlansScalarFieldEnum>
  }

  /**
   * Exercises_WorkoutPlans findFirst
   */
  export interface Exercises_WorkoutPlansFindFirstArgs extends Exercises_WorkoutPlansFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Exercises_WorkoutPlans findFirstOrThrow
   */
  export type Exercises_WorkoutPlansFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    /**
     * Filter, which Exercises_WorkoutPlans to fetch.
     */
    where?: Exercises_WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises_WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<Exercises_WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises_WorkoutPlans.
     */
    cursor?: Exercises_WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises_WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises_WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises_WorkoutPlans.
     */
    distinct?: Enumerable<Exercises_WorkoutPlansScalarFieldEnum>
  }


  /**
   * Exercises_WorkoutPlans findMany
   */
  export type Exercises_WorkoutPlansFindManyArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    /**
     * Filter, which Exercises_WorkoutPlans to fetch.
     */
    where?: Exercises_WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises_WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<Exercises_WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises_WorkoutPlans.
     */
    cursor?: Exercises_WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises_WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises_WorkoutPlans.
     */
    skip?: number
    distinct?: Enumerable<Exercises_WorkoutPlansScalarFieldEnum>
  }


  /**
   * Exercises_WorkoutPlans create
   */
  export type Exercises_WorkoutPlansCreateArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    /**
     * The data needed to create a Exercises_WorkoutPlans.
     */
    data: XOR<Exercises_WorkoutPlansCreateInput, Exercises_WorkoutPlansUncheckedCreateInput>
  }


  /**
   * Exercises_WorkoutPlans createMany
   */
  export type Exercises_WorkoutPlansCreateManyArgs = {
    /**
     * The data used to create many Exercises_WorkoutPlans.
     */
    data: Enumerable<Exercises_WorkoutPlansCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Exercises_WorkoutPlans update
   */
  export type Exercises_WorkoutPlansUpdateArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    /**
     * The data needed to update a Exercises_WorkoutPlans.
     */
    data: XOR<Exercises_WorkoutPlansUpdateInput, Exercises_WorkoutPlansUncheckedUpdateInput>
    /**
     * Choose, which Exercises_WorkoutPlans to update.
     */
    where: Exercises_WorkoutPlansWhereUniqueInput
  }


  /**
   * Exercises_WorkoutPlans updateMany
   */
  export type Exercises_WorkoutPlansUpdateManyArgs = {
    /**
     * The data used to update Exercises_WorkoutPlans.
     */
    data: XOR<Exercises_WorkoutPlansUpdateManyMutationInput, Exercises_WorkoutPlansUncheckedUpdateManyInput>
    /**
     * Filter which Exercises_WorkoutPlans to update
     */
    where?: Exercises_WorkoutPlansWhereInput
  }


  /**
   * Exercises_WorkoutPlans upsert
   */
  export type Exercises_WorkoutPlansUpsertArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    /**
     * The filter to search for the Exercises_WorkoutPlans to update in case it exists.
     */
    where: Exercises_WorkoutPlansWhereUniqueInput
    /**
     * In case the Exercises_WorkoutPlans found by the `where` argument doesn't exist, create a new Exercises_WorkoutPlans with this data.
     */
    create: XOR<Exercises_WorkoutPlansCreateInput, Exercises_WorkoutPlansUncheckedCreateInput>
    /**
     * In case the Exercises_WorkoutPlans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Exercises_WorkoutPlansUpdateInput, Exercises_WorkoutPlansUncheckedUpdateInput>
  }


  /**
   * Exercises_WorkoutPlans delete
   */
  export type Exercises_WorkoutPlansDeleteArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    /**
     * Filter which Exercises_WorkoutPlans to delete.
     */
    where: Exercises_WorkoutPlansWhereUniqueInput
  }


  /**
   * Exercises_WorkoutPlans deleteMany
   */
  export type Exercises_WorkoutPlansDeleteManyArgs = {
    /**
     * Filter which Exercises_WorkoutPlans to delete
     */
    where?: Exercises_WorkoutPlansWhereInput
  }


  /**
   * Exercises_WorkoutPlans without action
   */
  export type Exercises_WorkoutPlansArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
  }



  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    created_at: Date | null
    profile_pic_uri: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    created_at: Date | null
    profile_pic_uri: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    created_at: number
    profile_pic_uri: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    created_at?: true
    profile_pic_uri?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    created_at?: true
    profile_pic_uri?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    created_at?: true
    profile_pic_uri?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    username: string
    email: string
    created_at: Date | null
    profile_pic_uri: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    id?: boolean
    username?: boolean
    email?: boolean
    created_at?: boolean
    profile_pic_uri?: boolean
    ExerciseProgresses?: boolean | ExerciseProgressesArgs
    Users_Exercises?: boolean | Users$Users_ExercisesArgs
    Users_WorkoutPlans?: boolean | Users$Users_WorkoutPlansArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type UsersInclude = {
    ExerciseProgresses?: boolean | ExerciseProgressesArgs
    Users_Exercises?: boolean | Users$Users_ExercisesArgs
    Users_WorkoutPlans?: boolean | Users$Users_WorkoutPlansArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type UsersGetPayload<S extends boolean | null | undefined | UsersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users :
    S extends undefined ? never :
    S extends { include: any } & (UsersArgs | UsersFindManyArgs)
    ? Users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'ExerciseProgresses' ? ExerciseProgressesGetPayload<S['include'][P]> | null :
        P extends 'Users_Exercises' ? Array < Users_ExercisesGetPayload<S['include'][P]>>  :
        P extends 'Users_WorkoutPlans' ? Array < Users_WorkoutPlansGetPayload<S['include'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UsersArgs | UsersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'ExerciseProgresses' ? ExerciseProgressesGetPayload<S['select'][P]> | null :
        P extends 'Users_Exercises' ? Array < Users_ExercisesGetPayload<S['select'][P]>>  :
        P extends 'Users_WorkoutPlans' ? Array < Users_WorkoutPlansGetPayload<S['select'][P]>>  :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Users ? Users[P] : never
  } 
      : Users


  type UsersCountArgs = 
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): Prisma.PrismaPromise<Array<UsersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ExerciseProgresses<T extends ExerciseProgressesArgs= {}>(args?: Subset<T, ExerciseProgressesArgs>): Prisma__ExerciseProgressesClient<ExerciseProgressesGetPayload<T> | Null>;

    Users_Exercises<T extends Users$Users_ExercisesArgs= {}>(args?: Subset<T, Users$Users_ExercisesArgs>): Prisma.PrismaPromise<Array<Users_ExercisesGetPayload<T>>| Null>;

    Users_WorkoutPlans<T extends Users$Users_WorkoutPlansArgs= {}>(args?: Subset<T, Users$Users_WorkoutPlansArgs>): Prisma.PrismaPromise<Array<Users_WorkoutPlansGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users base type for findUnique actions
   */
  export type UsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUnique
   */
  export interface UsersFindUniqueArgs extends UsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users base type for findFirst actions
   */
  export type UsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * Users findFirst
   */
  export interface UsersFindFirstArgs extends UsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.Users_Exercises
   */
  export type Users$Users_ExercisesArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    where?: Users_ExercisesWhereInput
    orderBy?: Enumerable<Users_ExercisesOrderByWithRelationInput>
    cursor?: Users_ExercisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Users_ExercisesScalarFieldEnum>
  }


  /**
   * Users.Users_WorkoutPlans
   */
  export type Users$Users_WorkoutPlansArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    where?: Users_WorkoutPlansWhereInput
    orderBy?: Enumerable<Users_WorkoutPlansOrderByWithRelationInput>
    cursor?: Users_WorkoutPlansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Users_WorkoutPlansScalarFieldEnum>
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
  }



  /**
   * Model Users_Exercises
   */


  export type AggregateUsers_Exercises = {
    _count: Users_ExercisesCountAggregateOutputType | null
    _min: Users_ExercisesMinAggregateOutputType | null
    _max: Users_ExercisesMaxAggregateOutputType | null
  }

  export type Users_ExercisesMinAggregateOutputType = {
    Users_id: string | null
    Exercises_id: string | null
  }

  export type Users_ExercisesMaxAggregateOutputType = {
    Users_id: string | null
    Exercises_id: string | null
  }

  export type Users_ExercisesCountAggregateOutputType = {
    Users_id: number
    Exercises_id: number
    _all: number
  }


  export type Users_ExercisesMinAggregateInputType = {
    Users_id?: true
    Exercises_id?: true
  }

  export type Users_ExercisesMaxAggregateInputType = {
    Users_id?: true
    Exercises_id?: true
  }

  export type Users_ExercisesCountAggregateInputType = {
    Users_id?: true
    Exercises_id?: true
    _all?: true
  }

  export type Users_ExercisesAggregateArgs = {
    /**
     * Filter which Users_Exercises to aggregate.
     */
    where?: Users_ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Exercises to fetch.
     */
    orderBy?: Enumerable<Users_ExercisesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Users_ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users_Exercises
    **/
    _count?: true | Users_ExercisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_ExercisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_ExercisesMaxAggregateInputType
  }

  export type GetUsers_ExercisesAggregateType<T extends Users_ExercisesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_Exercises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_Exercises[P]>
      : GetScalarType<T[P], AggregateUsers_Exercises[P]>
  }




  export type Users_ExercisesGroupByArgs = {
    where?: Users_ExercisesWhereInput
    orderBy?: Enumerable<Users_ExercisesOrderByWithAggregationInput>
    by: Users_ExercisesScalarFieldEnum[]
    having?: Users_ExercisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_ExercisesCountAggregateInputType | true
    _min?: Users_ExercisesMinAggregateInputType
    _max?: Users_ExercisesMaxAggregateInputType
  }


  export type Users_ExercisesGroupByOutputType = {
    Users_id: string
    Exercises_id: string
    _count: Users_ExercisesCountAggregateOutputType | null
    _min: Users_ExercisesMinAggregateOutputType | null
    _max: Users_ExercisesMaxAggregateOutputType | null
  }

  type GetUsers_ExercisesGroupByPayload<T extends Users_ExercisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Users_ExercisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_ExercisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_ExercisesGroupByOutputType[P]>
            : GetScalarType<T[P], Users_ExercisesGroupByOutputType[P]>
        }
      >
    >


  export type Users_ExercisesSelect = {
    Users_id?: boolean
    Exercises_id?: boolean
    Exercises?: boolean | ExercisesArgs
    Users?: boolean | UsersArgs
  }


  export type Users_ExercisesInclude = {
    Exercises?: boolean | ExercisesArgs
    Users?: boolean | UsersArgs
  }

  export type Users_ExercisesGetPayload<S extends boolean | null | undefined | Users_ExercisesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users_Exercises :
    S extends undefined ? never :
    S extends { include: any } & (Users_ExercisesArgs | Users_ExercisesFindManyArgs)
    ? Users_Exercises  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Exercises' ? ExercisesGetPayload<S['include'][P]> :
        P extends 'Users' ? UsersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Users_ExercisesArgs | Users_ExercisesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Exercises' ? ExercisesGetPayload<S['select'][P]> :
        P extends 'Users' ? UsersGetPayload<S['select'][P]> :  P extends keyof Users_Exercises ? Users_Exercises[P] : never
  } 
      : Users_Exercises


  type Users_ExercisesCountArgs = 
    Omit<Users_ExercisesFindManyArgs, 'select' | 'include'> & {
      select?: Users_ExercisesCountAggregateInputType | true
    }

  export interface Users_ExercisesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users_Exercises that matches the filter.
     * @param {Users_ExercisesFindUniqueArgs} args - Arguments to find a Users_Exercises
     * @example
     * // Get one Users_Exercises
     * const users_Exercises = await prisma.users_Exercises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Users_ExercisesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Users_ExercisesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users_Exercises'> extends True ? Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T>> : Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T> | null, null>

    /**
     * Find one Users_Exercises that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Users_ExercisesFindUniqueOrThrowArgs} args - Arguments to find a Users_Exercises
     * @example
     * // Get one Users_Exercises
     * const users_Exercises = await prisma.users_Exercises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Users_ExercisesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Users_ExercisesFindUniqueOrThrowArgs>
    ): Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T>>

    /**
     * Find the first Users_Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_ExercisesFindFirstArgs} args - Arguments to find a Users_Exercises
     * @example
     * // Get one Users_Exercises
     * const users_Exercises = await prisma.users_Exercises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Users_ExercisesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Users_ExercisesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users_Exercises'> extends True ? Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T>> : Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T> | null, null>

    /**
     * Find the first Users_Exercises that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_ExercisesFindFirstOrThrowArgs} args - Arguments to find a Users_Exercises
     * @example
     * // Get one Users_Exercises
     * const users_Exercises = await prisma.users_Exercises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Users_ExercisesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Users_ExercisesFindFirstOrThrowArgs>
    ): Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T>>

    /**
     * Find zero or more Users_Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_ExercisesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_Exercises
     * const users_Exercises = await prisma.users_Exercises.findMany()
     * 
     * // Get first 10 Users_Exercises
     * const users_Exercises = await prisma.users_Exercises.findMany({ take: 10 })
     * 
     * // Only select the `Users_id`
     * const users_ExercisesWithUsers_idOnly = await prisma.users_Exercises.findMany({ select: { Users_id: true } })
     * 
    **/
    findMany<T extends Users_ExercisesFindManyArgs>(
      args?: SelectSubset<T, Users_ExercisesFindManyArgs>
    ): Prisma.PrismaPromise<Array<Users_ExercisesGetPayload<T>>>

    /**
     * Create a Users_Exercises.
     * @param {Users_ExercisesCreateArgs} args - Arguments to create a Users_Exercises.
     * @example
     * // Create one Users_Exercises
     * const Users_Exercises = await prisma.users_Exercises.create({
     *   data: {
     *     // ... data to create a Users_Exercises
     *   }
     * })
     * 
    **/
    create<T extends Users_ExercisesCreateArgs>(
      args: SelectSubset<T, Users_ExercisesCreateArgs>
    ): Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T>>

    /**
     * Create many Users_Exercises.
     *     @param {Users_ExercisesCreateManyArgs} args - Arguments to create many Users_Exercises.
     *     @example
     *     // Create many Users_Exercises
     *     const users_Exercises = await prisma.users_Exercises.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Users_ExercisesCreateManyArgs>(
      args?: SelectSubset<T, Users_ExercisesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users_Exercises.
     * @param {Users_ExercisesDeleteArgs} args - Arguments to delete one Users_Exercises.
     * @example
     * // Delete one Users_Exercises
     * const Users_Exercises = await prisma.users_Exercises.delete({
     *   where: {
     *     // ... filter to delete one Users_Exercises
     *   }
     * })
     * 
    **/
    delete<T extends Users_ExercisesDeleteArgs>(
      args: SelectSubset<T, Users_ExercisesDeleteArgs>
    ): Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T>>

    /**
     * Update one Users_Exercises.
     * @param {Users_ExercisesUpdateArgs} args - Arguments to update one Users_Exercises.
     * @example
     * // Update one Users_Exercises
     * const users_Exercises = await prisma.users_Exercises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Users_ExercisesUpdateArgs>(
      args: SelectSubset<T, Users_ExercisesUpdateArgs>
    ): Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T>>

    /**
     * Delete zero or more Users_Exercises.
     * @param {Users_ExercisesDeleteManyArgs} args - Arguments to filter Users_Exercises to delete.
     * @example
     * // Delete a few Users_Exercises
     * const { count } = await prisma.users_Exercises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Users_ExercisesDeleteManyArgs>(
      args?: SelectSubset<T, Users_ExercisesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_ExercisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_Exercises
     * const users_Exercises = await prisma.users_Exercises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Users_ExercisesUpdateManyArgs>(
      args: SelectSubset<T, Users_ExercisesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users_Exercises.
     * @param {Users_ExercisesUpsertArgs} args - Arguments to update or create a Users_Exercises.
     * @example
     * // Update or create a Users_Exercises
     * const users_Exercises = await prisma.users_Exercises.upsert({
     *   create: {
     *     // ... data to create a Users_Exercises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_Exercises we want to update
     *   }
     * })
    **/
    upsert<T extends Users_ExercisesUpsertArgs>(
      args: SelectSubset<T, Users_ExercisesUpsertArgs>
    ): Prisma__Users_ExercisesClient<Users_ExercisesGetPayload<T>>

    /**
     * Count the number of Users_Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_ExercisesCountArgs} args - Arguments to filter Users_Exercises to count.
     * @example
     * // Count the number of Users_Exercises
     * const count = await prisma.users_Exercises.count({
     *   where: {
     *     // ... the filter for the Users_Exercises we want to count
     *   }
     * })
    **/
    count<T extends Users_ExercisesCountArgs>(
      args?: Subset<T, Users_ExercisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_ExercisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_ExercisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Users_ExercisesAggregateArgs>(args: Subset<T, Users_ExercisesAggregateArgs>): Prisma.PrismaPromise<GetUsers_ExercisesAggregateType<T>>

    /**
     * Group by Users_Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_ExercisesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Users_ExercisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Users_ExercisesGroupByArgs['orderBy'] }
        : { orderBy?: Users_ExercisesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Users_ExercisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_ExercisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users_Exercises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Users_ExercisesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Exercises<T extends ExercisesArgs= {}>(args?: Subset<T, ExercisesArgs>): Prisma__ExercisesClient<ExercisesGetPayload<T> | Null>;

    Users<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users_Exercises base type for findUnique actions
   */
  export type Users_ExercisesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    /**
     * Filter, which Users_Exercises to fetch.
     */
    where: Users_ExercisesWhereUniqueInput
  }

  /**
   * Users_Exercises findUnique
   */
  export interface Users_ExercisesFindUniqueArgs extends Users_ExercisesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users_Exercises findUniqueOrThrow
   */
  export type Users_ExercisesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    /**
     * Filter, which Users_Exercises to fetch.
     */
    where: Users_ExercisesWhereUniqueInput
  }


  /**
   * Users_Exercises base type for findFirst actions
   */
  export type Users_ExercisesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    /**
     * Filter, which Users_Exercises to fetch.
     */
    where?: Users_ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Exercises to fetch.
     */
    orderBy?: Enumerable<Users_ExercisesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_Exercises.
     */
    cursor?: Users_ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_Exercises.
     */
    distinct?: Enumerable<Users_ExercisesScalarFieldEnum>
  }

  /**
   * Users_Exercises findFirst
   */
  export interface Users_ExercisesFindFirstArgs extends Users_ExercisesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users_Exercises findFirstOrThrow
   */
  export type Users_ExercisesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    /**
     * Filter, which Users_Exercises to fetch.
     */
    where?: Users_ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Exercises to fetch.
     */
    orderBy?: Enumerable<Users_ExercisesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_Exercises.
     */
    cursor?: Users_ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_Exercises.
     */
    distinct?: Enumerable<Users_ExercisesScalarFieldEnum>
  }


  /**
   * Users_Exercises findMany
   */
  export type Users_ExercisesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    /**
     * Filter, which Users_Exercises to fetch.
     */
    where?: Users_ExercisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Exercises to fetch.
     */
    orderBy?: Enumerable<Users_ExercisesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users_Exercises.
     */
    cursor?: Users_ExercisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Exercises.
     */
    skip?: number
    distinct?: Enumerable<Users_ExercisesScalarFieldEnum>
  }


  /**
   * Users_Exercises create
   */
  export type Users_ExercisesCreateArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    /**
     * The data needed to create a Users_Exercises.
     */
    data: XOR<Users_ExercisesCreateInput, Users_ExercisesUncheckedCreateInput>
  }


  /**
   * Users_Exercises createMany
   */
  export type Users_ExercisesCreateManyArgs = {
    /**
     * The data used to create many Users_Exercises.
     */
    data: Enumerable<Users_ExercisesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users_Exercises update
   */
  export type Users_ExercisesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    /**
     * The data needed to update a Users_Exercises.
     */
    data: XOR<Users_ExercisesUpdateInput, Users_ExercisesUncheckedUpdateInput>
    /**
     * Choose, which Users_Exercises to update.
     */
    where: Users_ExercisesWhereUniqueInput
  }


  /**
   * Users_Exercises updateMany
   */
  export type Users_ExercisesUpdateManyArgs = {
    /**
     * The data used to update Users_Exercises.
     */
    data: XOR<Users_ExercisesUpdateManyMutationInput, Users_ExercisesUncheckedUpdateManyInput>
    /**
     * Filter which Users_Exercises to update
     */
    where?: Users_ExercisesWhereInput
  }


  /**
   * Users_Exercises upsert
   */
  export type Users_ExercisesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    /**
     * The filter to search for the Users_Exercises to update in case it exists.
     */
    where: Users_ExercisesWhereUniqueInput
    /**
     * In case the Users_Exercises found by the `where` argument doesn't exist, create a new Users_Exercises with this data.
     */
    create: XOR<Users_ExercisesCreateInput, Users_ExercisesUncheckedCreateInput>
    /**
     * In case the Users_Exercises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Users_ExercisesUpdateInput, Users_ExercisesUncheckedUpdateInput>
  }


  /**
   * Users_Exercises delete
   */
  export type Users_ExercisesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
    /**
     * Filter which Users_Exercises to delete.
     */
    where: Users_ExercisesWhereUniqueInput
  }


  /**
   * Users_Exercises deleteMany
   */
  export type Users_ExercisesDeleteManyArgs = {
    /**
     * Filter which Users_Exercises to delete
     */
    where?: Users_ExercisesWhereInput
  }


  /**
   * Users_Exercises without action
   */
  export type Users_ExercisesArgs = {
    /**
     * Select specific fields to fetch from the Users_Exercises
     */
    select?: Users_ExercisesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_ExercisesInclude | null
  }



  /**
   * Model Users_WorkoutPlans
   */


  export type AggregateUsers_WorkoutPlans = {
    _count: Users_WorkoutPlansCountAggregateOutputType | null
    _min: Users_WorkoutPlansMinAggregateOutputType | null
    _max: Users_WorkoutPlansMaxAggregateOutputType | null
  }

  export type Users_WorkoutPlansMinAggregateOutputType = {
    Users_id: string | null
    WorkoutPlans_id: string | null
  }

  export type Users_WorkoutPlansMaxAggregateOutputType = {
    Users_id: string | null
    WorkoutPlans_id: string | null
  }

  export type Users_WorkoutPlansCountAggregateOutputType = {
    Users_id: number
    WorkoutPlans_id: number
    _all: number
  }


  export type Users_WorkoutPlansMinAggregateInputType = {
    Users_id?: true
    WorkoutPlans_id?: true
  }

  export type Users_WorkoutPlansMaxAggregateInputType = {
    Users_id?: true
    WorkoutPlans_id?: true
  }

  export type Users_WorkoutPlansCountAggregateInputType = {
    Users_id?: true
    WorkoutPlans_id?: true
    _all?: true
  }

  export type Users_WorkoutPlansAggregateArgs = {
    /**
     * Filter which Users_WorkoutPlans to aggregate.
     */
    where?: Users_WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<Users_WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Users_WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users_WorkoutPlans
    **/
    _count?: true | Users_WorkoutPlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_WorkoutPlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_WorkoutPlansMaxAggregateInputType
  }

  export type GetUsers_WorkoutPlansAggregateType<T extends Users_WorkoutPlansAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_WorkoutPlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_WorkoutPlans[P]>
      : GetScalarType<T[P], AggregateUsers_WorkoutPlans[P]>
  }




  export type Users_WorkoutPlansGroupByArgs = {
    where?: Users_WorkoutPlansWhereInput
    orderBy?: Enumerable<Users_WorkoutPlansOrderByWithAggregationInput>
    by: Users_WorkoutPlansScalarFieldEnum[]
    having?: Users_WorkoutPlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_WorkoutPlansCountAggregateInputType | true
    _min?: Users_WorkoutPlansMinAggregateInputType
    _max?: Users_WorkoutPlansMaxAggregateInputType
  }


  export type Users_WorkoutPlansGroupByOutputType = {
    Users_id: string
    WorkoutPlans_id: string
    _count: Users_WorkoutPlansCountAggregateOutputType | null
    _min: Users_WorkoutPlansMinAggregateOutputType | null
    _max: Users_WorkoutPlansMaxAggregateOutputType | null
  }

  type GetUsers_WorkoutPlansGroupByPayload<T extends Users_WorkoutPlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Users_WorkoutPlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_WorkoutPlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_WorkoutPlansGroupByOutputType[P]>
            : GetScalarType<T[P], Users_WorkoutPlansGroupByOutputType[P]>
        }
      >
    >


  export type Users_WorkoutPlansSelect = {
    Users_id?: boolean
    WorkoutPlans_id?: boolean
    Users?: boolean | UsersArgs
    WorkoutPlans?: boolean | WorkoutPlansArgs
  }


  export type Users_WorkoutPlansInclude = {
    Users?: boolean | UsersArgs
    WorkoutPlans?: boolean | WorkoutPlansArgs
  }

  export type Users_WorkoutPlansGetPayload<S extends boolean | null | undefined | Users_WorkoutPlansArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users_WorkoutPlans :
    S extends undefined ? never :
    S extends { include: any } & (Users_WorkoutPlansArgs | Users_WorkoutPlansFindManyArgs)
    ? Users_WorkoutPlans  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Users' ? UsersGetPayload<S['include'][P]> :
        P extends 'WorkoutPlans' ? WorkoutPlansGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (Users_WorkoutPlansArgs | Users_WorkoutPlansFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Users' ? UsersGetPayload<S['select'][P]> :
        P extends 'WorkoutPlans' ? WorkoutPlansGetPayload<S['select'][P]> :  P extends keyof Users_WorkoutPlans ? Users_WorkoutPlans[P] : never
  } 
      : Users_WorkoutPlans


  type Users_WorkoutPlansCountArgs = 
    Omit<Users_WorkoutPlansFindManyArgs, 'select' | 'include'> & {
      select?: Users_WorkoutPlansCountAggregateInputType | true
    }

  export interface Users_WorkoutPlansDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users_WorkoutPlans that matches the filter.
     * @param {Users_WorkoutPlansFindUniqueArgs} args - Arguments to find a Users_WorkoutPlans
     * @example
     * // Get one Users_WorkoutPlans
     * const users_WorkoutPlans = await prisma.users_WorkoutPlans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Users_WorkoutPlansFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Users_WorkoutPlansFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users_WorkoutPlans'> extends True ? Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T>> : Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T> | null, null>

    /**
     * Find one Users_WorkoutPlans that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Users_WorkoutPlansFindUniqueOrThrowArgs} args - Arguments to find a Users_WorkoutPlans
     * @example
     * // Get one Users_WorkoutPlans
     * const users_WorkoutPlans = await prisma.users_WorkoutPlans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Users_WorkoutPlansFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Users_WorkoutPlansFindUniqueOrThrowArgs>
    ): Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T>>

    /**
     * Find the first Users_WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_WorkoutPlansFindFirstArgs} args - Arguments to find a Users_WorkoutPlans
     * @example
     * // Get one Users_WorkoutPlans
     * const users_WorkoutPlans = await prisma.users_WorkoutPlans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Users_WorkoutPlansFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Users_WorkoutPlansFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users_WorkoutPlans'> extends True ? Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T>> : Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T> | null, null>

    /**
     * Find the first Users_WorkoutPlans that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_WorkoutPlansFindFirstOrThrowArgs} args - Arguments to find a Users_WorkoutPlans
     * @example
     * // Get one Users_WorkoutPlans
     * const users_WorkoutPlans = await prisma.users_WorkoutPlans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Users_WorkoutPlansFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Users_WorkoutPlansFindFirstOrThrowArgs>
    ): Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T>>

    /**
     * Find zero or more Users_WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_WorkoutPlansFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_WorkoutPlans
     * const users_WorkoutPlans = await prisma.users_WorkoutPlans.findMany()
     * 
     * // Get first 10 Users_WorkoutPlans
     * const users_WorkoutPlans = await prisma.users_WorkoutPlans.findMany({ take: 10 })
     * 
     * // Only select the `Users_id`
     * const users_WorkoutPlansWithUsers_idOnly = await prisma.users_WorkoutPlans.findMany({ select: { Users_id: true } })
     * 
    **/
    findMany<T extends Users_WorkoutPlansFindManyArgs>(
      args?: SelectSubset<T, Users_WorkoutPlansFindManyArgs>
    ): Prisma.PrismaPromise<Array<Users_WorkoutPlansGetPayload<T>>>

    /**
     * Create a Users_WorkoutPlans.
     * @param {Users_WorkoutPlansCreateArgs} args - Arguments to create a Users_WorkoutPlans.
     * @example
     * // Create one Users_WorkoutPlans
     * const Users_WorkoutPlans = await prisma.users_WorkoutPlans.create({
     *   data: {
     *     // ... data to create a Users_WorkoutPlans
     *   }
     * })
     * 
    **/
    create<T extends Users_WorkoutPlansCreateArgs>(
      args: SelectSubset<T, Users_WorkoutPlansCreateArgs>
    ): Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T>>

    /**
     * Create many Users_WorkoutPlans.
     *     @param {Users_WorkoutPlansCreateManyArgs} args - Arguments to create many Users_WorkoutPlans.
     *     @example
     *     // Create many Users_WorkoutPlans
     *     const users_WorkoutPlans = await prisma.users_WorkoutPlans.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Users_WorkoutPlansCreateManyArgs>(
      args?: SelectSubset<T, Users_WorkoutPlansCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users_WorkoutPlans.
     * @param {Users_WorkoutPlansDeleteArgs} args - Arguments to delete one Users_WorkoutPlans.
     * @example
     * // Delete one Users_WorkoutPlans
     * const Users_WorkoutPlans = await prisma.users_WorkoutPlans.delete({
     *   where: {
     *     // ... filter to delete one Users_WorkoutPlans
     *   }
     * })
     * 
    **/
    delete<T extends Users_WorkoutPlansDeleteArgs>(
      args: SelectSubset<T, Users_WorkoutPlansDeleteArgs>
    ): Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T>>

    /**
     * Update one Users_WorkoutPlans.
     * @param {Users_WorkoutPlansUpdateArgs} args - Arguments to update one Users_WorkoutPlans.
     * @example
     * // Update one Users_WorkoutPlans
     * const users_WorkoutPlans = await prisma.users_WorkoutPlans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Users_WorkoutPlansUpdateArgs>(
      args: SelectSubset<T, Users_WorkoutPlansUpdateArgs>
    ): Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T>>

    /**
     * Delete zero or more Users_WorkoutPlans.
     * @param {Users_WorkoutPlansDeleteManyArgs} args - Arguments to filter Users_WorkoutPlans to delete.
     * @example
     * // Delete a few Users_WorkoutPlans
     * const { count } = await prisma.users_WorkoutPlans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Users_WorkoutPlansDeleteManyArgs>(
      args?: SelectSubset<T, Users_WorkoutPlansDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_WorkoutPlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_WorkoutPlans
     * const users_WorkoutPlans = await prisma.users_WorkoutPlans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Users_WorkoutPlansUpdateManyArgs>(
      args: SelectSubset<T, Users_WorkoutPlansUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users_WorkoutPlans.
     * @param {Users_WorkoutPlansUpsertArgs} args - Arguments to update or create a Users_WorkoutPlans.
     * @example
     * // Update or create a Users_WorkoutPlans
     * const users_WorkoutPlans = await prisma.users_WorkoutPlans.upsert({
     *   create: {
     *     // ... data to create a Users_WorkoutPlans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_WorkoutPlans we want to update
     *   }
     * })
    **/
    upsert<T extends Users_WorkoutPlansUpsertArgs>(
      args: SelectSubset<T, Users_WorkoutPlansUpsertArgs>
    ): Prisma__Users_WorkoutPlansClient<Users_WorkoutPlansGetPayload<T>>

    /**
     * Count the number of Users_WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_WorkoutPlansCountArgs} args - Arguments to filter Users_WorkoutPlans to count.
     * @example
     * // Count the number of Users_WorkoutPlans
     * const count = await prisma.users_WorkoutPlans.count({
     *   where: {
     *     // ... the filter for the Users_WorkoutPlans we want to count
     *   }
     * })
    **/
    count<T extends Users_WorkoutPlansCountArgs>(
      args?: Subset<T, Users_WorkoutPlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_WorkoutPlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_WorkoutPlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Users_WorkoutPlansAggregateArgs>(args: Subset<T, Users_WorkoutPlansAggregateArgs>): Prisma.PrismaPromise<GetUsers_WorkoutPlansAggregateType<T>>

    /**
     * Group by Users_WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_WorkoutPlansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Users_WorkoutPlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Users_WorkoutPlansGroupByArgs['orderBy'] }
        : { orderBy?: Users_WorkoutPlansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Users_WorkoutPlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_WorkoutPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users_WorkoutPlans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Users_WorkoutPlansClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Users<T extends UsersArgs= {}>(args?: Subset<T, UsersArgs>): Prisma__UsersClient<UsersGetPayload<T> | Null>;

    WorkoutPlans<T extends WorkoutPlansArgs= {}>(args?: Subset<T, WorkoutPlansArgs>): Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Users_WorkoutPlans base type for findUnique actions
   */
  export type Users_WorkoutPlansFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    /**
     * Filter, which Users_WorkoutPlans to fetch.
     */
    where: Users_WorkoutPlansWhereUniqueInput
  }

  /**
   * Users_WorkoutPlans findUnique
   */
  export interface Users_WorkoutPlansFindUniqueArgs extends Users_WorkoutPlansFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users_WorkoutPlans findUniqueOrThrow
   */
  export type Users_WorkoutPlansFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    /**
     * Filter, which Users_WorkoutPlans to fetch.
     */
    where: Users_WorkoutPlansWhereUniqueInput
  }


  /**
   * Users_WorkoutPlans base type for findFirst actions
   */
  export type Users_WorkoutPlansFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    /**
     * Filter, which Users_WorkoutPlans to fetch.
     */
    where?: Users_WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<Users_WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_WorkoutPlans.
     */
    cursor?: Users_WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_WorkoutPlans.
     */
    distinct?: Enumerable<Users_WorkoutPlansScalarFieldEnum>
  }

  /**
   * Users_WorkoutPlans findFirst
   */
  export interface Users_WorkoutPlansFindFirstArgs extends Users_WorkoutPlansFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users_WorkoutPlans findFirstOrThrow
   */
  export type Users_WorkoutPlansFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    /**
     * Filter, which Users_WorkoutPlans to fetch.
     */
    where?: Users_WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<Users_WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_WorkoutPlans.
     */
    cursor?: Users_WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_WorkoutPlans.
     */
    distinct?: Enumerable<Users_WorkoutPlansScalarFieldEnum>
  }


  /**
   * Users_WorkoutPlans findMany
   */
  export type Users_WorkoutPlansFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    /**
     * Filter, which Users_WorkoutPlans to fetch.
     */
    where?: Users_WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<Users_WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users_WorkoutPlans.
     */
    cursor?: Users_WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_WorkoutPlans.
     */
    skip?: number
    distinct?: Enumerable<Users_WorkoutPlansScalarFieldEnum>
  }


  /**
   * Users_WorkoutPlans create
   */
  export type Users_WorkoutPlansCreateArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    /**
     * The data needed to create a Users_WorkoutPlans.
     */
    data: XOR<Users_WorkoutPlansCreateInput, Users_WorkoutPlansUncheckedCreateInput>
  }


  /**
   * Users_WorkoutPlans createMany
   */
  export type Users_WorkoutPlansCreateManyArgs = {
    /**
     * The data used to create many Users_WorkoutPlans.
     */
    data: Enumerable<Users_WorkoutPlansCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users_WorkoutPlans update
   */
  export type Users_WorkoutPlansUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    /**
     * The data needed to update a Users_WorkoutPlans.
     */
    data: XOR<Users_WorkoutPlansUpdateInput, Users_WorkoutPlansUncheckedUpdateInput>
    /**
     * Choose, which Users_WorkoutPlans to update.
     */
    where: Users_WorkoutPlansWhereUniqueInput
  }


  /**
   * Users_WorkoutPlans updateMany
   */
  export type Users_WorkoutPlansUpdateManyArgs = {
    /**
     * The data used to update Users_WorkoutPlans.
     */
    data: XOR<Users_WorkoutPlansUpdateManyMutationInput, Users_WorkoutPlansUncheckedUpdateManyInput>
    /**
     * Filter which Users_WorkoutPlans to update
     */
    where?: Users_WorkoutPlansWhereInput
  }


  /**
   * Users_WorkoutPlans upsert
   */
  export type Users_WorkoutPlansUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    /**
     * The filter to search for the Users_WorkoutPlans to update in case it exists.
     */
    where: Users_WorkoutPlansWhereUniqueInput
    /**
     * In case the Users_WorkoutPlans found by the `where` argument doesn't exist, create a new Users_WorkoutPlans with this data.
     */
    create: XOR<Users_WorkoutPlansCreateInput, Users_WorkoutPlansUncheckedCreateInput>
    /**
     * In case the Users_WorkoutPlans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Users_WorkoutPlansUpdateInput, Users_WorkoutPlansUncheckedUpdateInput>
  }


  /**
   * Users_WorkoutPlans delete
   */
  export type Users_WorkoutPlansDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    /**
     * Filter which Users_WorkoutPlans to delete.
     */
    where: Users_WorkoutPlansWhereUniqueInput
  }


  /**
   * Users_WorkoutPlans deleteMany
   */
  export type Users_WorkoutPlansDeleteManyArgs = {
    /**
     * Filter which Users_WorkoutPlans to delete
     */
    where?: Users_WorkoutPlansWhereInput
  }


  /**
   * Users_WorkoutPlans without action
   */
  export type Users_WorkoutPlansArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
  }



  /**
   * Model WorkoutPlans
   */


  export type AggregateWorkoutPlans = {
    _count: WorkoutPlansCountAggregateOutputType | null
    _min: WorkoutPlansMinAggregateOutputType | null
    _max: WorkoutPlansMaxAggregateOutputType | null
  }

  export type WorkoutPlansMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type WorkoutPlansMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type WorkoutPlansCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type WorkoutPlansMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type WorkoutPlansMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type WorkoutPlansCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type WorkoutPlansAggregateArgs = {
    /**
     * Filter which WorkoutPlans to aggregate.
     */
    where?: WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutPlans
    **/
    _count?: true | WorkoutPlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutPlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutPlansMaxAggregateInputType
  }

  export type GetWorkoutPlansAggregateType<T extends WorkoutPlansAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutPlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutPlans[P]>
      : GetScalarType<T[P], AggregateWorkoutPlans[P]>
  }




  export type WorkoutPlansGroupByArgs = {
    where?: WorkoutPlansWhereInput
    orderBy?: Enumerable<WorkoutPlansOrderByWithAggregationInput>
    by: WorkoutPlansScalarFieldEnum[]
    having?: WorkoutPlansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutPlansCountAggregateInputType | true
    _min?: WorkoutPlansMinAggregateInputType
    _max?: WorkoutPlansMaxAggregateInputType
  }


  export type WorkoutPlansGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: WorkoutPlansCountAggregateOutputType | null
    _min: WorkoutPlansMinAggregateOutputType | null
    _max: WorkoutPlansMaxAggregateOutputType | null
  }

  type GetWorkoutPlansGroupByPayload<T extends WorkoutPlansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorkoutPlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutPlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutPlansGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutPlansGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutPlansSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    Exercises_WorkoutPlans?: boolean | WorkoutPlans$Exercises_WorkoutPlansArgs
    Users_WorkoutPlans?: boolean | WorkoutPlans$Users_WorkoutPlansArgs
    _count?: boolean | WorkoutPlansCountOutputTypeArgs
  }


  export type WorkoutPlansInclude = {
    Exercises_WorkoutPlans?: boolean | WorkoutPlans$Exercises_WorkoutPlansArgs
    Users_WorkoutPlans?: boolean | WorkoutPlans$Users_WorkoutPlansArgs
    _count?: boolean | WorkoutPlansCountOutputTypeArgs
  }

  export type WorkoutPlansGetPayload<S extends boolean | null | undefined | WorkoutPlansArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkoutPlans :
    S extends undefined ? never :
    S extends { include: any } & (WorkoutPlansArgs | WorkoutPlansFindManyArgs)
    ? WorkoutPlans  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Exercises_WorkoutPlans' ? Array < Exercises_WorkoutPlansGetPayload<S['include'][P]>>  :
        P extends 'Users_WorkoutPlans' ? Array < Users_WorkoutPlansGetPayload<S['include'][P]>>  :
        P extends '_count' ? WorkoutPlansCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WorkoutPlansArgs | WorkoutPlansFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Exercises_WorkoutPlans' ? Array < Exercises_WorkoutPlansGetPayload<S['select'][P]>>  :
        P extends 'Users_WorkoutPlans' ? Array < Users_WorkoutPlansGetPayload<S['select'][P]>>  :
        P extends '_count' ? WorkoutPlansCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof WorkoutPlans ? WorkoutPlans[P] : never
  } 
      : WorkoutPlans


  type WorkoutPlansCountArgs = 
    Omit<WorkoutPlansFindManyArgs, 'select' | 'include'> & {
      select?: WorkoutPlansCountAggregateInputType | true
    }

  export interface WorkoutPlansDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WorkoutPlans that matches the filter.
     * @param {WorkoutPlansFindUniqueArgs} args - Arguments to find a WorkoutPlans
     * @example
     * // Get one WorkoutPlans
     * const workoutPlans = await prisma.workoutPlans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkoutPlansFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkoutPlansFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorkoutPlans'> extends True ? Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T>> : Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T> | null, null>

    /**
     * Find one WorkoutPlans that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkoutPlansFindUniqueOrThrowArgs} args - Arguments to find a WorkoutPlans
     * @example
     * // Get one WorkoutPlans
     * const workoutPlans = await prisma.workoutPlans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkoutPlansFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkoutPlansFindUniqueOrThrowArgs>
    ): Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T>>

    /**
     * Find the first WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlansFindFirstArgs} args - Arguments to find a WorkoutPlans
     * @example
     * // Get one WorkoutPlans
     * const workoutPlans = await prisma.workoutPlans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkoutPlansFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkoutPlansFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorkoutPlans'> extends True ? Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T>> : Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T> | null, null>

    /**
     * Find the first WorkoutPlans that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlansFindFirstOrThrowArgs} args - Arguments to find a WorkoutPlans
     * @example
     * // Get one WorkoutPlans
     * const workoutPlans = await prisma.workoutPlans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkoutPlansFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkoutPlansFindFirstOrThrowArgs>
    ): Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T>>

    /**
     * Find zero or more WorkoutPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlansFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutPlans
     * const workoutPlans = await prisma.workoutPlans.findMany()
     * 
     * // Get first 10 WorkoutPlans
     * const workoutPlans = await prisma.workoutPlans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutPlansWithIdOnly = await prisma.workoutPlans.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkoutPlansFindManyArgs>(
      args?: SelectSubset<T, WorkoutPlansFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorkoutPlansGetPayload<T>>>

    /**
     * Create a WorkoutPlans.
     * @param {WorkoutPlansCreateArgs} args - Arguments to create a WorkoutPlans.
     * @example
     * // Create one WorkoutPlans
     * const WorkoutPlans = await prisma.workoutPlans.create({
     *   data: {
     *     // ... data to create a WorkoutPlans
     *   }
     * })
     * 
    **/
    create<T extends WorkoutPlansCreateArgs>(
      args: SelectSubset<T, WorkoutPlansCreateArgs>
    ): Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T>>

    /**
     * Create many WorkoutPlans.
     *     @param {WorkoutPlansCreateManyArgs} args - Arguments to create many WorkoutPlans.
     *     @example
     *     // Create many WorkoutPlans
     *     const workoutPlans = await prisma.workoutPlans.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkoutPlansCreateManyArgs>(
      args?: SelectSubset<T, WorkoutPlansCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkoutPlans.
     * @param {WorkoutPlansDeleteArgs} args - Arguments to delete one WorkoutPlans.
     * @example
     * // Delete one WorkoutPlans
     * const WorkoutPlans = await prisma.workoutPlans.delete({
     *   where: {
     *     // ... filter to delete one WorkoutPlans
     *   }
     * })
     * 
    **/
    delete<T extends WorkoutPlansDeleteArgs>(
      args: SelectSubset<T, WorkoutPlansDeleteArgs>
    ): Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T>>

    /**
     * Update one WorkoutPlans.
     * @param {WorkoutPlansUpdateArgs} args - Arguments to update one WorkoutPlans.
     * @example
     * // Update one WorkoutPlans
     * const workoutPlans = await prisma.workoutPlans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkoutPlansUpdateArgs>(
      args: SelectSubset<T, WorkoutPlansUpdateArgs>
    ): Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T>>

    /**
     * Delete zero or more WorkoutPlans.
     * @param {WorkoutPlansDeleteManyArgs} args - Arguments to filter WorkoutPlans to delete.
     * @example
     * // Delete a few WorkoutPlans
     * const { count } = await prisma.workoutPlans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkoutPlansDeleteManyArgs>(
      args?: SelectSubset<T, WorkoutPlansDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutPlans
     * const workoutPlans = await prisma.workoutPlans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkoutPlansUpdateManyArgs>(
      args: SelectSubset<T, WorkoutPlansUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkoutPlans.
     * @param {WorkoutPlansUpsertArgs} args - Arguments to update or create a WorkoutPlans.
     * @example
     * // Update or create a WorkoutPlans
     * const workoutPlans = await prisma.workoutPlans.upsert({
     *   create: {
     *     // ... data to create a WorkoutPlans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutPlans we want to update
     *   }
     * })
    **/
    upsert<T extends WorkoutPlansUpsertArgs>(
      args: SelectSubset<T, WorkoutPlansUpsertArgs>
    ): Prisma__WorkoutPlansClient<WorkoutPlansGetPayload<T>>

    /**
     * Count the number of WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlansCountArgs} args - Arguments to filter WorkoutPlans to count.
     * @example
     * // Count the number of WorkoutPlans
     * const count = await prisma.workoutPlans.count({
     *   where: {
     *     // ... the filter for the WorkoutPlans we want to count
     *   }
     * })
    **/
    count<T extends WorkoutPlansCountArgs>(
      args?: Subset<T, WorkoutPlansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutPlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutPlansAggregateArgs>(args: Subset<T, WorkoutPlansAggregateArgs>): Prisma.PrismaPromise<GetWorkoutPlansAggregateType<T>>

    /**
     * Group by WorkoutPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutPlansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutPlansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutPlansGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutPlansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutPlansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutPlans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkoutPlansClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Exercises_WorkoutPlans<T extends WorkoutPlans$Exercises_WorkoutPlansArgs= {}>(args?: Subset<T, WorkoutPlans$Exercises_WorkoutPlansArgs>): Prisma.PrismaPromise<Array<Exercises_WorkoutPlansGetPayload<T>>| Null>;

    Users_WorkoutPlans<T extends WorkoutPlans$Users_WorkoutPlansArgs= {}>(args?: Subset<T, WorkoutPlans$Users_WorkoutPlansArgs>): Prisma.PrismaPromise<Array<Users_WorkoutPlansGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorkoutPlans base type for findUnique actions
   */
  export type WorkoutPlansFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
    /**
     * Filter, which WorkoutPlans to fetch.
     */
    where: WorkoutPlansWhereUniqueInput
  }

  /**
   * WorkoutPlans findUnique
   */
  export interface WorkoutPlansFindUniqueArgs extends WorkoutPlansFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkoutPlans findUniqueOrThrow
   */
  export type WorkoutPlansFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
    /**
     * Filter, which WorkoutPlans to fetch.
     */
    where: WorkoutPlansWhereUniqueInput
  }


  /**
   * WorkoutPlans base type for findFirst actions
   */
  export type WorkoutPlansFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
    /**
     * Filter, which WorkoutPlans to fetch.
     */
    where?: WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: Enumerable<WorkoutPlansScalarFieldEnum>
  }

  /**
   * WorkoutPlans findFirst
   */
  export interface WorkoutPlansFindFirstArgs extends WorkoutPlansFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkoutPlans findFirstOrThrow
   */
  export type WorkoutPlansFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
    /**
     * Filter, which WorkoutPlans to fetch.
     */
    where?: WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutPlans.
     */
    cursor?: WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutPlans.
     */
    distinct?: Enumerable<WorkoutPlansScalarFieldEnum>
  }


  /**
   * WorkoutPlans findMany
   */
  export type WorkoutPlansFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
    /**
     * Filter, which WorkoutPlans to fetch.
     */
    where?: WorkoutPlansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutPlans to fetch.
     */
    orderBy?: Enumerable<WorkoutPlansOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutPlans.
     */
    cursor?: WorkoutPlansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutPlans.
     */
    skip?: number
    distinct?: Enumerable<WorkoutPlansScalarFieldEnum>
  }


  /**
   * WorkoutPlans create
   */
  export type WorkoutPlansCreateArgs = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
    /**
     * The data needed to create a WorkoutPlans.
     */
    data: XOR<WorkoutPlansCreateInput, WorkoutPlansUncheckedCreateInput>
  }


  /**
   * WorkoutPlans createMany
   */
  export type WorkoutPlansCreateManyArgs = {
    /**
     * The data used to create many WorkoutPlans.
     */
    data: Enumerable<WorkoutPlansCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WorkoutPlans update
   */
  export type WorkoutPlansUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
    /**
     * The data needed to update a WorkoutPlans.
     */
    data: XOR<WorkoutPlansUpdateInput, WorkoutPlansUncheckedUpdateInput>
    /**
     * Choose, which WorkoutPlans to update.
     */
    where: WorkoutPlansWhereUniqueInput
  }


  /**
   * WorkoutPlans updateMany
   */
  export type WorkoutPlansUpdateManyArgs = {
    /**
     * The data used to update WorkoutPlans.
     */
    data: XOR<WorkoutPlansUpdateManyMutationInput, WorkoutPlansUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutPlans to update
     */
    where?: WorkoutPlansWhereInput
  }


  /**
   * WorkoutPlans upsert
   */
  export type WorkoutPlansUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
    /**
     * The filter to search for the WorkoutPlans to update in case it exists.
     */
    where: WorkoutPlansWhereUniqueInput
    /**
     * In case the WorkoutPlans found by the `where` argument doesn't exist, create a new WorkoutPlans with this data.
     */
    create: XOR<WorkoutPlansCreateInput, WorkoutPlansUncheckedCreateInput>
    /**
     * In case the WorkoutPlans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutPlansUpdateInput, WorkoutPlansUncheckedUpdateInput>
  }


  /**
   * WorkoutPlans delete
   */
  export type WorkoutPlansDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
    /**
     * Filter which WorkoutPlans to delete.
     */
    where: WorkoutPlansWhereUniqueInput
  }


  /**
   * WorkoutPlans deleteMany
   */
  export type WorkoutPlansDeleteManyArgs = {
    /**
     * Filter which WorkoutPlans to delete
     */
    where?: WorkoutPlansWhereInput
  }


  /**
   * WorkoutPlans.Exercises_WorkoutPlans
   */
  export type WorkoutPlans$Exercises_WorkoutPlansArgs = {
    /**
     * Select specific fields to fetch from the Exercises_WorkoutPlans
     */
    select?: Exercises_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Exercises_WorkoutPlansInclude | null
    where?: Exercises_WorkoutPlansWhereInput
    orderBy?: Enumerable<Exercises_WorkoutPlansOrderByWithRelationInput>
    cursor?: Exercises_WorkoutPlansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Exercises_WorkoutPlansScalarFieldEnum>
  }


  /**
   * WorkoutPlans.Users_WorkoutPlans
   */
  export type WorkoutPlans$Users_WorkoutPlansArgs = {
    /**
     * Select specific fields to fetch from the Users_WorkoutPlans
     */
    select?: Users_WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Users_WorkoutPlansInclude | null
    where?: Users_WorkoutPlansWhereInput
    orderBy?: Enumerable<Users_WorkoutPlansOrderByWithRelationInput>
    cursor?: Users_WorkoutPlansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Users_WorkoutPlansScalarFieldEnum>
  }


  /**
   * WorkoutPlans without action
   */
  export type WorkoutPlansArgs = {
    /**
     * Select specific fields to fetch from the WorkoutPlans
     */
    select?: WorkoutPlansSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkoutPlansInclude | null
  }



  /**
   * Model nessie_migrations
   */


  export type AggregateNessie_migrations = {
    _count: Nessie_migrationsCountAggregateOutputType | null
    _avg: Nessie_migrationsAvgAggregateOutputType | null
    _sum: Nessie_migrationsSumAggregateOutputType | null
    _min: Nessie_migrationsMinAggregateOutputType | null
    _max: Nessie_migrationsMaxAggregateOutputType | null
  }

  export type Nessie_migrationsAvgAggregateOutputType = {
    id: number | null
  }

  export type Nessie_migrationsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Nessie_migrationsMinAggregateOutputType = {
    id: bigint | null
    file_name: string | null
    created_at: Date | null
  }

  export type Nessie_migrationsMaxAggregateOutputType = {
    id: bigint | null
    file_name: string | null
    created_at: Date | null
  }

  export type Nessie_migrationsCountAggregateOutputType = {
    id: number
    file_name: number
    created_at: number
    _all: number
  }


  export type Nessie_migrationsAvgAggregateInputType = {
    id?: true
  }

  export type Nessie_migrationsSumAggregateInputType = {
    id?: true
  }

  export type Nessie_migrationsMinAggregateInputType = {
    id?: true
    file_name?: true
    created_at?: true
  }

  export type Nessie_migrationsMaxAggregateInputType = {
    id?: true
    file_name?: true
    created_at?: true
  }

  export type Nessie_migrationsCountAggregateInputType = {
    id?: true
    file_name?: true
    created_at?: true
    _all?: true
  }

  export type Nessie_migrationsAggregateArgs = {
    /**
     * Filter which nessie_migrations to aggregate.
     */
    where?: nessie_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nessie_migrations to fetch.
     */
    orderBy?: Enumerable<nessie_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nessie_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nessie_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nessie_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nessie_migrations
    **/
    _count?: true | Nessie_migrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Nessie_migrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Nessie_migrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nessie_migrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nessie_migrationsMaxAggregateInputType
  }

  export type GetNessie_migrationsAggregateType<T extends Nessie_migrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNessie_migrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNessie_migrations[P]>
      : GetScalarType<T[P], AggregateNessie_migrations[P]>
  }




  export type Nessie_migrationsGroupByArgs = {
    where?: nessie_migrationsWhereInput
    orderBy?: Enumerable<nessie_migrationsOrderByWithAggregationInput>
    by: Nessie_migrationsScalarFieldEnum[]
    having?: nessie_migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nessie_migrationsCountAggregateInputType | true
    _avg?: Nessie_migrationsAvgAggregateInputType
    _sum?: Nessie_migrationsSumAggregateInputType
    _min?: Nessie_migrationsMinAggregateInputType
    _max?: Nessie_migrationsMaxAggregateInputType
  }


  export type Nessie_migrationsGroupByOutputType = {
    id: bigint
    file_name: string | null
    created_at: Date | null
    _count: Nessie_migrationsCountAggregateOutputType | null
    _avg: Nessie_migrationsAvgAggregateOutputType | null
    _sum: Nessie_migrationsSumAggregateOutputType | null
    _min: Nessie_migrationsMinAggregateOutputType | null
    _max: Nessie_migrationsMaxAggregateOutputType | null
  }

  type GetNessie_migrationsGroupByPayload<T extends Nessie_migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Nessie_migrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nessie_migrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nessie_migrationsGroupByOutputType[P]>
            : GetScalarType<T[P], Nessie_migrationsGroupByOutputType[P]>
        }
      >
    >


  export type nessie_migrationsSelect = {
    id?: boolean
    file_name?: boolean
    created_at?: boolean
  }


  export type nessie_migrationsGetPayload<S extends boolean | null | undefined | nessie_migrationsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? nessie_migrations :
    S extends undefined ? never :
    S extends { include: any } & (nessie_migrationsArgs | nessie_migrationsFindManyArgs)
    ? nessie_migrations 
    : S extends { select: any } & (nessie_migrationsArgs | nessie_migrationsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof nessie_migrations ? nessie_migrations[P] : never
  } 
      : nessie_migrations


  type nessie_migrationsCountArgs = 
    Omit<nessie_migrationsFindManyArgs, 'select' | 'include'> & {
      select?: Nessie_migrationsCountAggregateInputType | true
    }

  export interface nessie_migrationsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Nessie_migrations that matches the filter.
     * @param {nessie_migrationsFindUniqueArgs} args - Arguments to find a Nessie_migrations
     * @example
     * // Get one Nessie_migrations
     * const nessie_migrations = await prisma.nessie_migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends nessie_migrationsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, nessie_migrationsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'nessie_migrations'> extends True ? Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T>> : Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T> | null, null>

    /**
     * Find one Nessie_migrations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {nessie_migrationsFindUniqueOrThrowArgs} args - Arguments to find a Nessie_migrations
     * @example
     * // Get one Nessie_migrations
     * const nessie_migrations = await prisma.nessie_migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends nessie_migrationsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, nessie_migrationsFindUniqueOrThrowArgs>
    ): Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T>>

    /**
     * Find the first Nessie_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nessie_migrationsFindFirstArgs} args - Arguments to find a Nessie_migrations
     * @example
     * // Get one Nessie_migrations
     * const nessie_migrations = await prisma.nessie_migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends nessie_migrationsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, nessie_migrationsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'nessie_migrations'> extends True ? Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T>> : Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T> | null, null>

    /**
     * Find the first Nessie_migrations that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nessie_migrationsFindFirstOrThrowArgs} args - Arguments to find a Nessie_migrations
     * @example
     * // Get one Nessie_migrations
     * const nessie_migrations = await prisma.nessie_migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends nessie_migrationsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, nessie_migrationsFindFirstOrThrowArgs>
    ): Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T>>

    /**
     * Find zero or more Nessie_migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nessie_migrationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nessie_migrations
     * const nessie_migrations = await prisma.nessie_migrations.findMany()
     * 
     * // Get first 10 Nessie_migrations
     * const nessie_migrations = await prisma.nessie_migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nessie_migrationsWithIdOnly = await prisma.nessie_migrations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends nessie_migrationsFindManyArgs>(
      args?: SelectSubset<T, nessie_migrationsFindManyArgs>
    ): Prisma.PrismaPromise<Array<nessie_migrationsGetPayload<T>>>

    /**
     * Create a Nessie_migrations.
     * @param {nessie_migrationsCreateArgs} args - Arguments to create a Nessie_migrations.
     * @example
     * // Create one Nessie_migrations
     * const Nessie_migrations = await prisma.nessie_migrations.create({
     *   data: {
     *     // ... data to create a Nessie_migrations
     *   }
     * })
     * 
    **/
    create<T extends nessie_migrationsCreateArgs>(
      args: SelectSubset<T, nessie_migrationsCreateArgs>
    ): Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T>>

    /**
     * Create many Nessie_migrations.
     *     @param {nessie_migrationsCreateManyArgs} args - Arguments to create many Nessie_migrations.
     *     @example
     *     // Create many Nessie_migrations
     *     const nessie_migrations = await prisma.nessie_migrations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends nessie_migrationsCreateManyArgs>(
      args?: SelectSubset<T, nessie_migrationsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nessie_migrations.
     * @param {nessie_migrationsDeleteArgs} args - Arguments to delete one Nessie_migrations.
     * @example
     * // Delete one Nessie_migrations
     * const Nessie_migrations = await prisma.nessie_migrations.delete({
     *   where: {
     *     // ... filter to delete one Nessie_migrations
     *   }
     * })
     * 
    **/
    delete<T extends nessie_migrationsDeleteArgs>(
      args: SelectSubset<T, nessie_migrationsDeleteArgs>
    ): Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T>>

    /**
     * Update one Nessie_migrations.
     * @param {nessie_migrationsUpdateArgs} args - Arguments to update one Nessie_migrations.
     * @example
     * // Update one Nessie_migrations
     * const nessie_migrations = await prisma.nessie_migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends nessie_migrationsUpdateArgs>(
      args: SelectSubset<T, nessie_migrationsUpdateArgs>
    ): Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T>>

    /**
     * Delete zero or more Nessie_migrations.
     * @param {nessie_migrationsDeleteManyArgs} args - Arguments to filter Nessie_migrations to delete.
     * @example
     * // Delete a few Nessie_migrations
     * const { count } = await prisma.nessie_migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends nessie_migrationsDeleteManyArgs>(
      args?: SelectSubset<T, nessie_migrationsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nessie_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nessie_migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nessie_migrations
     * const nessie_migrations = await prisma.nessie_migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends nessie_migrationsUpdateManyArgs>(
      args: SelectSubset<T, nessie_migrationsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nessie_migrations.
     * @param {nessie_migrationsUpsertArgs} args - Arguments to update or create a Nessie_migrations.
     * @example
     * // Update or create a Nessie_migrations
     * const nessie_migrations = await prisma.nessie_migrations.upsert({
     *   create: {
     *     // ... data to create a Nessie_migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nessie_migrations we want to update
     *   }
     * })
    **/
    upsert<T extends nessie_migrationsUpsertArgs>(
      args: SelectSubset<T, nessie_migrationsUpsertArgs>
    ): Prisma__nessie_migrationsClient<nessie_migrationsGetPayload<T>>

    /**
     * Count the number of Nessie_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nessie_migrationsCountArgs} args - Arguments to filter Nessie_migrations to count.
     * @example
     * // Count the number of Nessie_migrations
     * const count = await prisma.nessie_migrations.count({
     *   where: {
     *     // ... the filter for the Nessie_migrations we want to count
     *   }
     * })
    **/
    count<T extends nessie_migrationsCountArgs>(
      args?: Subset<T, nessie_migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nessie_migrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nessie_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nessie_migrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Nessie_migrationsAggregateArgs>(args: Subset<T, Nessie_migrationsAggregateArgs>): Prisma.PrismaPromise<GetNessie_migrationsAggregateType<T>>

    /**
     * Group by Nessie_migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nessie_migrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Nessie_migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Nessie_migrationsGroupByArgs['orderBy'] }
        : { orderBy?: Nessie_migrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Nessie_migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNessie_migrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for nessie_migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__nessie_migrationsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * nessie_migrations base type for findUnique actions
   */
  export type nessie_migrationsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
    /**
     * Filter, which nessie_migrations to fetch.
     */
    where: nessie_migrationsWhereUniqueInput
  }

  /**
   * nessie_migrations findUnique
   */
  export interface nessie_migrationsFindUniqueArgs extends nessie_migrationsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * nessie_migrations findUniqueOrThrow
   */
  export type nessie_migrationsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
    /**
     * Filter, which nessie_migrations to fetch.
     */
    where: nessie_migrationsWhereUniqueInput
  }


  /**
   * nessie_migrations base type for findFirst actions
   */
  export type nessie_migrationsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
    /**
     * Filter, which nessie_migrations to fetch.
     */
    where?: nessie_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nessie_migrations to fetch.
     */
    orderBy?: Enumerable<nessie_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nessie_migrations.
     */
    cursor?: nessie_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nessie_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nessie_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nessie_migrations.
     */
    distinct?: Enumerable<Nessie_migrationsScalarFieldEnum>
  }

  /**
   * nessie_migrations findFirst
   */
  export interface nessie_migrationsFindFirstArgs extends nessie_migrationsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * nessie_migrations findFirstOrThrow
   */
  export type nessie_migrationsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
    /**
     * Filter, which nessie_migrations to fetch.
     */
    where?: nessie_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nessie_migrations to fetch.
     */
    orderBy?: Enumerable<nessie_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nessie_migrations.
     */
    cursor?: nessie_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nessie_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nessie_migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nessie_migrations.
     */
    distinct?: Enumerable<Nessie_migrationsScalarFieldEnum>
  }


  /**
   * nessie_migrations findMany
   */
  export type nessie_migrationsFindManyArgs = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
    /**
     * Filter, which nessie_migrations to fetch.
     */
    where?: nessie_migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nessie_migrations to fetch.
     */
    orderBy?: Enumerable<nessie_migrationsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nessie_migrations.
     */
    cursor?: nessie_migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nessie_migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nessie_migrations.
     */
    skip?: number
    distinct?: Enumerable<Nessie_migrationsScalarFieldEnum>
  }


  /**
   * nessie_migrations create
   */
  export type nessie_migrationsCreateArgs = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
    /**
     * The data needed to create a nessie_migrations.
     */
    data: XOR<nessie_migrationsCreateInput, nessie_migrationsUncheckedCreateInput>
  }


  /**
   * nessie_migrations createMany
   */
  export type nessie_migrationsCreateManyArgs = {
    /**
     * The data used to create many nessie_migrations.
     */
    data: Enumerable<nessie_migrationsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * nessie_migrations update
   */
  export type nessie_migrationsUpdateArgs = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
    /**
     * The data needed to update a nessie_migrations.
     */
    data: XOR<nessie_migrationsUpdateInput, nessie_migrationsUncheckedUpdateInput>
    /**
     * Choose, which nessie_migrations to update.
     */
    where: nessie_migrationsWhereUniqueInput
  }


  /**
   * nessie_migrations updateMany
   */
  export type nessie_migrationsUpdateManyArgs = {
    /**
     * The data used to update nessie_migrations.
     */
    data: XOR<nessie_migrationsUpdateManyMutationInput, nessie_migrationsUncheckedUpdateManyInput>
    /**
     * Filter which nessie_migrations to update
     */
    where?: nessie_migrationsWhereInput
  }


  /**
   * nessie_migrations upsert
   */
  export type nessie_migrationsUpsertArgs = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
    /**
     * The filter to search for the nessie_migrations to update in case it exists.
     */
    where: nessie_migrationsWhereUniqueInput
    /**
     * In case the nessie_migrations found by the `where` argument doesn't exist, create a new nessie_migrations with this data.
     */
    create: XOR<nessie_migrationsCreateInput, nessie_migrationsUncheckedCreateInput>
    /**
     * In case the nessie_migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nessie_migrationsUpdateInput, nessie_migrationsUncheckedUpdateInput>
  }


  /**
   * nessie_migrations delete
   */
  export type nessie_migrationsDeleteArgs = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
    /**
     * Filter which nessie_migrations to delete.
     */
    where: nessie_migrationsWhereUniqueInput
  }


  /**
   * nessie_migrations deleteMany
   */
  export type nessie_migrationsDeleteManyArgs = {
    /**
     * Filter which nessie_migrations to delete
     */
    where?: nessie_migrationsWhereInput
  }


  /**
   * nessie_migrations without action
   */
  export type nessie_migrationsArgs = {
    /**
     * Select specific fields to fetch from the nessie_migrations
     */
    select?: nessie_migrationsSelect | null
  }



  /**
   * Enums
   */

  export const ExerciseProgressesScalarFieldEnum: {
    id: 'id',
    date: 'date',
    prevRep: 'prevRep',
    newRep: 'newRep',
    prevWeight: 'prevWeight',
    newWeight: 'newWeight',
    prevDur: 'prevDur',
    newDur: 'newDur'
  };

  export type ExerciseProgressesScalarFieldEnum = (typeof ExerciseProgressesScalarFieldEnum)[keyof typeof ExerciseProgressesScalarFieldEnum]


  export const ExercisesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    muscle_group: 'muscle_group',
    exercise_type: 'exercise_type'
  };

  export type ExercisesScalarFieldEnum = (typeof ExercisesScalarFieldEnum)[keyof typeof ExercisesScalarFieldEnum]


  export const Exercises_WorkoutPlansScalarFieldEnum: {
    Exercises_id: 'Exercises_id',
    WorkoutPlans_id: 'WorkoutPlans_id'
  };

  export type Exercises_WorkoutPlansScalarFieldEnum = (typeof Exercises_WorkoutPlansScalarFieldEnum)[keyof typeof Exercises_WorkoutPlansScalarFieldEnum]


  export const Nessie_migrationsScalarFieldEnum: {
    id: 'id',
    file_name: 'file_name',
    created_at: 'created_at'
  };

  export type Nessie_migrationsScalarFieldEnum = (typeof Nessie_migrationsScalarFieldEnum)[keyof typeof Nessie_migrationsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    created_at: 'created_at',
    profile_pic_uri: 'profile_pic_uri'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Users_ExercisesScalarFieldEnum: {
    Users_id: 'Users_id',
    Exercises_id: 'Exercises_id'
  };

  export type Users_ExercisesScalarFieldEnum = (typeof Users_ExercisesScalarFieldEnum)[keyof typeof Users_ExercisesScalarFieldEnum]


  export const Users_WorkoutPlansScalarFieldEnum: {
    Users_id: 'Users_id',
    WorkoutPlans_id: 'WorkoutPlans_id'
  };

  export type Users_WorkoutPlansScalarFieldEnum = (typeof Users_WorkoutPlansScalarFieldEnum)[keyof typeof Users_WorkoutPlansScalarFieldEnum]


  export const WorkoutPlansScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type WorkoutPlansScalarFieldEnum = (typeof WorkoutPlansScalarFieldEnum)[keyof typeof WorkoutPlansScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type ExerciseProgressesWhereInput = {
    AND?: Enumerable<ExerciseProgressesWhereInput>
    OR?: Enumerable<ExerciseProgressesWhereInput>
    NOT?: Enumerable<ExerciseProgressesWhereInput>
    id?: UuidFilter | string
    date?: DateTimeFilter | Date | string
    prevRep?: IntNullableFilter | number | null
    newRep?: IntNullableFilter | number | null
    prevWeight?: IntNullableFilter | number | null
    newWeight?: IntNullableFilter | number | null
    prevDur?: FloatNullableFilter | number | null
    newDur?: FloatNullableFilter | number | null
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    Exercises?: XOR<ExercisesRelationFilter, ExercisesWhereInput>
  }

  export type ExerciseProgressesOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    prevRep?: SortOrder
    newRep?: SortOrder
    prevWeight?: SortOrder
    newWeight?: SortOrder
    prevDur?: SortOrder
    newDur?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Exercises?: ExercisesOrderByWithRelationInput
  }

  export type ExerciseProgressesWhereUniqueInput = {
    id?: string
  }

  export type ExerciseProgressesOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    prevRep?: SortOrder
    newRep?: SortOrder
    prevWeight?: SortOrder
    newWeight?: SortOrder
    prevDur?: SortOrder
    newDur?: SortOrder
    _count?: ExerciseProgressesCountOrderByAggregateInput
    _avg?: ExerciseProgressesAvgOrderByAggregateInput
    _max?: ExerciseProgressesMaxOrderByAggregateInput
    _min?: ExerciseProgressesMinOrderByAggregateInput
    _sum?: ExerciseProgressesSumOrderByAggregateInput
  }

  export type ExerciseProgressesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExerciseProgressesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExerciseProgressesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExerciseProgressesScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    prevRep?: IntNullableWithAggregatesFilter | number | null
    newRep?: IntNullableWithAggregatesFilter | number | null
    prevWeight?: IntNullableWithAggregatesFilter | number | null
    newWeight?: IntNullableWithAggregatesFilter | number | null
    prevDur?: FloatNullableWithAggregatesFilter | number | null
    newDur?: FloatNullableWithAggregatesFilter | number | null
  }

  export type ExercisesWhereInput = {
    AND?: Enumerable<ExercisesWhereInput>
    OR?: Enumerable<ExercisesWhereInput>
    NOT?: Enumerable<ExercisesWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    muscle_group?: EnumMuscleGroupNullableFilter | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFilter | ExerciseType
    ExerciseProgresses?: XOR<ExerciseProgressesRelationFilter, ExerciseProgressesWhereInput> | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansListRelationFilter
    Users_Exercises?: Users_ExercisesListRelationFilter
  }

  export type ExercisesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    exercise_type?: SortOrder
    ExerciseProgresses?: ExerciseProgressesOrderByWithRelationInput
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansOrderByRelationAggregateInput
    Users_Exercises?: Users_ExercisesOrderByRelationAggregateInput
  }

  export type ExercisesWhereUniqueInput = {
    id?: string
  }

  export type ExercisesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    exercise_type?: SortOrder
    _count?: ExercisesCountOrderByAggregateInput
    _max?: ExercisesMaxOrderByAggregateInput
    _min?: ExercisesMinOrderByAggregateInput
  }

  export type ExercisesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExercisesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExercisesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExercisesScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    muscle_group?: EnumMuscleGroupNullableWithAggregatesFilter | MuscleGroup | null
    exercise_type?: EnumExerciseTypeWithAggregatesFilter | ExerciseType
  }

  export type Exercises_WorkoutPlansWhereInput = {
    AND?: Enumerable<Exercises_WorkoutPlansWhereInput>
    OR?: Enumerable<Exercises_WorkoutPlansWhereInput>
    NOT?: Enumerable<Exercises_WorkoutPlansWhereInput>
    Exercises_id?: UuidFilter | string
    WorkoutPlans_id?: UuidFilter | string
    Exercises?: XOR<ExercisesRelationFilter, ExercisesWhereInput>
    WorkoutPlans?: XOR<WorkoutPlansRelationFilter, WorkoutPlansWhereInput>
  }

  export type Exercises_WorkoutPlansOrderByWithRelationInput = {
    Exercises_id?: SortOrder
    WorkoutPlans_id?: SortOrder
    Exercises?: ExercisesOrderByWithRelationInput
    WorkoutPlans?: WorkoutPlansOrderByWithRelationInput
  }

  export type Exercises_WorkoutPlansWhereUniqueInput = {
    Exercises_id_WorkoutPlans_id?: Exercises_WorkoutPlansExercises_idWorkoutPlans_idCompoundUniqueInput
  }

  export type Exercises_WorkoutPlansOrderByWithAggregationInput = {
    Exercises_id?: SortOrder
    WorkoutPlans_id?: SortOrder
    _count?: Exercises_WorkoutPlansCountOrderByAggregateInput
    _max?: Exercises_WorkoutPlansMaxOrderByAggregateInput
    _min?: Exercises_WorkoutPlansMinOrderByAggregateInput
  }

  export type Exercises_WorkoutPlansScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Exercises_WorkoutPlansScalarWhereWithAggregatesInput>
    OR?: Enumerable<Exercises_WorkoutPlansScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Exercises_WorkoutPlansScalarWhereWithAggregatesInput>
    Exercises_id?: UuidWithAggregatesFilter | string
    WorkoutPlans_id?: UuidWithAggregatesFilter | string
  }

  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: UuidFilter | string
    username?: StringFilter | string
    email?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    profile_pic_uri?: StringNullableFilter | string | null
    ExerciseProgresses?: XOR<ExerciseProgressesRelationFilter, ExerciseProgressesWhereInput> | null
    Users_Exercises?: Users_ExercisesListRelationFilter
    Users_WorkoutPlans?: Users_WorkoutPlansListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    profile_pic_uri?: SortOrder
    ExerciseProgresses?: ExerciseProgressesOrderByWithRelationInput
    Users_Exercises?: Users_ExercisesOrderByRelationAggregateInput
    Users_WorkoutPlans?: Users_WorkoutPlansOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = {
    id?: string
    username?: string
    email?: string
  }

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    profile_pic_uri?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    profile_pic_uri?: StringNullableWithAggregatesFilter | string | null
  }

  export type Users_ExercisesWhereInput = {
    AND?: Enumerable<Users_ExercisesWhereInput>
    OR?: Enumerable<Users_ExercisesWhereInput>
    NOT?: Enumerable<Users_ExercisesWhereInput>
    Users_id?: UuidFilter | string
    Exercises_id?: UuidFilter | string
    Exercises?: XOR<ExercisesRelationFilter, ExercisesWhereInput>
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type Users_ExercisesOrderByWithRelationInput = {
    Users_id?: SortOrder
    Exercises_id?: SortOrder
    Exercises?: ExercisesOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type Users_ExercisesWhereUniqueInput = {
    Users_id_Exercises_id?: Users_ExercisesUsers_idExercises_idCompoundUniqueInput
  }

  export type Users_ExercisesOrderByWithAggregationInput = {
    Users_id?: SortOrder
    Exercises_id?: SortOrder
    _count?: Users_ExercisesCountOrderByAggregateInput
    _max?: Users_ExercisesMaxOrderByAggregateInput
    _min?: Users_ExercisesMinOrderByAggregateInput
  }

  export type Users_ExercisesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Users_ExercisesScalarWhereWithAggregatesInput>
    OR?: Enumerable<Users_ExercisesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Users_ExercisesScalarWhereWithAggregatesInput>
    Users_id?: UuidWithAggregatesFilter | string
    Exercises_id?: UuidWithAggregatesFilter | string
  }

  export type Users_WorkoutPlansWhereInput = {
    AND?: Enumerable<Users_WorkoutPlansWhereInput>
    OR?: Enumerable<Users_WorkoutPlansWhereInput>
    NOT?: Enumerable<Users_WorkoutPlansWhereInput>
    Users_id?: UuidFilter | string
    WorkoutPlans_id?: UuidFilter | string
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    WorkoutPlans?: XOR<WorkoutPlansRelationFilter, WorkoutPlansWhereInput>
  }

  export type Users_WorkoutPlansOrderByWithRelationInput = {
    Users_id?: SortOrder
    WorkoutPlans_id?: SortOrder
    Users?: UsersOrderByWithRelationInput
    WorkoutPlans?: WorkoutPlansOrderByWithRelationInput
  }

  export type Users_WorkoutPlansWhereUniqueInput = {
    Users_id_WorkoutPlans_id?: Users_WorkoutPlansUsers_idWorkoutPlans_idCompoundUniqueInput
  }

  export type Users_WorkoutPlansOrderByWithAggregationInput = {
    Users_id?: SortOrder
    WorkoutPlans_id?: SortOrder
    _count?: Users_WorkoutPlansCountOrderByAggregateInput
    _max?: Users_WorkoutPlansMaxOrderByAggregateInput
    _min?: Users_WorkoutPlansMinOrderByAggregateInput
  }

  export type Users_WorkoutPlansScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Users_WorkoutPlansScalarWhereWithAggregatesInput>
    OR?: Enumerable<Users_WorkoutPlansScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Users_WorkoutPlansScalarWhereWithAggregatesInput>
    Users_id?: UuidWithAggregatesFilter | string
    WorkoutPlans_id?: UuidWithAggregatesFilter | string
  }

  export type WorkoutPlansWhereInput = {
    AND?: Enumerable<WorkoutPlansWhereInput>
    OR?: Enumerable<WorkoutPlansWhereInput>
    NOT?: Enumerable<WorkoutPlansWhereInput>
    id?: UuidFilter | string
    name?: StringFilter | string
    description?: StringNullableFilter | string | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansListRelationFilter
    Users_WorkoutPlans?: Users_WorkoutPlansListRelationFilter
  }

  export type WorkoutPlansOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansOrderByRelationAggregateInput
    Users_WorkoutPlans?: Users_WorkoutPlansOrderByRelationAggregateInput
  }

  export type WorkoutPlansWhereUniqueInput = {
    id?: string
  }

  export type WorkoutPlansOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: WorkoutPlansCountOrderByAggregateInput
    _max?: WorkoutPlansMaxOrderByAggregateInput
    _min?: WorkoutPlansMinOrderByAggregateInput
  }

  export type WorkoutPlansScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkoutPlansScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkoutPlansScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkoutPlansScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
  }

  export type nessie_migrationsWhereInput = {
    AND?: Enumerable<nessie_migrationsWhereInput>
    OR?: Enumerable<nessie_migrationsWhereInput>
    NOT?: Enumerable<nessie_migrationsWhereInput>
    id?: BigIntFilter | bigint | number
    file_name?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
  }

  export type nessie_migrationsOrderByWithRelationInput = {
    id?: SortOrder
    file_name?: SortOrder
    created_at?: SortOrder
  }

  export type nessie_migrationsWhereUniqueInput = {
    id?: bigint | number
    file_name?: string
  }

  export type nessie_migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    file_name?: SortOrder
    created_at?: SortOrder
    _count?: nessie_migrationsCountOrderByAggregateInput
    _avg?: nessie_migrationsAvgOrderByAggregateInput
    _max?: nessie_migrationsMaxOrderByAggregateInput
    _min?: nessie_migrationsMinOrderByAggregateInput
    _sum?: nessie_migrationsSumOrderByAggregateInput
  }

  export type nessie_migrationsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<nessie_migrationsScalarWhereWithAggregatesInput>
    OR?: Enumerable<nessie_migrationsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<nessie_migrationsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    file_name?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type ExerciseProgressesCreateInput = {
    date: Date | string
    prevRep?: number | null
    newRep?: number | null
    prevWeight?: number | null
    newWeight?: number | null
    prevDur?: number | null
    newDur?: number | null
    Users: UsersCreateNestedOneWithoutExerciseProgressesInput
    Exercises: ExercisesCreateNestedOneWithoutExerciseProgressesInput
  }

  export type ExerciseProgressesUncheckedCreateInput = {
    id: string
    date: Date | string
    prevRep?: number | null
    newRep?: number | null
    prevWeight?: number | null
    newWeight?: number | null
    prevDur?: number | null
    newDur?: number | null
  }

  export type ExerciseProgressesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prevRep?: NullableIntFieldUpdateOperationsInput | number | null
    newRep?: NullableIntFieldUpdateOperationsInput | number | null
    prevWeight?: NullableIntFieldUpdateOperationsInput | number | null
    newWeight?: NullableIntFieldUpdateOperationsInput | number | null
    prevDur?: NullableFloatFieldUpdateOperationsInput | number | null
    newDur?: NullableFloatFieldUpdateOperationsInput | number | null
    Users?: UsersUpdateOneRequiredWithoutExerciseProgressesNestedInput
    Exercises?: ExercisesUpdateOneRequiredWithoutExerciseProgressesNestedInput
  }

  export type ExerciseProgressesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prevRep?: NullableIntFieldUpdateOperationsInput | number | null
    newRep?: NullableIntFieldUpdateOperationsInput | number | null
    prevWeight?: NullableIntFieldUpdateOperationsInput | number | null
    newWeight?: NullableIntFieldUpdateOperationsInput | number | null
    prevDur?: NullableFloatFieldUpdateOperationsInput | number | null
    newDur?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExerciseProgressesCreateManyInput = {
    id: string
    date: Date | string
    prevRep?: number | null
    newRep?: number | null
    prevWeight?: number | null
    newWeight?: number | null
    prevDur?: number | null
    newDur?: number | null
  }

  export type ExerciseProgressesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prevRep?: NullableIntFieldUpdateOperationsInput | number | null
    newRep?: NullableIntFieldUpdateOperationsInput | number | null
    prevWeight?: NullableIntFieldUpdateOperationsInput | number | null
    newWeight?: NullableIntFieldUpdateOperationsInput | number | null
    prevDur?: NullableFloatFieldUpdateOperationsInput | number | null
    newDur?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExerciseProgressesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prevRep?: NullableIntFieldUpdateOperationsInput | number | null
    newRep?: NullableIntFieldUpdateOperationsInput | number | null
    prevWeight?: NullableIntFieldUpdateOperationsInput | number | null
    newWeight?: NullableIntFieldUpdateOperationsInput | number | null
    prevDur?: NullableFloatFieldUpdateOperationsInput | number | null
    newDur?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ExercisesCreateInput = {
    id: string
    name?: string
    description?: string | null
    muscle_group?: MuscleGroup | null
    exercise_type?: ExerciseType
    ExerciseProgresses?: ExerciseProgressesCreateNestedOneWithoutExercisesInput
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansCreateNestedManyWithoutExercisesInput
    Users_Exercises?: Users_ExercisesCreateNestedManyWithoutExercisesInput
  }

  export type ExercisesUncheckedCreateInput = {
    id: string
    name?: string
    description?: string | null
    muscle_group?: MuscleGroup | null
    exercise_type?: ExerciseType
    ExerciseProgresses?: ExerciseProgressesUncheckedCreateNestedOneWithoutExercisesInput
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedCreateNestedManyWithoutExercisesInput
    Users_Exercises?: Users_ExercisesUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type ExercisesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
    ExerciseProgresses?: ExerciseProgressesUpdateOneWithoutExercisesNestedInput
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUpdateManyWithoutExercisesNestedInput
    Users_Exercises?: Users_ExercisesUpdateManyWithoutExercisesNestedInput
  }

  export type ExercisesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
    ExerciseProgresses?: ExerciseProgressesUncheckedUpdateOneWithoutExercisesNestedInput
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedUpdateManyWithoutExercisesNestedInput
    Users_Exercises?: Users_ExercisesUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type ExercisesCreateManyInput = {
    id: string
    name?: string
    description?: string | null
    muscle_group?: MuscleGroup | null
    exercise_type?: ExerciseType
  }

  export type ExercisesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
  }

  export type ExercisesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
  }

  export type Exercises_WorkoutPlansCreateInput = {
    Exercises: ExercisesCreateNestedOneWithoutExercises_WorkoutPlansInput
    WorkoutPlans: WorkoutPlansCreateNestedOneWithoutExercises_WorkoutPlansInput
  }

  export type Exercises_WorkoutPlansUncheckedCreateInput = {
    Exercises_id: string
    WorkoutPlans_id: string
  }

  export type Exercises_WorkoutPlansUpdateInput = {
    Exercises?: ExercisesUpdateOneRequiredWithoutExercises_WorkoutPlansNestedInput
    WorkoutPlans?: WorkoutPlansUpdateOneRequiredWithoutExercises_WorkoutPlansNestedInput
  }

  export type Exercises_WorkoutPlansUncheckedUpdateInput = {
    Exercises_id?: StringFieldUpdateOperationsInput | string
    WorkoutPlans_id?: StringFieldUpdateOperationsInput | string
  }

  export type Exercises_WorkoutPlansCreateManyInput = {
    Exercises_id: string
    WorkoutPlans_id: string
  }

  export type Exercises_WorkoutPlansUpdateManyMutationInput = {

  }

  export type Exercises_WorkoutPlansUncheckedUpdateManyInput = {
    Exercises_id?: StringFieldUpdateOperationsInput | string
    WorkoutPlans_id?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    id: string
    username: string
    email: string
    created_at?: Date | string | null
    profile_pic_uri?: string | null
    ExerciseProgresses?: ExerciseProgressesCreateNestedOneWithoutUsersInput
    Users_Exercises?: Users_ExercisesCreateNestedManyWithoutUsersInput
    Users_WorkoutPlans?: Users_WorkoutPlansCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id: string
    username: string
    email: string
    created_at?: Date | string | null
    profile_pic_uri?: string | null
    ExerciseProgresses?: ExerciseProgressesUncheckedCreateNestedOneWithoutUsersInput
    Users_Exercises?: Users_ExercisesUncheckedCreateNestedManyWithoutUsersInput
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
    ExerciseProgresses?: ExerciseProgressesUpdateOneWithoutUsersNestedInput
    Users_Exercises?: Users_ExercisesUpdateManyWithoutUsersNestedInput
    Users_WorkoutPlans?: Users_WorkoutPlansUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
    ExerciseProgresses?: ExerciseProgressesUncheckedUpdateOneWithoutUsersNestedInput
    Users_Exercises?: Users_ExercisesUncheckedUpdateManyWithoutUsersNestedInput
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id: string
    username: string
    email: string
    created_at?: Date | string | null
    profile_pic_uri?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Users_ExercisesCreateInput = {
    Exercises: ExercisesCreateNestedOneWithoutUsers_ExercisesInput
    Users: UsersCreateNestedOneWithoutUsers_ExercisesInput
  }

  export type Users_ExercisesUncheckedCreateInput = {
    Users_id: string
    Exercises_id: string
  }

  export type Users_ExercisesUpdateInput = {
    Exercises?: ExercisesUpdateOneRequiredWithoutUsers_ExercisesNestedInput
    Users?: UsersUpdateOneRequiredWithoutUsers_ExercisesNestedInput
  }

  export type Users_ExercisesUncheckedUpdateInput = {
    Users_id?: StringFieldUpdateOperationsInput | string
    Exercises_id?: StringFieldUpdateOperationsInput | string
  }

  export type Users_ExercisesCreateManyInput = {
    Users_id: string
    Exercises_id: string
  }

  export type Users_ExercisesUpdateManyMutationInput = {

  }

  export type Users_ExercisesUncheckedUpdateManyInput = {
    Users_id?: StringFieldUpdateOperationsInput | string
    Exercises_id?: StringFieldUpdateOperationsInput | string
  }

  export type Users_WorkoutPlansCreateInput = {
    Users: UsersCreateNestedOneWithoutUsers_WorkoutPlansInput
    WorkoutPlans: WorkoutPlansCreateNestedOneWithoutUsers_WorkoutPlansInput
  }

  export type Users_WorkoutPlansUncheckedCreateInput = {
    Users_id: string
    WorkoutPlans_id: string
  }

  export type Users_WorkoutPlansUpdateInput = {
    Users?: UsersUpdateOneRequiredWithoutUsers_WorkoutPlansNestedInput
    WorkoutPlans?: WorkoutPlansUpdateOneRequiredWithoutUsers_WorkoutPlansNestedInput
  }

  export type Users_WorkoutPlansUncheckedUpdateInput = {
    Users_id?: StringFieldUpdateOperationsInput | string
    WorkoutPlans_id?: StringFieldUpdateOperationsInput | string
  }

  export type Users_WorkoutPlansCreateManyInput = {
    Users_id: string
    WorkoutPlans_id: string
  }

  export type Users_WorkoutPlansUpdateManyMutationInput = {

  }

  export type Users_WorkoutPlansUncheckedUpdateManyInput = {
    Users_id?: StringFieldUpdateOperationsInput | string
    WorkoutPlans_id?: StringFieldUpdateOperationsInput | string
  }

  export type WorkoutPlansCreateInput = {
    id: string
    name: string
    description?: string | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansCreateNestedManyWithoutWorkoutPlansInput
    Users_WorkoutPlans?: Users_WorkoutPlansCreateNestedManyWithoutWorkoutPlansInput
  }

  export type WorkoutPlansUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedCreateNestedManyWithoutWorkoutPlansInput
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedCreateNestedManyWithoutWorkoutPlansInput
  }

  export type WorkoutPlansUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUpdateManyWithoutWorkoutPlansNestedInput
    Users_WorkoutPlans?: Users_WorkoutPlansUpdateManyWithoutWorkoutPlansNestedInput
  }

  export type WorkoutPlansUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedUpdateManyWithoutWorkoutPlansNestedInput
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedUpdateManyWithoutWorkoutPlansNestedInput
  }

  export type WorkoutPlansCreateManyInput = {
    id: string
    name: string
    description?: string | null
  }

  export type WorkoutPlansUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkoutPlansUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type nessie_migrationsCreateInput = {
    id?: bigint | number
    file_name?: string | null
    created_at?: Date | string | null
  }

  export type nessie_migrationsUncheckedCreateInput = {
    id?: bigint | number
    file_name?: string | null
    created_at?: Date | string | null
  }

  export type nessie_migrationsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nessie_migrationsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nessie_migrationsCreateManyInput = {
    id?: bigint | number
    file_name?: string | null
    created_at?: Date | string | null
  }

  export type nessie_migrationsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nessie_migrationsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    file_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ExercisesRelationFilter = {
    is?: ExercisesWhereInput
    isNot?: ExercisesWhereInput
  }

  export type ExerciseProgressesCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    prevRep?: SortOrder
    newRep?: SortOrder
    prevWeight?: SortOrder
    newWeight?: SortOrder
    prevDur?: SortOrder
    newDur?: SortOrder
  }

  export type ExerciseProgressesAvgOrderByAggregateInput = {
    prevRep?: SortOrder
    newRep?: SortOrder
    prevWeight?: SortOrder
    newWeight?: SortOrder
    prevDur?: SortOrder
    newDur?: SortOrder
  }

  export type ExerciseProgressesMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    prevRep?: SortOrder
    newRep?: SortOrder
    prevWeight?: SortOrder
    newWeight?: SortOrder
    prevDur?: SortOrder
    newDur?: SortOrder
  }

  export type ExerciseProgressesMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    prevRep?: SortOrder
    newRep?: SortOrder
    prevWeight?: SortOrder
    newWeight?: SortOrder
    prevDur?: SortOrder
    newDur?: SortOrder
  }

  export type ExerciseProgressesSumOrderByAggregateInput = {
    prevRep?: SortOrder
    newRep?: SortOrder
    prevWeight?: SortOrder
    newWeight?: SortOrder
    prevDur?: SortOrder
    newDur?: SortOrder
  }

  export type UuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumMuscleGroupNullableFilter = {
    equals?: MuscleGroup | null
    in?: Enumerable<MuscleGroup> | null
    notIn?: Enumerable<MuscleGroup> | null
    not?: NestedEnumMuscleGroupNullableFilter | MuscleGroup | null
  }

  export type EnumExerciseTypeFilter = {
    equals?: ExerciseType
    in?: Enumerable<ExerciseType>
    notIn?: Enumerable<ExerciseType>
    not?: NestedEnumExerciseTypeFilter | ExerciseType
  }

  export type ExerciseProgressesRelationFilter = {
    is?: ExerciseProgressesWhereInput | null
    isNot?: ExerciseProgressesWhereInput | null
  }

  export type Exercises_WorkoutPlansListRelationFilter = {
    every?: Exercises_WorkoutPlansWhereInput
    some?: Exercises_WorkoutPlansWhereInput
    none?: Exercises_WorkoutPlansWhereInput
  }

  export type Users_ExercisesListRelationFilter = {
    every?: Users_ExercisesWhereInput
    some?: Users_ExercisesWhereInput
    none?: Users_ExercisesWhereInput
  }

  export type Exercises_WorkoutPlansOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Users_ExercisesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExercisesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    exercise_type?: SortOrder
  }

  export type ExercisesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    exercise_type?: SortOrder
  }

  export type ExercisesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    muscle_group?: SortOrder
    exercise_type?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumMuscleGroupNullableWithAggregatesFilter = {
    equals?: MuscleGroup | null
    in?: Enumerable<MuscleGroup> | null
    notIn?: Enumerable<MuscleGroup> | null
    not?: NestedEnumMuscleGroupNullableWithAggregatesFilter | MuscleGroup | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumMuscleGroupNullableFilter
    _max?: NestedEnumMuscleGroupNullableFilter
  }

  export type EnumExerciseTypeWithAggregatesFilter = {
    equals?: ExerciseType
    in?: Enumerable<ExerciseType>
    notIn?: Enumerable<ExerciseType>
    not?: NestedEnumExerciseTypeWithAggregatesFilter | ExerciseType
    _count?: NestedIntFilter
    _min?: NestedEnumExerciseTypeFilter
    _max?: NestedEnumExerciseTypeFilter
  }

  export type WorkoutPlansRelationFilter = {
    is?: WorkoutPlansWhereInput
    isNot?: WorkoutPlansWhereInput
  }

  export type Exercises_WorkoutPlansExercises_idWorkoutPlans_idCompoundUniqueInput = {
    Exercises_id: string
    WorkoutPlans_id: string
  }

  export type Exercises_WorkoutPlansCountOrderByAggregateInput = {
    Exercises_id?: SortOrder
    WorkoutPlans_id?: SortOrder
  }

  export type Exercises_WorkoutPlansMaxOrderByAggregateInput = {
    Exercises_id?: SortOrder
    WorkoutPlans_id?: SortOrder
  }

  export type Exercises_WorkoutPlansMinOrderByAggregateInput = {
    Exercises_id?: SortOrder
    WorkoutPlans_id?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type Users_WorkoutPlansListRelationFilter = {
    every?: Users_WorkoutPlansWhereInput
    some?: Users_WorkoutPlansWhereInput
    none?: Users_WorkoutPlansWhereInput
  }

  export type Users_WorkoutPlansOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    profile_pic_uri?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    profile_pic_uri?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    profile_pic_uri?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type Users_ExercisesUsers_idExercises_idCompoundUniqueInput = {
    Users_id: string
    Exercises_id: string
  }

  export type Users_ExercisesCountOrderByAggregateInput = {
    Users_id?: SortOrder
    Exercises_id?: SortOrder
  }

  export type Users_ExercisesMaxOrderByAggregateInput = {
    Users_id?: SortOrder
    Exercises_id?: SortOrder
  }

  export type Users_ExercisesMinOrderByAggregateInput = {
    Users_id?: SortOrder
    Exercises_id?: SortOrder
  }

  export type Users_WorkoutPlansUsers_idWorkoutPlans_idCompoundUniqueInput = {
    Users_id: string
    WorkoutPlans_id: string
  }

  export type Users_WorkoutPlansCountOrderByAggregateInput = {
    Users_id?: SortOrder
    WorkoutPlans_id?: SortOrder
  }

  export type Users_WorkoutPlansMaxOrderByAggregateInput = {
    Users_id?: SortOrder
    WorkoutPlans_id?: SortOrder
  }

  export type Users_WorkoutPlansMinOrderByAggregateInput = {
    Users_id?: SortOrder
    WorkoutPlans_id?: SortOrder
  }

  export type WorkoutPlansCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WorkoutPlansMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WorkoutPlansMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type nessie_migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    created_at?: SortOrder
  }

  export type nessie_migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type nessie_migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    created_at?: SortOrder
  }

  export type nessie_migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    file_name?: SortOrder
    created_at?: SortOrder
  }

  export type nessie_migrationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type UsersCreateNestedOneWithoutExerciseProgressesInput = {
    create?: XOR<UsersCreateWithoutExerciseProgressesInput, UsersUncheckedCreateWithoutExerciseProgressesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutExerciseProgressesInput
    connect?: UsersWhereUniqueInput
  }

  export type ExercisesCreateNestedOneWithoutExerciseProgressesInput = {
    create?: XOR<ExercisesCreateWithoutExerciseProgressesInput, ExercisesUncheckedCreateWithoutExerciseProgressesInput>
    connectOrCreate?: ExercisesCreateOrConnectWithoutExerciseProgressesInput
    connect?: ExercisesWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutExerciseProgressesNestedInput = {
    create?: XOR<UsersCreateWithoutExerciseProgressesInput, UsersUncheckedCreateWithoutExerciseProgressesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutExerciseProgressesInput
    upsert?: UsersUpsertWithoutExerciseProgressesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutExerciseProgressesInput, UsersUncheckedUpdateWithoutExerciseProgressesInput>
  }

  export type ExercisesUpdateOneRequiredWithoutExerciseProgressesNestedInput = {
    create?: XOR<ExercisesCreateWithoutExerciseProgressesInput, ExercisesUncheckedCreateWithoutExerciseProgressesInput>
    connectOrCreate?: ExercisesCreateOrConnectWithoutExerciseProgressesInput
    upsert?: ExercisesUpsertWithoutExerciseProgressesInput
    connect?: ExercisesWhereUniqueInput
    update?: XOR<ExercisesUpdateWithoutExerciseProgressesInput, ExercisesUncheckedUpdateWithoutExerciseProgressesInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ExerciseProgressesCreateNestedOneWithoutExercisesInput = {
    create?: XOR<ExerciseProgressesCreateWithoutExercisesInput, ExerciseProgressesUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: ExerciseProgressesCreateOrConnectWithoutExercisesInput
    connect?: ExerciseProgressesWhereUniqueInput
  }

  export type Exercises_WorkoutPlansCreateNestedManyWithoutExercisesInput = {
    create?: XOR<Enumerable<Exercises_WorkoutPlansCreateWithoutExercisesInput>, Enumerable<Exercises_WorkoutPlansUncheckedCreateWithoutExercisesInput>>
    connectOrCreate?: Enumerable<Exercises_WorkoutPlansCreateOrConnectWithoutExercisesInput>
    createMany?: Exercises_WorkoutPlansCreateManyExercisesInputEnvelope
    connect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
  }

  export type Users_ExercisesCreateNestedManyWithoutExercisesInput = {
    create?: XOR<Enumerable<Users_ExercisesCreateWithoutExercisesInput>, Enumerable<Users_ExercisesUncheckedCreateWithoutExercisesInput>>
    connectOrCreate?: Enumerable<Users_ExercisesCreateOrConnectWithoutExercisesInput>
    createMany?: Users_ExercisesCreateManyExercisesInputEnvelope
    connect?: Enumerable<Users_ExercisesWhereUniqueInput>
  }

  export type ExerciseProgressesUncheckedCreateNestedOneWithoutExercisesInput = {
    create?: XOR<ExerciseProgressesCreateWithoutExercisesInput, ExerciseProgressesUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: ExerciseProgressesCreateOrConnectWithoutExercisesInput
    connect?: ExerciseProgressesWhereUniqueInput
  }

  export type Exercises_WorkoutPlansUncheckedCreateNestedManyWithoutExercisesInput = {
    create?: XOR<Enumerable<Exercises_WorkoutPlansCreateWithoutExercisesInput>, Enumerable<Exercises_WorkoutPlansUncheckedCreateWithoutExercisesInput>>
    connectOrCreate?: Enumerable<Exercises_WorkoutPlansCreateOrConnectWithoutExercisesInput>
    createMany?: Exercises_WorkoutPlansCreateManyExercisesInputEnvelope
    connect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
  }

  export type Users_ExercisesUncheckedCreateNestedManyWithoutExercisesInput = {
    create?: XOR<Enumerable<Users_ExercisesCreateWithoutExercisesInput>, Enumerable<Users_ExercisesUncheckedCreateWithoutExercisesInput>>
    connectOrCreate?: Enumerable<Users_ExercisesCreateOrConnectWithoutExercisesInput>
    createMany?: Users_ExercisesCreateManyExercisesInputEnvelope
    connect?: Enumerable<Users_ExercisesWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumMuscleGroupFieldUpdateOperationsInput = {
    set?: MuscleGroup | null
  }

  export type EnumExerciseTypeFieldUpdateOperationsInput = {
    set?: ExerciseType
  }

  export type ExerciseProgressesUpdateOneWithoutExercisesNestedInput = {
    create?: XOR<ExerciseProgressesCreateWithoutExercisesInput, ExerciseProgressesUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: ExerciseProgressesCreateOrConnectWithoutExercisesInput
    upsert?: ExerciseProgressesUpsertWithoutExercisesInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExerciseProgressesWhereUniqueInput
    update?: XOR<ExerciseProgressesUpdateWithoutExercisesInput, ExerciseProgressesUncheckedUpdateWithoutExercisesInput>
  }

  export type Exercises_WorkoutPlansUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<Enumerable<Exercises_WorkoutPlansCreateWithoutExercisesInput>, Enumerable<Exercises_WorkoutPlansUncheckedCreateWithoutExercisesInput>>
    connectOrCreate?: Enumerable<Exercises_WorkoutPlansCreateOrConnectWithoutExercisesInput>
    upsert?: Enumerable<Exercises_WorkoutPlansUpsertWithWhereUniqueWithoutExercisesInput>
    createMany?: Exercises_WorkoutPlansCreateManyExercisesInputEnvelope
    set?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    disconnect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    delete?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    connect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    update?: Enumerable<Exercises_WorkoutPlansUpdateWithWhereUniqueWithoutExercisesInput>
    updateMany?: Enumerable<Exercises_WorkoutPlansUpdateManyWithWhereWithoutExercisesInput>
    deleteMany?: Enumerable<Exercises_WorkoutPlansScalarWhereInput>
  }

  export type Users_ExercisesUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<Enumerable<Users_ExercisesCreateWithoutExercisesInput>, Enumerable<Users_ExercisesUncheckedCreateWithoutExercisesInput>>
    connectOrCreate?: Enumerable<Users_ExercisesCreateOrConnectWithoutExercisesInput>
    upsert?: Enumerable<Users_ExercisesUpsertWithWhereUniqueWithoutExercisesInput>
    createMany?: Users_ExercisesCreateManyExercisesInputEnvelope
    set?: Enumerable<Users_ExercisesWhereUniqueInput>
    disconnect?: Enumerable<Users_ExercisesWhereUniqueInput>
    delete?: Enumerable<Users_ExercisesWhereUniqueInput>
    connect?: Enumerable<Users_ExercisesWhereUniqueInput>
    update?: Enumerable<Users_ExercisesUpdateWithWhereUniqueWithoutExercisesInput>
    updateMany?: Enumerable<Users_ExercisesUpdateManyWithWhereWithoutExercisesInput>
    deleteMany?: Enumerable<Users_ExercisesScalarWhereInput>
  }

  export type ExerciseProgressesUncheckedUpdateOneWithoutExercisesNestedInput = {
    create?: XOR<ExerciseProgressesCreateWithoutExercisesInput, ExerciseProgressesUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: ExerciseProgressesCreateOrConnectWithoutExercisesInput
    upsert?: ExerciseProgressesUpsertWithoutExercisesInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExerciseProgressesWhereUniqueInput
    update?: XOR<ExerciseProgressesUpdateWithoutExercisesInput, ExerciseProgressesUncheckedUpdateWithoutExercisesInput>
  }

  export type Exercises_WorkoutPlansUncheckedUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<Enumerable<Exercises_WorkoutPlansCreateWithoutExercisesInput>, Enumerable<Exercises_WorkoutPlansUncheckedCreateWithoutExercisesInput>>
    connectOrCreate?: Enumerable<Exercises_WorkoutPlansCreateOrConnectWithoutExercisesInput>
    upsert?: Enumerable<Exercises_WorkoutPlansUpsertWithWhereUniqueWithoutExercisesInput>
    createMany?: Exercises_WorkoutPlansCreateManyExercisesInputEnvelope
    set?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    disconnect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    delete?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    connect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    update?: Enumerable<Exercises_WorkoutPlansUpdateWithWhereUniqueWithoutExercisesInput>
    updateMany?: Enumerable<Exercises_WorkoutPlansUpdateManyWithWhereWithoutExercisesInput>
    deleteMany?: Enumerable<Exercises_WorkoutPlansScalarWhereInput>
  }

  export type Users_ExercisesUncheckedUpdateManyWithoutExercisesNestedInput = {
    create?: XOR<Enumerable<Users_ExercisesCreateWithoutExercisesInput>, Enumerable<Users_ExercisesUncheckedCreateWithoutExercisesInput>>
    connectOrCreate?: Enumerable<Users_ExercisesCreateOrConnectWithoutExercisesInput>
    upsert?: Enumerable<Users_ExercisesUpsertWithWhereUniqueWithoutExercisesInput>
    createMany?: Users_ExercisesCreateManyExercisesInputEnvelope
    set?: Enumerable<Users_ExercisesWhereUniqueInput>
    disconnect?: Enumerable<Users_ExercisesWhereUniqueInput>
    delete?: Enumerable<Users_ExercisesWhereUniqueInput>
    connect?: Enumerable<Users_ExercisesWhereUniqueInput>
    update?: Enumerable<Users_ExercisesUpdateWithWhereUniqueWithoutExercisesInput>
    updateMany?: Enumerable<Users_ExercisesUpdateManyWithWhereWithoutExercisesInput>
    deleteMany?: Enumerable<Users_ExercisesScalarWhereInput>
  }

  export type ExercisesCreateNestedOneWithoutExercises_WorkoutPlansInput = {
    create?: XOR<ExercisesCreateWithoutExercises_WorkoutPlansInput, ExercisesUncheckedCreateWithoutExercises_WorkoutPlansInput>
    connectOrCreate?: ExercisesCreateOrConnectWithoutExercises_WorkoutPlansInput
    connect?: ExercisesWhereUniqueInput
  }

  export type WorkoutPlansCreateNestedOneWithoutExercises_WorkoutPlansInput = {
    create?: XOR<WorkoutPlansCreateWithoutExercises_WorkoutPlansInput, WorkoutPlansUncheckedCreateWithoutExercises_WorkoutPlansInput>
    connectOrCreate?: WorkoutPlansCreateOrConnectWithoutExercises_WorkoutPlansInput
    connect?: WorkoutPlansWhereUniqueInput
  }

  export type ExercisesUpdateOneRequiredWithoutExercises_WorkoutPlansNestedInput = {
    create?: XOR<ExercisesCreateWithoutExercises_WorkoutPlansInput, ExercisesUncheckedCreateWithoutExercises_WorkoutPlansInput>
    connectOrCreate?: ExercisesCreateOrConnectWithoutExercises_WorkoutPlansInput
    upsert?: ExercisesUpsertWithoutExercises_WorkoutPlansInput
    connect?: ExercisesWhereUniqueInput
    update?: XOR<ExercisesUpdateWithoutExercises_WorkoutPlansInput, ExercisesUncheckedUpdateWithoutExercises_WorkoutPlansInput>
  }

  export type WorkoutPlansUpdateOneRequiredWithoutExercises_WorkoutPlansNestedInput = {
    create?: XOR<WorkoutPlansCreateWithoutExercises_WorkoutPlansInput, WorkoutPlansUncheckedCreateWithoutExercises_WorkoutPlansInput>
    connectOrCreate?: WorkoutPlansCreateOrConnectWithoutExercises_WorkoutPlansInput
    upsert?: WorkoutPlansUpsertWithoutExercises_WorkoutPlansInput
    connect?: WorkoutPlansWhereUniqueInput
    update?: XOR<WorkoutPlansUpdateWithoutExercises_WorkoutPlansInput, WorkoutPlansUncheckedUpdateWithoutExercises_WorkoutPlansInput>
  }

  export type ExerciseProgressesCreateNestedOneWithoutUsersInput = {
    create?: XOR<ExerciseProgressesCreateWithoutUsersInput, ExerciseProgressesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ExerciseProgressesCreateOrConnectWithoutUsersInput
    connect?: ExerciseProgressesWhereUniqueInput
  }

  export type Users_ExercisesCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<Users_ExercisesCreateWithoutUsersInput>, Enumerable<Users_ExercisesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Users_ExercisesCreateOrConnectWithoutUsersInput>
    createMany?: Users_ExercisesCreateManyUsersInputEnvelope
    connect?: Enumerable<Users_ExercisesWhereUniqueInput>
  }

  export type Users_WorkoutPlansCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<Users_WorkoutPlansCreateWithoutUsersInput>, Enumerable<Users_WorkoutPlansUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Users_WorkoutPlansCreateOrConnectWithoutUsersInput>
    createMany?: Users_WorkoutPlansCreateManyUsersInputEnvelope
    connect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
  }

  export type ExerciseProgressesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<ExerciseProgressesCreateWithoutUsersInput, ExerciseProgressesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ExerciseProgressesCreateOrConnectWithoutUsersInput
    connect?: ExerciseProgressesWhereUniqueInput
  }

  export type Users_ExercisesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<Users_ExercisesCreateWithoutUsersInput>, Enumerable<Users_ExercisesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Users_ExercisesCreateOrConnectWithoutUsersInput>
    createMany?: Users_ExercisesCreateManyUsersInputEnvelope
    connect?: Enumerable<Users_ExercisesWhereUniqueInput>
  }

  export type Users_WorkoutPlansUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<Users_WorkoutPlansCreateWithoutUsersInput>, Enumerable<Users_WorkoutPlansUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Users_WorkoutPlansCreateOrConnectWithoutUsersInput>
    createMany?: Users_WorkoutPlansCreateManyUsersInputEnvelope
    connect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ExerciseProgressesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ExerciseProgressesCreateWithoutUsersInput, ExerciseProgressesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ExerciseProgressesCreateOrConnectWithoutUsersInput
    upsert?: ExerciseProgressesUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExerciseProgressesWhereUniqueInput
    update?: XOR<ExerciseProgressesUpdateWithoutUsersInput, ExerciseProgressesUncheckedUpdateWithoutUsersInput>
  }

  export type Users_ExercisesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<Users_ExercisesCreateWithoutUsersInput>, Enumerable<Users_ExercisesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Users_ExercisesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<Users_ExercisesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: Users_ExercisesCreateManyUsersInputEnvelope
    set?: Enumerable<Users_ExercisesWhereUniqueInput>
    disconnect?: Enumerable<Users_ExercisesWhereUniqueInput>
    delete?: Enumerable<Users_ExercisesWhereUniqueInput>
    connect?: Enumerable<Users_ExercisesWhereUniqueInput>
    update?: Enumerable<Users_ExercisesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<Users_ExercisesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<Users_ExercisesScalarWhereInput>
  }

  export type Users_WorkoutPlansUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<Users_WorkoutPlansCreateWithoutUsersInput>, Enumerable<Users_WorkoutPlansUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Users_WorkoutPlansCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<Users_WorkoutPlansUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: Users_WorkoutPlansCreateManyUsersInputEnvelope
    set?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    disconnect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    delete?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    connect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    update?: Enumerable<Users_WorkoutPlansUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<Users_WorkoutPlansUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<Users_WorkoutPlansScalarWhereInput>
  }

  export type ExerciseProgressesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ExerciseProgressesCreateWithoutUsersInput, ExerciseProgressesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ExerciseProgressesCreateOrConnectWithoutUsersInput
    upsert?: ExerciseProgressesUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExerciseProgressesWhereUniqueInput
    update?: XOR<ExerciseProgressesUpdateWithoutUsersInput, ExerciseProgressesUncheckedUpdateWithoutUsersInput>
  }

  export type Users_ExercisesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<Users_ExercisesCreateWithoutUsersInput>, Enumerable<Users_ExercisesUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Users_ExercisesCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<Users_ExercisesUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: Users_ExercisesCreateManyUsersInputEnvelope
    set?: Enumerable<Users_ExercisesWhereUniqueInput>
    disconnect?: Enumerable<Users_ExercisesWhereUniqueInput>
    delete?: Enumerable<Users_ExercisesWhereUniqueInput>
    connect?: Enumerable<Users_ExercisesWhereUniqueInput>
    update?: Enumerable<Users_ExercisesUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<Users_ExercisesUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<Users_ExercisesScalarWhereInput>
  }

  export type Users_WorkoutPlansUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<Users_WorkoutPlansCreateWithoutUsersInput>, Enumerable<Users_WorkoutPlansUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<Users_WorkoutPlansCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<Users_WorkoutPlansUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: Users_WorkoutPlansCreateManyUsersInputEnvelope
    set?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    disconnect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    delete?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    connect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    update?: Enumerable<Users_WorkoutPlansUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<Users_WorkoutPlansUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<Users_WorkoutPlansScalarWhereInput>
  }

  export type ExercisesCreateNestedOneWithoutUsers_ExercisesInput = {
    create?: XOR<ExercisesCreateWithoutUsers_ExercisesInput, ExercisesUncheckedCreateWithoutUsers_ExercisesInput>
    connectOrCreate?: ExercisesCreateOrConnectWithoutUsers_ExercisesInput
    connect?: ExercisesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutUsers_ExercisesInput = {
    create?: XOR<UsersCreateWithoutUsers_ExercisesInput, UsersUncheckedCreateWithoutUsers_ExercisesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsers_ExercisesInput
    connect?: UsersWhereUniqueInput
  }

  export type ExercisesUpdateOneRequiredWithoutUsers_ExercisesNestedInput = {
    create?: XOR<ExercisesCreateWithoutUsers_ExercisesInput, ExercisesUncheckedCreateWithoutUsers_ExercisesInput>
    connectOrCreate?: ExercisesCreateOrConnectWithoutUsers_ExercisesInput
    upsert?: ExercisesUpsertWithoutUsers_ExercisesInput
    connect?: ExercisesWhereUniqueInput
    update?: XOR<ExercisesUpdateWithoutUsers_ExercisesInput, ExercisesUncheckedUpdateWithoutUsers_ExercisesInput>
  }

  export type UsersUpdateOneRequiredWithoutUsers_ExercisesNestedInput = {
    create?: XOR<UsersCreateWithoutUsers_ExercisesInput, UsersUncheckedCreateWithoutUsers_ExercisesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsers_ExercisesInput
    upsert?: UsersUpsertWithoutUsers_ExercisesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutUsers_ExercisesInput, UsersUncheckedUpdateWithoutUsers_ExercisesInput>
  }

  export type UsersCreateNestedOneWithoutUsers_WorkoutPlansInput = {
    create?: XOR<UsersCreateWithoutUsers_WorkoutPlansInput, UsersUncheckedCreateWithoutUsers_WorkoutPlansInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsers_WorkoutPlansInput
    connect?: UsersWhereUniqueInput
  }

  export type WorkoutPlansCreateNestedOneWithoutUsers_WorkoutPlansInput = {
    create?: XOR<WorkoutPlansCreateWithoutUsers_WorkoutPlansInput, WorkoutPlansUncheckedCreateWithoutUsers_WorkoutPlansInput>
    connectOrCreate?: WorkoutPlansCreateOrConnectWithoutUsers_WorkoutPlansInput
    connect?: WorkoutPlansWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUsers_WorkoutPlansNestedInput = {
    create?: XOR<UsersCreateWithoutUsers_WorkoutPlansInput, UsersUncheckedCreateWithoutUsers_WorkoutPlansInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsers_WorkoutPlansInput
    upsert?: UsersUpsertWithoutUsers_WorkoutPlansInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutUsers_WorkoutPlansInput, UsersUncheckedUpdateWithoutUsers_WorkoutPlansInput>
  }

  export type WorkoutPlansUpdateOneRequiredWithoutUsers_WorkoutPlansNestedInput = {
    create?: XOR<WorkoutPlansCreateWithoutUsers_WorkoutPlansInput, WorkoutPlansUncheckedCreateWithoutUsers_WorkoutPlansInput>
    connectOrCreate?: WorkoutPlansCreateOrConnectWithoutUsers_WorkoutPlansInput
    upsert?: WorkoutPlansUpsertWithoutUsers_WorkoutPlansInput
    connect?: WorkoutPlansWhereUniqueInput
    update?: XOR<WorkoutPlansUpdateWithoutUsers_WorkoutPlansInput, WorkoutPlansUncheckedUpdateWithoutUsers_WorkoutPlansInput>
  }

  export type Exercises_WorkoutPlansCreateNestedManyWithoutWorkoutPlansInput = {
    create?: XOR<Enumerable<Exercises_WorkoutPlansCreateWithoutWorkoutPlansInput>, Enumerable<Exercises_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>>
    connectOrCreate?: Enumerable<Exercises_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput>
    createMany?: Exercises_WorkoutPlansCreateManyWorkoutPlansInputEnvelope
    connect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
  }

  export type Users_WorkoutPlansCreateNestedManyWithoutWorkoutPlansInput = {
    create?: XOR<Enumerable<Users_WorkoutPlansCreateWithoutWorkoutPlansInput>, Enumerable<Users_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>>
    connectOrCreate?: Enumerable<Users_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput>
    createMany?: Users_WorkoutPlansCreateManyWorkoutPlansInputEnvelope
    connect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
  }

  export type Exercises_WorkoutPlansUncheckedCreateNestedManyWithoutWorkoutPlansInput = {
    create?: XOR<Enumerable<Exercises_WorkoutPlansCreateWithoutWorkoutPlansInput>, Enumerable<Exercises_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>>
    connectOrCreate?: Enumerable<Exercises_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput>
    createMany?: Exercises_WorkoutPlansCreateManyWorkoutPlansInputEnvelope
    connect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
  }

  export type Users_WorkoutPlansUncheckedCreateNestedManyWithoutWorkoutPlansInput = {
    create?: XOR<Enumerable<Users_WorkoutPlansCreateWithoutWorkoutPlansInput>, Enumerable<Users_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>>
    connectOrCreate?: Enumerable<Users_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput>
    createMany?: Users_WorkoutPlansCreateManyWorkoutPlansInputEnvelope
    connect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
  }

  export type Exercises_WorkoutPlansUpdateManyWithoutWorkoutPlansNestedInput = {
    create?: XOR<Enumerable<Exercises_WorkoutPlansCreateWithoutWorkoutPlansInput>, Enumerable<Exercises_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>>
    connectOrCreate?: Enumerable<Exercises_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput>
    upsert?: Enumerable<Exercises_WorkoutPlansUpsertWithWhereUniqueWithoutWorkoutPlansInput>
    createMany?: Exercises_WorkoutPlansCreateManyWorkoutPlansInputEnvelope
    set?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    disconnect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    delete?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    connect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    update?: Enumerable<Exercises_WorkoutPlansUpdateWithWhereUniqueWithoutWorkoutPlansInput>
    updateMany?: Enumerable<Exercises_WorkoutPlansUpdateManyWithWhereWithoutWorkoutPlansInput>
    deleteMany?: Enumerable<Exercises_WorkoutPlansScalarWhereInput>
  }

  export type Users_WorkoutPlansUpdateManyWithoutWorkoutPlansNestedInput = {
    create?: XOR<Enumerable<Users_WorkoutPlansCreateWithoutWorkoutPlansInput>, Enumerable<Users_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>>
    connectOrCreate?: Enumerable<Users_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput>
    upsert?: Enumerable<Users_WorkoutPlansUpsertWithWhereUniqueWithoutWorkoutPlansInput>
    createMany?: Users_WorkoutPlansCreateManyWorkoutPlansInputEnvelope
    set?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    disconnect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    delete?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    connect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    update?: Enumerable<Users_WorkoutPlansUpdateWithWhereUniqueWithoutWorkoutPlansInput>
    updateMany?: Enumerable<Users_WorkoutPlansUpdateManyWithWhereWithoutWorkoutPlansInput>
    deleteMany?: Enumerable<Users_WorkoutPlansScalarWhereInput>
  }

  export type Exercises_WorkoutPlansUncheckedUpdateManyWithoutWorkoutPlansNestedInput = {
    create?: XOR<Enumerable<Exercises_WorkoutPlansCreateWithoutWorkoutPlansInput>, Enumerable<Exercises_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>>
    connectOrCreate?: Enumerable<Exercises_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput>
    upsert?: Enumerable<Exercises_WorkoutPlansUpsertWithWhereUniqueWithoutWorkoutPlansInput>
    createMany?: Exercises_WorkoutPlansCreateManyWorkoutPlansInputEnvelope
    set?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    disconnect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    delete?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    connect?: Enumerable<Exercises_WorkoutPlansWhereUniqueInput>
    update?: Enumerable<Exercises_WorkoutPlansUpdateWithWhereUniqueWithoutWorkoutPlansInput>
    updateMany?: Enumerable<Exercises_WorkoutPlansUpdateManyWithWhereWithoutWorkoutPlansInput>
    deleteMany?: Enumerable<Exercises_WorkoutPlansScalarWhereInput>
  }

  export type Users_WorkoutPlansUncheckedUpdateManyWithoutWorkoutPlansNestedInput = {
    create?: XOR<Enumerable<Users_WorkoutPlansCreateWithoutWorkoutPlansInput>, Enumerable<Users_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>>
    connectOrCreate?: Enumerable<Users_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput>
    upsert?: Enumerable<Users_WorkoutPlansUpsertWithWhereUniqueWithoutWorkoutPlansInput>
    createMany?: Users_WorkoutPlansCreateManyWorkoutPlansInputEnvelope
    set?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    disconnect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    delete?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    connect?: Enumerable<Users_WorkoutPlansWhereUniqueInput>
    update?: Enumerable<Users_WorkoutPlansUpdateWithWhereUniqueWithoutWorkoutPlansInput>
    updateMany?: Enumerable<Users_WorkoutPlansUpdateManyWithWhereWithoutWorkoutPlansInput>
    deleteMany?: Enumerable<Users_WorkoutPlansScalarWhereInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedUuidFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedUuidWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    not?: NestedUuidWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumMuscleGroupNullableFilter = {
    equals?: MuscleGroup | null
    in?: Enumerable<MuscleGroup> | null
    notIn?: Enumerable<MuscleGroup> | null
    not?: NestedEnumMuscleGroupNullableFilter | MuscleGroup | null
  }

  export type NestedEnumExerciseTypeFilter = {
    equals?: ExerciseType
    in?: Enumerable<ExerciseType>
    notIn?: Enumerable<ExerciseType>
    not?: NestedEnumExerciseTypeFilter | ExerciseType
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedEnumMuscleGroupNullableWithAggregatesFilter = {
    equals?: MuscleGroup | null
    in?: Enumerable<MuscleGroup> | null
    notIn?: Enumerable<MuscleGroup> | null
    not?: NestedEnumMuscleGroupNullableWithAggregatesFilter | MuscleGroup | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumMuscleGroupNullableFilter
    _max?: NestedEnumMuscleGroupNullableFilter
  }

  export type NestedEnumExerciseTypeWithAggregatesFilter = {
    equals?: ExerciseType
    in?: Enumerable<ExerciseType>
    notIn?: Enumerable<ExerciseType>
    not?: NestedEnumExerciseTypeWithAggregatesFilter | ExerciseType
    _count?: NestedIntFilter
    _min?: NestedEnumExerciseTypeFilter
    _max?: NestedEnumExerciseTypeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type UsersCreateWithoutExerciseProgressesInput = {
    id: string
    username: string
    email: string
    created_at?: Date | string | null
    profile_pic_uri?: string | null
    Users_Exercises?: Users_ExercisesCreateNestedManyWithoutUsersInput
    Users_WorkoutPlans?: Users_WorkoutPlansCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutExerciseProgressesInput = {
    id: string
    username: string
    email: string
    created_at?: Date | string | null
    profile_pic_uri?: string | null
    Users_Exercises?: Users_ExercisesUncheckedCreateNestedManyWithoutUsersInput
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutExerciseProgressesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutExerciseProgressesInput, UsersUncheckedCreateWithoutExerciseProgressesInput>
  }

  export type ExercisesCreateWithoutExerciseProgressesInput = {
    id: string
    name?: string
    description?: string | null
    muscle_group?: MuscleGroup | null
    exercise_type?: ExerciseType
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansCreateNestedManyWithoutExercisesInput
    Users_Exercises?: Users_ExercisesCreateNestedManyWithoutExercisesInput
  }

  export type ExercisesUncheckedCreateWithoutExerciseProgressesInput = {
    id: string
    name?: string
    description?: string | null
    muscle_group?: MuscleGroup | null
    exercise_type?: ExerciseType
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedCreateNestedManyWithoutExercisesInput
    Users_Exercises?: Users_ExercisesUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type ExercisesCreateOrConnectWithoutExerciseProgressesInput = {
    where: ExercisesWhereUniqueInput
    create: XOR<ExercisesCreateWithoutExerciseProgressesInput, ExercisesUncheckedCreateWithoutExerciseProgressesInput>
  }

  export type UsersUpsertWithoutExerciseProgressesInput = {
    update: XOR<UsersUpdateWithoutExerciseProgressesInput, UsersUncheckedUpdateWithoutExerciseProgressesInput>
    create: XOR<UsersCreateWithoutExerciseProgressesInput, UsersUncheckedCreateWithoutExerciseProgressesInput>
  }

  export type UsersUpdateWithoutExerciseProgressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Users_Exercises?: Users_ExercisesUpdateManyWithoutUsersNestedInput
    Users_WorkoutPlans?: Users_WorkoutPlansUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutExerciseProgressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
    Users_Exercises?: Users_ExercisesUncheckedUpdateManyWithoutUsersNestedInput
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ExercisesUpsertWithoutExerciseProgressesInput = {
    update: XOR<ExercisesUpdateWithoutExerciseProgressesInput, ExercisesUncheckedUpdateWithoutExerciseProgressesInput>
    create: XOR<ExercisesCreateWithoutExerciseProgressesInput, ExercisesUncheckedCreateWithoutExerciseProgressesInput>
  }

  export type ExercisesUpdateWithoutExerciseProgressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUpdateManyWithoutExercisesNestedInput
    Users_Exercises?: Users_ExercisesUpdateManyWithoutExercisesNestedInput
  }

  export type ExercisesUncheckedUpdateWithoutExerciseProgressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedUpdateManyWithoutExercisesNestedInput
    Users_Exercises?: Users_ExercisesUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type ExerciseProgressesCreateWithoutExercisesInput = {
    date: Date | string
    prevRep?: number | null
    newRep?: number | null
    prevWeight?: number | null
    newWeight?: number | null
    prevDur?: number | null
    newDur?: number | null
    Users: UsersCreateNestedOneWithoutExerciseProgressesInput
  }

  export type ExerciseProgressesUncheckedCreateWithoutExercisesInput = {
    date: Date | string
    prevRep?: number | null
    newRep?: number | null
    prevWeight?: number | null
    newWeight?: number | null
    prevDur?: number | null
    newDur?: number | null
  }

  export type ExerciseProgressesCreateOrConnectWithoutExercisesInput = {
    where: ExerciseProgressesWhereUniqueInput
    create: XOR<ExerciseProgressesCreateWithoutExercisesInput, ExerciseProgressesUncheckedCreateWithoutExercisesInput>
  }

  export type Exercises_WorkoutPlansCreateWithoutExercisesInput = {
    WorkoutPlans: WorkoutPlansCreateNestedOneWithoutExercises_WorkoutPlansInput
  }

  export type Exercises_WorkoutPlansUncheckedCreateWithoutExercisesInput = {
    WorkoutPlans_id: string
  }

  export type Exercises_WorkoutPlansCreateOrConnectWithoutExercisesInput = {
    where: Exercises_WorkoutPlansWhereUniqueInput
    create: XOR<Exercises_WorkoutPlansCreateWithoutExercisesInput, Exercises_WorkoutPlansUncheckedCreateWithoutExercisesInput>
  }

  export type Exercises_WorkoutPlansCreateManyExercisesInputEnvelope = {
    data: Enumerable<Exercises_WorkoutPlansCreateManyExercisesInput>
    skipDuplicates?: boolean
  }

  export type Users_ExercisesCreateWithoutExercisesInput = {
    Users: UsersCreateNestedOneWithoutUsers_ExercisesInput
  }

  export type Users_ExercisesUncheckedCreateWithoutExercisesInput = {
    Users_id: string
  }

  export type Users_ExercisesCreateOrConnectWithoutExercisesInput = {
    where: Users_ExercisesWhereUniqueInput
    create: XOR<Users_ExercisesCreateWithoutExercisesInput, Users_ExercisesUncheckedCreateWithoutExercisesInput>
  }

  export type Users_ExercisesCreateManyExercisesInputEnvelope = {
    data: Enumerable<Users_ExercisesCreateManyExercisesInput>
    skipDuplicates?: boolean
  }

  export type ExerciseProgressesUpsertWithoutExercisesInput = {
    update: XOR<ExerciseProgressesUpdateWithoutExercisesInput, ExerciseProgressesUncheckedUpdateWithoutExercisesInput>
    create: XOR<ExerciseProgressesCreateWithoutExercisesInput, ExerciseProgressesUncheckedCreateWithoutExercisesInput>
  }

  export type ExerciseProgressesUpdateWithoutExercisesInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prevRep?: NullableIntFieldUpdateOperationsInput | number | null
    newRep?: NullableIntFieldUpdateOperationsInput | number | null
    prevWeight?: NullableIntFieldUpdateOperationsInput | number | null
    newWeight?: NullableIntFieldUpdateOperationsInput | number | null
    prevDur?: NullableFloatFieldUpdateOperationsInput | number | null
    newDur?: NullableFloatFieldUpdateOperationsInput | number | null
    Users?: UsersUpdateOneRequiredWithoutExerciseProgressesNestedInput
  }

  export type ExerciseProgressesUncheckedUpdateWithoutExercisesInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prevRep?: NullableIntFieldUpdateOperationsInput | number | null
    newRep?: NullableIntFieldUpdateOperationsInput | number | null
    prevWeight?: NullableIntFieldUpdateOperationsInput | number | null
    newWeight?: NullableIntFieldUpdateOperationsInput | number | null
    prevDur?: NullableFloatFieldUpdateOperationsInput | number | null
    newDur?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type Exercises_WorkoutPlansUpsertWithWhereUniqueWithoutExercisesInput = {
    where: Exercises_WorkoutPlansWhereUniqueInput
    update: XOR<Exercises_WorkoutPlansUpdateWithoutExercisesInput, Exercises_WorkoutPlansUncheckedUpdateWithoutExercisesInput>
    create: XOR<Exercises_WorkoutPlansCreateWithoutExercisesInput, Exercises_WorkoutPlansUncheckedCreateWithoutExercisesInput>
  }

  export type Exercises_WorkoutPlansUpdateWithWhereUniqueWithoutExercisesInput = {
    where: Exercises_WorkoutPlansWhereUniqueInput
    data: XOR<Exercises_WorkoutPlansUpdateWithoutExercisesInput, Exercises_WorkoutPlansUncheckedUpdateWithoutExercisesInput>
  }

  export type Exercises_WorkoutPlansUpdateManyWithWhereWithoutExercisesInput = {
    where: Exercises_WorkoutPlansScalarWhereInput
    data: XOR<Exercises_WorkoutPlansUpdateManyMutationInput, Exercises_WorkoutPlansUncheckedUpdateManyWithoutExercises_WorkoutPlansInput>
  }

  export type Exercises_WorkoutPlansScalarWhereInput = {
    AND?: Enumerable<Exercises_WorkoutPlansScalarWhereInput>
    OR?: Enumerable<Exercises_WorkoutPlansScalarWhereInput>
    NOT?: Enumerable<Exercises_WorkoutPlansScalarWhereInput>
    Exercises_id?: UuidFilter | string
    WorkoutPlans_id?: UuidFilter | string
  }

  export type Users_ExercisesUpsertWithWhereUniqueWithoutExercisesInput = {
    where: Users_ExercisesWhereUniqueInput
    update: XOR<Users_ExercisesUpdateWithoutExercisesInput, Users_ExercisesUncheckedUpdateWithoutExercisesInput>
    create: XOR<Users_ExercisesCreateWithoutExercisesInput, Users_ExercisesUncheckedCreateWithoutExercisesInput>
  }

  export type Users_ExercisesUpdateWithWhereUniqueWithoutExercisesInput = {
    where: Users_ExercisesWhereUniqueInput
    data: XOR<Users_ExercisesUpdateWithoutExercisesInput, Users_ExercisesUncheckedUpdateWithoutExercisesInput>
  }

  export type Users_ExercisesUpdateManyWithWhereWithoutExercisesInput = {
    where: Users_ExercisesScalarWhereInput
    data: XOR<Users_ExercisesUpdateManyMutationInput, Users_ExercisesUncheckedUpdateManyWithoutUsers_ExercisesInput>
  }

  export type Users_ExercisesScalarWhereInput = {
    AND?: Enumerable<Users_ExercisesScalarWhereInput>
    OR?: Enumerable<Users_ExercisesScalarWhereInput>
    NOT?: Enumerable<Users_ExercisesScalarWhereInput>
    Users_id?: UuidFilter | string
    Exercises_id?: UuidFilter | string
  }

  export type ExercisesCreateWithoutExercises_WorkoutPlansInput = {
    id: string
    name?: string
    description?: string | null
    muscle_group?: MuscleGroup | null
    exercise_type?: ExerciseType
    ExerciseProgresses?: ExerciseProgressesCreateNestedOneWithoutExercisesInput
    Users_Exercises?: Users_ExercisesCreateNestedManyWithoutExercisesInput
  }

  export type ExercisesUncheckedCreateWithoutExercises_WorkoutPlansInput = {
    id: string
    name?: string
    description?: string | null
    muscle_group?: MuscleGroup | null
    exercise_type?: ExerciseType
    ExerciseProgresses?: ExerciseProgressesUncheckedCreateNestedOneWithoutExercisesInput
    Users_Exercises?: Users_ExercisesUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type ExercisesCreateOrConnectWithoutExercises_WorkoutPlansInput = {
    where: ExercisesWhereUniqueInput
    create: XOR<ExercisesCreateWithoutExercises_WorkoutPlansInput, ExercisesUncheckedCreateWithoutExercises_WorkoutPlansInput>
  }

  export type WorkoutPlansCreateWithoutExercises_WorkoutPlansInput = {
    id: string
    name: string
    description?: string | null
    Users_WorkoutPlans?: Users_WorkoutPlansCreateNestedManyWithoutWorkoutPlansInput
  }

  export type WorkoutPlansUncheckedCreateWithoutExercises_WorkoutPlansInput = {
    id: string
    name: string
    description?: string | null
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedCreateNestedManyWithoutWorkoutPlansInput
  }

  export type WorkoutPlansCreateOrConnectWithoutExercises_WorkoutPlansInput = {
    where: WorkoutPlansWhereUniqueInput
    create: XOR<WorkoutPlansCreateWithoutExercises_WorkoutPlansInput, WorkoutPlansUncheckedCreateWithoutExercises_WorkoutPlansInput>
  }

  export type ExercisesUpsertWithoutExercises_WorkoutPlansInput = {
    update: XOR<ExercisesUpdateWithoutExercises_WorkoutPlansInput, ExercisesUncheckedUpdateWithoutExercises_WorkoutPlansInput>
    create: XOR<ExercisesCreateWithoutExercises_WorkoutPlansInput, ExercisesUncheckedCreateWithoutExercises_WorkoutPlansInput>
  }

  export type ExercisesUpdateWithoutExercises_WorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
    ExerciseProgresses?: ExerciseProgressesUpdateOneWithoutExercisesNestedInput
    Users_Exercises?: Users_ExercisesUpdateManyWithoutExercisesNestedInput
  }

  export type ExercisesUncheckedUpdateWithoutExercises_WorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
    ExerciseProgresses?: ExerciseProgressesUncheckedUpdateOneWithoutExercisesNestedInput
    Users_Exercises?: Users_ExercisesUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type WorkoutPlansUpsertWithoutExercises_WorkoutPlansInput = {
    update: XOR<WorkoutPlansUpdateWithoutExercises_WorkoutPlansInput, WorkoutPlansUncheckedUpdateWithoutExercises_WorkoutPlansInput>
    create: XOR<WorkoutPlansCreateWithoutExercises_WorkoutPlansInput, WorkoutPlansUncheckedCreateWithoutExercises_WorkoutPlansInput>
  }

  export type WorkoutPlansUpdateWithoutExercises_WorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Users_WorkoutPlans?: Users_WorkoutPlansUpdateManyWithoutWorkoutPlansNestedInput
  }

  export type WorkoutPlansUncheckedUpdateWithoutExercises_WorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedUpdateManyWithoutWorkoutPlansNestedInput
  }

  export type ExerciseProgressesCreateWithoutUsersInput = {
    date: Date | string
    prevRep?: number | null
    newRep?: number | null
    prevWeight?: number | null
    newWeight?: number | null
    prevDur?: number | null
    newDur?: number | null
    Exercises: ExercisesCreateNestedOneWithoutExerciseProgressesInput
  }

  export type ExerciseProgressesUncheckedCreateWithoutUsersInput = {
    date: Date | string
    prevRep?: number | null
    newRep?: number | null
    prevWeight?: number | null
    newWeight?: number | null
    prevDur?: number | null
    newDur?: number | null
  }

  export type ExerciseProgressesCreateOrConnectWithoutUsersInput = {
    where: ExerciseProgressesWhereUniqueInput
    create: XOR<ExerciseProgressesCreateWithoutUsersInput, ExerciseProgressesUncheckedCreateWithoutUsersInput>
  }

  export type Users_ExercisesCreateWithoutUsersInput = {
    Exercises: ExercisesCreateNestedOneWithoutUsers_ExercisesInput
  }

  export type Users_ExercisesUncheckedCreateWithoutUsersInput = {
    Exercises_id: string
  }

  export type Users_ExercisesCreateOrConnectWithoutUsersInput = {
    where: Users_ExercisesWhereUniqueInput
    create: XOR<Users_ExercisesCreateWithoutUsersInput, Users_ExercisesUncheckedCreateWithoutUsersInput>
  }

  export type Users_ExercisesCreateManyUsersInputEnvelope = {
    data: Enumerable<Users_ExercisesCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type Users_WorkoutPlansCreateWithoutUsersInput = {
    WorkoutPlans: WorkoutPlansCreateNestedOneWithoutUsers_WorkoutPlansInput
  }

  export type Users_WorkoutPlansUncheckedCreateWithoutUsersInput = {
    WorkoutPlans_id: string
  }

  export type Users_WorkoutPlansCreateOrConnectWithoutUsersInput = {
    where: Users_WorkoutPlansWhereUniqueInput
    create: XOR<Users_WorkoutPlansCreateWithoutUsersInput, Users_WorkoutPlansUncheckedCreateWithoutUsersInput>
  }

  export type Users_WorkoutPlansCreateManyUsersInputEnvelope = {
    data: Enumerable<Users_WorkoutPlansCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type ExerciseProgressesUpsertWithoutUsersInput = {
    update: XOR<ExerciseProgressesUpdateWithoutUsersInput, ExerciseProgressesUncheckedUpdateWithoutUsersInput>
    create: XOR<ExerciseProgressesCreateWithoutUsersInput, ExerciseProgressesUncheckedCreateWithoutUsersInput>
  }

  export type ExerciseProgressesUpdateWithoutUsersInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prevRep?: NullableIntFieldUpdateOperationsInput | number | null
    newRep?: NullableIntFieldUpdateOperationsInput | number | null
    prevWeight?: NullableIntFieldUpdateOperationsInput | number | null
    newWeight?: NullableIntFieldUpdateOperationsInput | number | null
    prevDur?: NullableFloatFieldUpdateOperationsInput | number | null
    newDur?: NullableFloatFieldUpdateOperationsInput | number | null
    Exercises?: ExercisesUpdateOneRequiredWithoutExerciseProgressesNestedInput
  }

  export type ExerciseProgressesUncheckedUpdateWithoutUsersInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prevRep?: NullableIntFieldUpdateOperationsInput | number | null
    newRep?: NullableIntFieldUpdateOperationsInput | number | null
    prevWeight?: NullableIntFieldUpdateOperationsInput | number | null
    newWeight?: NullableIntFieldUpdateOperationsInput | number | null
    prevDur?: NullableFloatFieldUpdateOperationsInput | number | null
    newDur?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type Users_ExercisesUpsertWithWhereUniqueWithoutUsersInput = {
    where: Users_ExercisesWhereUniqueInput
    update: XOR<Users_ExercisesUpdateWithoutUsersInput, Users_ExercisesUncheckedUpdateWithoutUsersInput>
    create: XOR<Users_ExercisesCreateWithoutUsersInput, Users_ExercisesUncheckedCreateWithoutUsersInput>
  }

  export type Users_ExercisesUpdateWithWhereUniqueWithoutUsersInput = {
    where: Users_ExercisesWhereUniqueInput
    data: XOR<Users_ExercisesUpdateWithoutUsersInput, Users_ExercisesUncheckedUpdateWithoutUsersInput>
  }

  export type Users_ExercisesUpdateManyWithWhereWithoutUsersInput = {
    where: Users_ExercisesScalarWhereInput
    data: XOR<Users_ExercisesUpdateManyMutationInput, Users_ExercisesUncheckedUpdateManyWithoutUsers_ExercisesInput>
  }

  export type Users_WorkoutPlansUpsertWithWhereUniqueWithoutUsersInput = {
    where: Users_WorkoutPlansWhereUniqueInput
    update: XOR<Users_WorkoutPlansUpdateWithoutUsersInput, Users_WorkoutPlansUncheckedUpdateWithoutUsersInput>
    create: XOR<Users_WorkoutPlansCreateWithoutUsersInput, Users_WorkoutPlansUncheckedCreateWithoutUsersInput>
  }

  export type Users_WorkoutPlansUpdateWithWhereUniqueWithoutUsersInput = {
    where: Users_WorkoutPlansWhereUniqueInput
    data: XOR<Users_WorkoutPlansUpdateWithoutUsersInput, Users_WorkoutPlansUncheckedUpdateWithoutUsersInput>
  }

  export type Users_WorkoutPlansUpdateManyWithWhereWithoutUsersInput = {
    where: Users_WorkoutPlansScalarWhereInput
    data: XOR<Users_WorkoutPlansUpdateManyMutationInput, Users_WorkoutPlansUncheckedUpdateManyWithoutUsers_WorkoutPlansInput>
  }

  export type Users_WorkoutPlansScalarWhereInput = {
    AND?: Enumerable<Users_WorkoutPlansScalarWhereInput>
    OR?: Enumerable<Users_WorkoutPlansScalarWhereInput>
    NOT?: Enumerable<Users_WorkoutPlansScalarWhereInput>
    Users_id?: UuidFilter | string
    WorkoutPlans_id?: UuidFilter | string
  }

  export type ExercisesCreateWithoutUsers_ExercisesInput = {
    id: string
    name?: string
    description?: string | null
    muscle_group?: MuscleGroup | null
    exercise_type?: ExerciseType
    ExerciseProgresses?: ExerciseProgressesCreateNestedOneWithoutExercisesInput
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansCreateNestedManyWithoutExercisesInput
  }

  export type ExercisesUncheckedCreateWithoutUsers_ExercisesInput = {
    id: string
    name?: string
    description?: string | null
    muscle_group?: MuscleGroup | null
    exercise_type?: ExerciseType
    ExerciseProgresses?: ExerciseProgressesUncheckedCreateNestedOneWithoutExercisesInput
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedCreateNestedManyWithoutExercisesInput
  }

  export type ExercisesCreateOrConnectWithoutUsers_ExercisesInput = {
    where: ExercisesWhereUniqueInput
    create: XOR<ExercisesCreateWithoutUsers_ExercisesInput, ExercisesUncheckedCreateWithoutUsers_ExercisesInput>
  }

  export type UsersCreateWithoutUsers_ExercisesInput = {
    id: string
    username: string
    email: string
    created_at?: Date | string | null
    profile_pic_uri?: string | null
    ExerciseProgresses?: ExerciseProgressesCreateNestedOneWithoutUsersInput
    Users_WorkoutPlans?: Users_WorkoutPlansCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUsers_ExercisesInput = {
    id: string
    username: string
    email: string
    created_at?: Date | string | null
    profile_pic_uri?: string | null
    ExerciseProgresses?: ExerciseProgressesUncheckedCreateNestedOneWithoutUsersInput
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutUsers_ExercisesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUsers_ExercisesInput, UsersUncheckedCreateWithoutUsers_ExercisesInput>
  }

  export type ExercisesUpsertWithoutUsers_ExercisesInput = {
    update: XOR<ExercisesUpdateWithoutUsers_ExercisesInput, ExercisesUncheckedUpdateWithoutUsers_ExercisesInput>
    create: XOR<ExercisesCreateWithoutUsers_ExercisesInput, ExercisesUncheckedCreateWithoutUsers_ExercisesInput>
  }

  export type ExercisesUpdateWithoutUsers_ExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
    ExerciseProgresses?: ExerciseProgressesUpdateOneWithoutExercisesNestedInput
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUpdateManyWithoutExercisesNestedInput
  }

  export type ExercisesUncheckedUpdateWithoutUsers_ExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    muscle_group?: NullableEnumMuscleGroupFieldUpdateOperationsInput | MuscleGroup | null
    exercise_type?: EnumExerciseTypeFieldUpdateOperationsInput | ExerciseType
    ExerciseProgresses?: ExerciseProgressesUncheckedUpdateOneWithoutExercisesNestedInput
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedUpdateManyWithoutExercisesNestedInput
  }

  export type UsersUpsertWithoutUsers_ExercisesInput = {
    update: XOR<UsersUpdateWithoutUsers_ExercisesInput, UsersUncheckedUpdateWithoutUsers_ExercisesInput>
    create: XOR<UsersCreateWithoutUsers_ExercisesInput, UsersUncheckedCreateWithoutUsers_ExercisesInput>
  }

  export type UsersUpdateWithoutUsers_ExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
    ExerciseProgresses?: ExerciseProgressesUpdateOneWithoutUsersNestedInput
    Users_WorkoutPlans?: Users_WorkoutPlansUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUsers_ExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
    ExerciseProgresses?: ExerciseProgressesUncheckedUpdateOneWithoutUsersNestedInput
    Users_WorkoutPlans?: Users_WorkoutPlansUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateWithoutUsers_WorkoutPlansInput = {
    id: string
    username: string
    email: string
    created_at?: Date | string | null
    profile_pic_uri?: string | null
    ExerciseProgresses?: ExerciseProgressesCreateNestedOneWithoutUsersInput
    Users_Exercises?: Users_ExercisesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutUsers_WorkoutPlansInput = {
    id: string
    username: string
    email: string
    created_at?: Date | string | null
    profile_pic_uri?: string | null
    ExerciseProgresses?: ExerciseProgressesUncheckedCreateNestedOneWithoutUsersInput
    Users_Exercises?: Users_ExercisesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutUsers_WorkoutPlansInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUsers_WorkoutPlansInput, UsersUncheckedCreateWithoutUsers_WorkoutPlansInput>
  }

  export type WorkoutPlansCreateWithoutUsers_WorkoutPlansInput = {
    id: string
    name: string
    description?: string | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansCreateNestedManyWithoutWorkoutPlansInput
  }

  export type WorkoutPlansUncheckedCreateWithoutUsers_WorkoutPlansInput = {
    id: string
    name: string
    description?: string | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedCreateNestedManyWithoutWorkoutPlansInput
  }

  export type WorkoutPlansCreateOrConnectWithoutUsers_WorkoutPlansInput = {
    where: WorkoutPlansWhereUniqueInput
    create: XOR<WorkoutPlansCreateWithoutUsers_WorkoutPlansInput, WorkoutPlansUncheckedCreateWithoutUsers_WorkoutPlansInput>
  }

  export type UsersUpsertWithoutUsers_WorkoutPlansInput = {
    update: XOR<UsersUpdateWithoutUsers_WorkoutPlansInput, UsersUncheckedUpdateWithoutUsers_WorkoutPlansInput>
    create: XOR<UsersCreateWithoutUsers_WorkoutPlansInput, UsersUncheckedCreateWithoutUsers_WorkoutPlansInput>
  }

  export type UsersUpdateWithoutUsers_WorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
    ExerciseProgresses?: ExerciseProgressesUpdateOneWithoutUsersNestedInput
    Users_Exercises?: Users_ExercisesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUsers_WorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile_pic_uri?: NullableStringFieldUpdateOperationsInput | string | null
    ExerciseProgresses?: ExerciseProgressesUncheckedUpdateOneWithoutUsersNestedInput
    Users_Exercises?: Users_ExercisesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type WorkoutPlansUpsertWithoutUsers_WorkoutPlansInput = {
    update: XOR<WorkoutPlansUpdateWithoutUsers_WorkoutPlansInput, WorkoutPlansUncheckedUpdateWithoutUsers_WorkoutPlansInput>
    create: XOR<WorkoutPlansCreateWithoutUsers_WorkoutPlansInput, WorkoutPlansUncheckedCreateWithoutUsers_WorkoutPlansInput>
  }

  export type WorkoutPlansUpdateWithoutUsers_WorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUpdateManyWithoutWorkoutPlansNestedInput
  }

  export type WorkoutPlansUncheckedUpdateWithoutUsers_WorkoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Exercises_WorkoutPlans?: Exercises_WorkoutPlansUncheckedUpdateManyWithoutWorkoutPlansNestedInput
  }

  export type Exercises_WorkoutPlansCreateWithoutWorkoutPlansInput = {
    Exercises: ExercisesCreateNestedOneWithoutExercises_WorkoutPlansInput
  }

  export type Exercises_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput = {
    Exercises_id: string
  }

  export type Exercises_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput = {
    where: Exercises_WorkoutPlansWhereUniqueInput
    create: XOR<Exercises_WorkoutPlansCreateWithoutWorkoutPlansInput, Exercises_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>
  }

  export type Exercises_WorkoutPlansCreateManyWorkoutPlansInputEnvelope = {
    data: Enumerable<Exercises_WorkoutPlansCreateManyWorkoutPlansInput>
    skipDuplicates?: boolean
  }

  export type Users_WorkoutPlansCreateWithoutWorkoutPlansInput = {
    Users: UsersCreateNestedOneWithoutUsers_WorkoutPlansInput
  }

  export type Users_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput = {
    Users_id: string
  }

  export type Users_WorkoutPlansCreateOrConnectWithoutWorkoutPlansInput = {
    where: Users_WorkoutPlansWhereUniqueInput
    create: XOR<Users_WorkoutPlansCreateWithoutWorkoutPlansInput, Users_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>
  }

  export type Users_WorkoutPlansCreateManyWorkoutPlansInputEnvelope = {
    data: Enumerable<Users_WorkoutPlansCreateManyWorkoutPlansInput>
    skipDuplicates?: boolean
  }

  export type Exercises_WorkoutPlansUpsertWithWhereUniqueWithoutWorkoutPlansInput = {
    where: Exercises_WorkoutPlansWhereUniqueInput
    update: XOR<Exercises_WorkoutPlansUpdateWithoutWorkoutPlansInput, Exercises_WorkoutPlansUncheckedUpdateWithoutWorkoutPlansInput>
    create: XOR<Exercises_WorkoutPlansCreateWithoutWorkoutPlansInput, Exercises_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>
  }

  export type Exercises_WorkoutPlansUpdateWithWhereUniqueWithoutWorkoutPlansInput = {
    where: Exercises_WorkoutPlansWhereUniqueInput
    data: XOR<Exercises_WorkoutPlansUpdateWithoutWorkoutPlansInput, Exercises_WorkoutPlansUncheckedUpdateWithoutWorkoutPlansInput>
  }

  export type Exercises_WorkoutPlansUpdateManyWithWhereWithoutWorkoutPlansInput = {
    where: Exercises_WorkoutPlansScalarWhereInput
    data: XOR<Exercises_WorkoutPlansUpdateManyMutationInput, Exercises_WorkoutPlansUncheckedUpdateManyWithoutExercises_WorkoutPlansInput>
  }

  export type Users_WorkoutPlansUpsertWithWhereUniqueWithoutWorkoutPlansInput = {
    where: Users_WorkoutPlansWhereUniqueInput
    update: XOR<Users_WorkoutPlansUpdateWithoutWorkoutPlansInput, Users_WorkoutPlansUncheckedUpdateWithoutWorkoutPlansInput>
    create: XOR<Users_WorkoutPlansCreateWithoutWorkoutPlansInput, Users_WorkoutPlansUncheckedCreateWithoutWorkoutPlansInput>
  }

  export type Users_WorkoutPlansUpdateWithWhereUniqueWithoutWorkoutPlansInput = {
    where: Users_WorkoutPlansWhereUniqueInput
    data: XOR<Users_WorkoutPlansUpdateWithoutWorkoutPlansInput, Users_WorkoutPlansUncheckedUpdateWithoutWorkoutPlansInput>
  }

  export type Users_WorkoutPlansUpdateManyWithWhereWithoutWorkoutPlansInput = {
    where: Users_WorkoutPlansScalarWhereInput
    data: XOR<Users_WorkoutPlansUpdateManyMutationInput, Users_WorkoutPlansUncheckedUpdateManyWithoutUsers_WorkoutPlansInput>
  }

  export type Exercises_WorkoutPlansCreateManyExercisesInput = {
    WorkoutPlans_id: string
  }

  export type Users_ExercisesCreateManyExercisesInput = {
    Users_id: string
  }

  export type Exercises_WorkoutPlansUpdateWithoutExercisesInput = {
    WorkoutPlans?: WorkoutPlansUpdateOneRequiredWithoutExercises_WorkoutPlansNestedInput
  }

  export type Exercises_WorkoutPlansUncheckedUpdateWithoutExercisesInput = {
    WorkoutPlans_id?: StringFieldUpdateOperationsInput | string
  }

  export type Exercises_WorkoutPlansUncheckedUpdateManyWithoutExercises_WorkoutPlansInput = {
    WorkoutPlans_id?: StringFieldUpdateOperationsInput | string
  }

  export type Users_ExercisesUpdateWithoutExercisesInput = {
    Users?: UsersUpdateOneRequiredWithoutUsers_ExercisesNestedInput
  }

  export type Users_ExercisesUncheckedUpdateWithoutExercisesInput = {
    Users_id?: StringFieldUpdateOperationsInput | string
  }

  export type Users_ExercisesUncheckedUpdateManyWithoutUsers_ExercisesInput = {
    Users_id?: StringFieldUpdateOperationsInput | string
  }

  export type Users_ExercisesCreateManyUsersInput = {
    Exercises_id: string
  }

  export type Users_WorkoutPlansCreateManyUsersInput = {
    WorkoutPlans_id: string
  }

  export type Users_ExercisesUpdateWithoutUsersInput = {
    Exercises?: ExercisesUpdateOneRequiredWithoutUsers_ExercisesNestedInput
  }

  export type Users_ExercisesUncheckedUpdateWithoutUsersInput = {
    Exercises_id?: StringFieldUpdateOperationsInput | string
  }

  export type Users_WorkoutPlansUpdateWithoutUsersInput = {
    WorkoutPlans?: WorkoutPlansUpdateOneRequiredWithoutUsers_WorkoutPlansNestedInput
  }

  export type Users_WorkoutPlansUncheckedUpdateWithoutUsersInput = {
    WorkoutPlans_id?: StringFieldUpdateOperationsInput | string
  }

  export type Users_WorkoutPlansUncheckedUpdateManyWithoutUsers_WorkoutPlansInput = {
    WorkoutPlans_id?: StringFieldUpdateOperationsInput | string
  }

  export type Exercises_WorkoutPlansCreateManyWorkoutPlansInput = {
    Exercises_id: string
  }

  export type Users_WorkoutPlansCreateManyWorkoutPlansInput = {
    Users_id: string
  }

  export type Exercises_WorkoutPlansUpdateWithoutWorkoutPlansInput = {
    Exercises?: ExercisesUpdateOneRequiredWithoutExercises_WorkoutPlansNestedInput
  }

  export type Exercises_WorkoutPlansUncheckedUpdateWithoutWorkoutPlansInput = {
    Exercises_id?: StringFieldUpdateOperationsInput | string
  }

  export type Users_WorkoutPlansUpdateWithoutWorkoutPlansInput = {
    Users?: UsersUpdateOneRequiredWithoutUsers_WorkoutPlansNestedInput
  }

  export type Users_WorkoutPlansUncheckedUpdateWithoutWorkoutPlansInput = {
    Users_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}