
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Genero
 * 
 */
export type Genero = $Result.DefaultSelection<Prisma.$GeneroPayload>
/**
 * Model UsuarioGenero
 * 
 */
export type UsuarioGenero = $Result.DefaultSelection<Prisma.$UsuarioGeneroPayload>
/**
 * Model Reseña
 * 
 */
export type Reseña = $Result.DefaultSelection<Prisma.$ReseñaPayload>
/**
 * Model TestMusical
 * 
 */
export type TestMusical = $Result.DefaultSelection<Prisma.$TestMusicalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **Genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.GeneroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioGenero`: Exposes CRUD operations for the **UsuarioGenero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioGeneros
    * const usuarioGeneros = await prisma.usuarioGenero.findMany()
    * ```
    */
  get usuarioGenero(): Prisma.UsuarioGeneroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reseña`: Exposes CRUD operations for the **Reseña** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reseñas
    * const reseñas = await prisma.reseña.findMany()
    * ```
    */
  get reseña(): Prisma.ReseñaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testMusical`: Exposes CRUD operations for the **TestMusical** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestMusicals
    * const testMusicals = await prisma.testMusical.findMany()
    * ```
    */
  get testMusical(): Prisma.TestMusicalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Genero: 'Genero',
    UsuarioGenero: 'UsuarioGenero',
    Reseña: 'Reseña',
    TestMusical: 'TestMusical'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "genero" | "usuarioGenero" | "reseña" | "testMusical"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Genero: {
        payload: Prisma.$GeneroPayload<ExtArgs>
        fields: Prisma.GeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findFirst: {
            args: Prisma.GeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findMany: {
            args: Prisma.GeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          create: {
            args: Prisma.GeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          createMany: {
            args: Prisma.GeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          delete: {
            args: Prisma.GeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          update: {
            args: Prisma.GeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          deleteMany: {
            args: Prisma.GeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          upsert: {
            args: Prisma.GeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.GeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
          }
        }
      }
      UsuarioGenero: {
        payload: Prisma.$UsuarioGeneroPayload<ExtArgs>
        fields: Prisma.UsuarioGeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioGeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioGeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload>
          }
          findFirst: {
            args: Prisma.UsuarioGeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioGeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload>
          }
          findMany: {
            args: Prisma.UsuarioGeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload>[]
          }
          create: {
            args: Prisma.UsuarioGeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload>
          }
          createMany: {
            args: Prisma.UsuarioGeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioGeneroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload>[]
          }
          delete: {
            args: Prisma.UsuarioGeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload>
          }
          update: {
            args: Prisma.UsuarioGeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioGeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioGeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioGeneroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioGeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioGeneroPayload>
          }
          aggregate: {
            args: Prisma.UsuarioGeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioGenero>
          }
          groupBy: {
            args: Prisma.UsuarioGeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioGeneroCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGeneroCountAggregateOutputType> | number
          }
        }
      }
      Reseña: {
        payload: Prisma.$ReseñaPayload<ExtArgs>
        fields: Prisma.ReseñaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReseñaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReseñaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          findFirst: {
            args: Prisma.ReseñaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReseñaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          findMany: {
            args: Prisma.ReseñaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>[]
          }
          create: {
            args: Prisma.ReseñaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          createMany: {
            args: Prisma.ReseñaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReseñaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>[]
          }
          delete: {
            args: Prisma.ReseñaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          update: {
            args: Prisma.ReseñaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          deleteMany: {
            args: Prisma.ReseñaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReseñaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReseñaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>[]
          }
          upsert: {
            args: Prisma.ReseñaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReseñaPayload>
          }
          aggregate: {
            args: Prisma.ReseñaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReseña>
          }
          groupBy: {
            args: Prisma.ReseñaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReseñaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReseñaCountArgs<ExtArgs>
            result: $Utils.Optional<ReseñaCountAggregateOutputType> | number
          }
        }
      }
      TestMusical: {
        payload: Prisma.$TestMusicalPayload<ExtArgs>
        fields: Prisma.TestMusicalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestMusicalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestMusicalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload>
          }
          findFirst: {
            args: Prisma.TestMusicalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestMusicalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload>
          }
          findMany: {
            args: Prisma.TestMusicalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload>[]
          }
          create: {
            args: Prisma.TestMusicalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload>
          }
          createMany: {
            args: Prisma.TestMusicalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestMusicalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload>[]
          }
          delete: {
            args: Prisma.TestMusicalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload>
          }
          update: {
            args: Prisma.TestMusicalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload>
          }
          deleteMany: {
            args: Prisma.TestMusicalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestMusicalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestMusicalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload>[]
          }
          upsert: {
            args: Prisma.TestMusicalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestMusicalPayload>
          }
          aggregate: {
            args: Prisma.TestMusicalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestMusical>
          }
          groupBy: {
            args: Prisma.TestMusicalGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestMusicalGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestMusicalCountArgs<ExtArgs>
            result: $Utils.Optional<TestMusicalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    genero?: GeneroOmit
    usuarioGenero?: UsuarioGeneroOmit
    reseña?: ReseñaOmit
    testMusical?: TestMusicalOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    generos: number
    reseñas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | UsuarioCountOutputTypeCountGenerosArgs
    reseñas?: boolean | UsuarioCountOutputTypeCountReseñasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountGenerosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioGeneroWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReseñaWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    usuarios: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | GeneroCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioGeneroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    correo: string | null
    nombreUsuario: string | null
    contraseña: string | null
    nombre: string | null
    imagenPerfil: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    correo: string | null
    nombreUsuario: string | null
    contraseña: string | null
    nombre: string | null
    imagenPerfil: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    correo: number
    nombreUsuario: number
    contraseña: number
    nombre: number
    imagenPerfil: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    correo?: true
    nombreUsuario?: true
    contraseña?: true
    nombre?: true
    imagenPerfil?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    correo?: true
    nombreUsuario?: true
    contraseña?: true
    nombre?: true
    imagenPerfil?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    correo?: true
    nombreUsuario?: true
    contraseña?: true
    nombre?: true
    imagenPerfil?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre: string | null
    imagenPerfil: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    nombreUsuario?: boolean
    contraseña?: boolean
    nombre?: boolean
    imagenPerfil?: boolean
    generos?: boolean | Usuario$generosArgs<ExtArgs>
    reseñas?: boolean | Usuario$reseñasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    nombreUsuario?: boolean
    contraseña?: boolean
    nombre?: boolean
    imagenPerfil?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    correo?: boolean
    nombreUsuario?: boolean
    contraseña?: boolean
    nombre?: boolean
    imagenPerfil?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    correo?: boolean
    nombreUsuario?: boolean
    contraseña?: boolean
    nombre?: boolean
    imagenPerfil?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "correo" | "nombreUsuario" | "contraseña" | "nombre" | "imagenPerfil", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | Usuario$generosArgs<ExtArgs>
    reseñas?: boolean | Usuario$reseñasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      generos: Prisma.$UsuarioGeneroPayload<ExtArgs>[]
      reseñas: Prisma.$ReseñaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      correo: string
      nombreUsuario: string
      contraseña: string
      nombre: string | null
      imagenPerfil: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generos<T extends Usuario$generosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$generosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reseñas<T extends Usuario$reseñasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reseñasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly nombreUsuario: FieldRef<"Usuario", 'String'>
    readonly contraseña: FieldRef<"Usuario", 'String'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly imagenPerfil: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.generos
   */
  export type Usuario$generosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    where?: UsuarioGeneroWhereInput
    orderBy?: UsuarioGeneroOrderByWithRelationInput | UsuarioGeneroOrderByWithRelationInput[]
    cursor?: UsuarioGeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioGeneroScalarFieldEnum | UsuarioGeneroScalarFieldEnum[]
  }

  /**
   * Usuario.reseñas
   */
  export type Usuario$reseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    where?: ReseñaWhereInput
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    cursor?: ReseñaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReseñaScalarFieldEnum | ReseñaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    id: number | null
  }

  export type GeneroSumAggregateOutputType = {
    id: number | null
  }

  export type GeneroMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type GeneroMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type GeneroCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    id?: true
  }

  export type GeneroSumAggregateInputType = {
    id?: true
  }

  export type GeneroMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type GeneroMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type GeneroCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genero to aggregate.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type GeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithAggregationInput | GeneroOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: GeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    id: number
    nombre: string
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends GeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type GeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarios?: boolean | Genero$usuariosArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>

  export type GeneroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["genero"]>

  export type GeneroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["genero"]>

  export type GeneroSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type GeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["genero"]>
  export type GeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Genero$usuariosArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GeneroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GeneroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genero"
    objects: {
      usuarios: Prisma.$UsuarioGeneroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type GeneroGetPayload<S extends boolean | null | undefined | GeneroDefaultArgs> = $Result.GetResult<Prisma.$GeneroPayload, S>

  type GeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface GeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genero'], meta: { name: 'Genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {GeneroFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroFindUniqueArgs>(args: SelectSubset<T, GeneroFindUniqueArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroFindFirstArgs>(args?: SelectSubset<T, GeneroFindFirstArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generoWithIdOnly = await prisma.genero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneroFindManyArgs>(args?: SelectSubset<T, GeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {GeneroCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends GeneroCreateArgs>(args: SelectSubset<T, GeneroCreateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {GeneroCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroCreateManyArgs>(args?: SelectSubset<T, GeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generos and returns the data saved in the database.
     * @param {GeneroCreateManyAndReturnArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generos and only return the `id`
     * const generoWithIdOnly = await prisma.genero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneroCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genero.
     * @param {GeneroDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends GeneroDeleteArgs>(args: SelectSubset<T, GeneroDeleteArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {GeneroUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroUpdateArgs>(args: SelectSubset<T, GeneroUpdateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {GeneroDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroDeleteManyArgs>(args?: SelectSubset<T, GeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroUpdateManyArgs>(args: SelectSubset<T, GeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos and returns the data updated in the database.
     * @param {GeneroUpdateManyAndReturnArgs} args - Arguments to update many Generos.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generos and only return the `id`
     * const generoWithIdOnly = await prisma.genero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GeneroUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genero.
     * @param {GeneroUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends GeneroUpsertArgs>(args: SelectSubset<T, GeneroUpsertArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends GeneroCountArgs>(
      args?: Subset<T, GeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroGroupByArgs} args - Group by arguments.
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
      T extends GeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroGroupByArgs['orderBy'] }
        : { orderBy?: GeneroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genero model
   */
  readonly fields: GeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Genero$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Genero$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genero model
   */
  interface GeneroFieldRefs {
    readonly id: FieldRef<"Genero", 'Int'>
    readonly nombre: FieldRef<"Genero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genero findUnique
   */
  export type GeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findUniqueOrThrow
   */
  export type GeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findFirst
   */
  export type GeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findFirstOrThrow
   */
  export type GeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findMany
   */
  export type GeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Generos to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero create
   */
  export type GeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a Genero.
     */
    data: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
  }

  /**
   * Genero createMany
   */
  export type GeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero createManyAndReturn
   */
  export type GeneroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero update
   */
  export type GeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a Genero.
     */
    data: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
    /**
     * Choose, which Genero to update.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero updateMany
   */
  export type GeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero updateManyAndReturn
   */
  export type GeneroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero upsert
   */
  export type GeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the Genero to update in case it exists.
     */
    where: GeneroWhereUniqueInput
    /**
     * In case the Genero found by the `where` argument doesn't exist, create a new Genero with this data.
     */
    create: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
    /**
     * In case the Genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
  }

  /**
   * Genero delete
   */
  export type GeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter which Genero to delete.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero deleteMany
   */
  export type GeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generos to delete
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to delete.
     */
    limit?: number
  }

  /**
   * Genero.usuarios
   */
  export type Genero$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    where?: UsuarioGeneroWhereInput
    orderBy?: UsuarioGeneroOrderByWithRelationInput | UsuarioGeneroOrderByWithRelationInput[]
    cursor?: UsuarioGeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioGeneroScalarFieldEnum | UsuarioGeneroScalarFieldEnum[]
  }

  /**
   * Genero without action
   */
  export type GeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioGenero
   */

  export type AggregateUsuarioGenero = {
    _count: UsuarioGeneroCountAggregateOutputType | null
    _avg: UsuarioGeneroAvgAggregateOutputType | null
    _sum: UsuarioGeneroSumAggregateOutputType | null
    _min: UsuarioGeneroMinAggregateOutputType | null
    _max: UsuarioGeneroMaxAggregateOutputType | null
  }

  export type UsuarioGeneroAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    generoId: number | null
  }

  export type UsuarioGeneroSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    generoId: number | null
  }

  export type UsuarioGeneroMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    generoId: number | null
    tipo: string | null
  }

  export type UsuarioGeneroMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    generoId: number | null
    tipo: string | null
  }

  export type UsuarioGeneroCountAggregateOutputType = {
    id: number
    usuarioId: number
    generoId: number
    tipo: number
    _all: number
  }


  export type UsuarioGeneroAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    generoId?: true
  }

  export type UsuarioGeneroSumAggregateInputType = {
    id?: true
    usuarioId?: true
    generoId?: true
  }

  export type UsuarioGeneroMinAggregateInputType = {
    id?: true
    usuarioId?: true
    generoId?: true
    tipo?: true
  }

  export type UsuarioGeneroMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    generoId?: true
    tipo?: true
  }

  export type UsuarioGeneroCountAggregateInputType = {
    id?: true
    usuarioId?: true
    generoId?: true
    tipo?: true
    _all?: true
  }

  export type UsuarioGeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioGenero to aggregate.
     */
    where?: UsuarioGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioGeneros to fetch.
     */
    orderBy?: UsuarioGeneroOrderByWithRelationInput | UsuarioGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioGeneros
    **/
    _count?: true | UsuarioGeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioGeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioGeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioGeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioGeneroMaxAggregateInputType
  }

  export type GetUsuarioGeneroAggregateType<T extends UsuarioGeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioGenero[P]>
      : GetScalarType<T[P], AggregateUsuarioGenero[P]>
  }




  export type UsuarioGeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioGeneroWhereInput
    orderBy?: UsuarioGeneroOrderByWithAggregationInput | UsuarioGeneroOrderByWithAggregationInput[]
    by: UsuarioGeneroScalarFieldEnum[] | UsuarioGeneroScalarFieldEnum
    having?: UsuarioGeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioGeneroCountAggregateInputType | true
    _avg?: UsuarioGeneroAvgAggregateInputType
    _sum?: UsuarioGeneroSumAggregateInputType
    _min?: UsuarioGeneroMinAggregateInputType
    _max?: UsuarioGeneroMaxAggregateInputType
  }

  export type UsuarioGeneroGroupByOutputType = {
    id: number
    usuarioId: number
    generoId: number
    tipo: string
    _count: UsuarioGeneroCountAggregateOutputType | null
    _avg: UsuarioGeneroAvgAggregateOutputType | null
    _sum: UsuarioGeneroSumAggregateOutputType | null
    _min: UsuarioGeneroMinAggregateOutputType | null
    _max: UsuarioGeneroMaxAggregateOutputType | null
  }

  type GetUsuarioGeneroGroupByPayload<T extends UsuarioGeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGeneroGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGeneroGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioGeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    generoId?: boolean
    tipo?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioGenero"]>

  export type UsuarioGeneroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    generoId?: boolean
    tipo?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioGenero"]>

  export type UsuarioGeneroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    generoId?: boolean
    tipo?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioGenero"]>

  export type UsuarioGeneroSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    generoId?: boolean
    tipo?: boolean
  }

  export type UsuarioGeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "generoId" | "tipo", ExtArgs["result"]["usuarioGenero"]>
  export type UsuarioGeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }
  export type UsuarioGeneroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }
  export type UsuarioGeneroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }

  export type $UsuarioGeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioGenero"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      genero: Prisma.$GeneroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      generoId: number
      tipo: string
    }, ExtArgs["result"]["usuarioGenero"]>
    composites: {}
  }

  type UsuarioGeneroGetPayload<S extends boolean | null | undefined | UsuarioGeneroDefaultArgs> = $Result.GetResult<Prisma.$UsuarioGeneroPayload, S>

  type UsuarioGeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioGeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioGeneroCountAggregateInputType | true
    }

  export interface UsuarioGeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioGenero'], meta: { name: 'UsuarioGenero' } }
    /**
     * Find zero or one UsuarioGenero that matches the filter.
     * @param {UsuarioGeneroFindUniqueArgs} args - Arguments to find a UsuarioGenero
     * @example
     * // Get one UsuarioGenero
     * const usuarioGenero = await prisma.usuarioGenero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioGeneroFindUniqueArgs>(args: SelectSubset<T, UsuarioGeneroFindUniqueArgs<ExtArgs>>): Prisma__UsuarioGeneroClient<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioGenero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioGeneroFindUniqueOrThrowArgs} args - Arguments to find a UsuarioGenero
     * @example
     * // Get one UsuarioGenero
     * const usuarioGenero = await prisma.usuarioGenero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioGeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioGeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioGeneroClient<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioGenero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGeneroFindFirstArgs} args - Arguments to find a UsuarioGenero
     * @example
     * // Get one UsuarioGenero
     * const usuarioGenero = await prisma.usuarioGenero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioGeneroFindFirstArgs>(args?: SelectSubset<T, UsuarioGeneroFindFirstArgs<ExtArgs>>): Prisma__UsuarioGeneroClient<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioGenero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGeneroFindFirstOrThrowArgs} args - Arguments to find a UsuarioGenero
     * @example
     * // Get one UsuarioGenero
     * const usuarioGenero = await prisma.usuarioGenero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioGeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioGeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioGeneroClient<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioGeneros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioGeneros
     * const usuarioGeneros = await prisma.usuarioGenero.findMany()
     * 
     * // Get first 10 UsuarioGeneros
     * const usuarioGeneros = await prisma.usuarioGenero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioGeneroWithIdOnly = await prisma.usuarioGenero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioGeneroFindManyArgs>(args?: SelectSubset<T, UsuarioGeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioGenero.
     * @param {UsuarioGeneroCreateArgs} args - Arguments to create a UsuarioGenero.
     * @example
     * // Create one UsuarioGenero
     * const UsuarioGenero = await prisma.usuarioGenero.create({
     *   data: {
     *     // ... data to create a UsuarioGenero
     *   }
     * })
     * 
     */
    create<T extends UsuarioGeneroCreateArgs>(args: SelectSubset<T, UsuarioGeneroCreateArgs<ExtArgs>>): Prisma__UsuarioGeneroClient<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioGeneros.
     * @param {UsuarioGeneroCreateManyArgs} args - Arguments to create many UsuarioGeneros.
     * @example
     * // Create many UsuarioGeneros
     * const usuarioGenero = await prisma.usuarioGenero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioGeneroCreateManyArgs>(args?: SelectSubset<T, UsuarioGeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioGeneros and returns the data saved in the database.
     * @param {UsuarioGeneroCreateManyAndReturnArgs} args - Arguments to create many UsuarioGeneros.
     * @example
     * // Create many UsuarioGeneros
     * const usuarioGenero = await prisma.usuarioGenero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioGeneros and only return the `id`
     * const usuarioGeneroWithIdOnly = await prisma.usuarioGenero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioGeneroCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioGeneroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioGenero.
     * @param {UsuarioGeneroDeleteArgs} args - Arguments to delete one UsuarioGenero.
     * @example
     * // Delete one UsuarioGenero
     * const UsuarioGenero = await prisma.usuarioGenero.delete({
     *   where: {
     *     // ... filter to delete one UsuarioGenero
     *   }
     * })
     * 
     */
    delete<T extends UsuarioGeneroDeleteArgs>(args: SelectSubset<T, UsuarioGeneroDeleteArgs<ExtArgs>>): Prisma__UsuarioGeneroClient<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioGenero.
     * @param {UsuarioGeneroUpdateArgs} args - Arguments to update one UsuarioGenero.
     * @example
     * // Update one UsuarioGenero
     * const usuarioGenero = await prisma.usuarioGenero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioGeneroUpdateArgs>(args: SelectSubset<T, UsuarioGeneroUpdateArgs<ExtArgs>>): Prisma__UsuarioGeneroClient<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioGeneros.
     * @param {UsuarioGeneroDeleteManyArgs} args - Arguments to filter UsuarioGeneros to delete.
     * @example
     * // Delete a few UsuarioGeneros
     * const { count } = await prisma.usuarioGenero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioGeneroDeleteManyArgs>(args?: SelectSubset<T, UsuarioGeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioGeneros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioGeneros
     * const usuarioGenero = await prisma.usuarioGenero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioGeneroUpdateManyArgs>(args: SelectSubset<T, UsuarioGeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioGeneros and returns the data updated in the database.
     * @param {UsuarioGeneroUpdateManyAndReturnArgs} args - Arguments to update many UsuarioGeneros.
     * @example
     * // Update many UsuarioGeneros
     * const usuarioGenero = await prisma.usuarioGenero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioGeneros and only return the `id`
     * const usuarioGeneroWithIdOnly = await prisma.usuarioGenero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioGeneroUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioGeneroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioGenero.
     * @param {UsuarioGeneroUpsertArgs} args - Arguments to update or create a UsuarioGenero.
     * @example
     * // Update or create a UsuarioGenero
     * const usuarioGenero = await prisma.usuarioGenero.upsert({
     *   create: {
     *     // ... data to create a UsuarioGenero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioGenero we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioGeneroUpsertArgs>(args: SelectSubset<T, UsuarioGeneroUpsertArgs<ExtArgs>>): Prisma__UsuarioGeneroClient<$Result.GetResult<Prisma.$UsuarioGeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioGeneros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGeneroCountArgs} args - Arguments to filter UsuarioGeneros to count.
     * @example
     * // Count the number of UsuarioGeneros
     * const count = await prisma.usuarioGenero.count({
     *   where: {
     *     // ... the filter for the UsuarioGeneros we want to count
     *   }
     * })
    **/
    count<T extends UsuarioGeneroCountArgs>(
      args?: Subset<T, UsuarioGeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioGeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioGenero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioGeneroAggregateArgs>(args: Subset<T, UsuarioGeneroAggregateArgs>): Prisma.PrismaPromise<GetUsuarioGeneroAggregateType<T>>

    /**
     * Group by UsuarioGenero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGeneroGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGeneroGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGeneroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsuarioGeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioGenero model
   */
  readonly fields: UsuarioGeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioGenero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioGeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genero<T extends GeneroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneroDefaultArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuarioGenero model
   */
  interface UsuarioGeneroFieldRefs {
    readonly id: FieldRef<"UsuarioGenero", 'Int'>
    readonly usuarioId: FieldRef<"UsuarioGenero", 'Int'>
    readonly generoId: FieldRef<"UsuarioGenero", 'Int'>
    readonly tipo: FieldRef<"UsuarioGenero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioGenero findUnique
   */
  export type UsuarioGeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioGenero to fetch.
     */
    where: UsuarioGeneroWhereUniqueInput
  }

  /**
   * UsuarioGenero findUniqueOrThrow
   */
  export type UsuarioGeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioGenero to fetch.
     */
    where: UsuarioGeneroWhereUniqueInput
  }

  /**
   * UsuarioGenero findFirst
   */
  export type UsuarioGeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioGenero to fetch.
     */
    where?: UsuarioGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioGeneros to fetch.
     */
    orderBy?: UsuarioGeneroOrderByWithRelationInput | UsuarioGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioGeneros.
     */
    cursor?: UsuarioGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioGeneros.
     */
    distinct?: UsuarioGeneroScalarFieldEnum | UsuarioGeneroScalarFieldEnum[]
  }

  /**
   * UsuarioGenero findFirstOrThrow
   */
  export type UsuarioGeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioGenero to fetch.
     */
    where?: UsuarioGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioGeneros to fetch.
     */
    orderBy?: UsuarioGeneroOrderByWithRelationInput | UsuarioGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioGeneros.
     */
    cursor?: UsuarioGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioGeneros.
     */
    distinct?: UsuarioGeneroScalarFieldEnum | UsuarioGeneroScalarFieldEnum[]
  }

  /**
   * UsuarioGenero findMany
   */
  export type UsuarioGeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioGeneros to fetch.
     */
    where?: UsuarioGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioGeneros to fetch.
     */
    orderBy?: UsuarioGeneroOrderByWithRelationInput | UsuarioGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioGeneros.
     */
    cursor?: UsuarioGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioGeneros.
     */
    skip?: number
    distinct?: UsuarioGeneroScalarFieldEnum | UsuarioGeneroScalarFieldEnum[]
  }

  /**
   * UsuarioGenero create
   */
  export type UsuarioGeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioGenero.
     */
    data: XOR<UsuarioGeneroCreateInput, UsuarioGeneroUncheckedCreateInput>
  }

  /**
   * UsuarioGenero createMany
   */
  export type UsuarioGeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioGeneros.
     */
    data: UsuarioGeneroCreateManyInput | UsuarioGeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioGenero createManyAndReturn
   */
  export type UsuarioGeneroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioGeneros.
     */
    data: UsuarioGeneroCreateManyInput | UsuarioGeneroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioGenero update
   */
  export type UsuarioGeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioGenero.
     */
    data: XOR<UsuarioGeneroUpdateInput, UsuarioGeneroUncheckedUpdateInput>
    /**
     * Choose, which UsuarioGenero to update.
     */
    where: UsuarioGeneroWhereUniqueInput
  }

  /**
   * UsuarioGenero updateMany
   */
  export type UsuarioGeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioGeneros.
     */
    data: XOR<UsuarioGeneroUpdateManyMutationInput, UsuarioGeneroUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioGeneros to update
     */
    where?: UsuarioGeneroWhereInput
    /**
     * Limit how many UsuarioGeneros to update.
     */
    limit?: number
  }

  /**
   * UsuarioGenero updateManyAndReturn
   */
  export type UsuarioGeneroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioGeneros.
     */
    data: XOR<UsuarioGeneroUpdateManyMutationInput, UsuarioGeneroUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioGeneros to update
     */
    where?: UsuarioGeneroWhereInput
    /**
     * Limit how many UsuarioGeneros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioGenero upsert
   */
  export type UsuarioGeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioGenero to update in case it exists.
     */
    where: UsuarioGeneroWhereUniqueInput
    /**
     * In case the UsuarioGenero found by the `where` argument doesn't exist, create a new UsuarioGenero with this data.
     */
    create: XOR<UsuarioGeneroCreateInput, UsuarioGeneroUncheckedCreateInput>
    /**
     * In case the UsuarioGenero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioGeneroUpdateInput, UsuarioGeneroUncheckedUpdateInput>
  }

  /**
   * UsuarioGenero delete
   */
  export type UsuarioGeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
    /**
     * Filter which UsuarioGenero to delete.
     */
    where: UsuarioGeneroWhereUniqueInput
  }

  /**
   * UsuarioGenero deleteMany
   */
  export type UsuarioGeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioGeneros to delete
     */
    where?: UsuarioGeneroWhereInput
    /**
     * Limit how many UsuarioGeneros to delete.
     */
    limit?: number
  }

  /**
   * UsuarioGenero without action
   */
  export type UsuarioGeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioGenero
     */
    select?: UsuarioGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioGenero
     */
    omit?: UsuarioGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioGeneroInclude<ExtArgs> | null
  }


  /**
   * Model Reseña
   */

  export type AggregateReseña = {
    _count: ReseñaCountAggregateOutputType | null
    _avg: ReseñaAvgAggregateOutputType | null
    _sum: ReseñaSumAggregateOutputType | null
    _min: ReseñaMinAggregateOutputType | null
    _max: ReseñaMaxAggregateOutputType | null
  }

  export type ReseñaAvgAggregateOutputType = {
    estrellas: number | null
    userId: number | null
  }

  export type ReseñaSumAggregateOutputType = {
    estrellas: number | null
    userId: number | null
  }

  export type ReseñaMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    contenido: string | null
    estrellas: number | null
    name: string | null
    artist: string | null
    album: string | null
    genre: string | null
    coverUrl: string | null
    tipo: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReseñaMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    contenido: string | null
    estrellas: number | null
    name: string | null
    artist: string | null
    album: string | null
    genre: string | null
    coverUrl: string | null
    tipo: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReseñaCountAggregateOutputType = {
    id: number
    titulo: number
    contenido: number
    estrellas: number
    name: number
    artist: number
    album: number
    genre: number
    coverUrl: number
    tipo: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReseñaAvgAggregateInputType = {
    estrellas?: true
    userId?: true
  }

  export type ReseñaSumAggregateInputType = {
    estrellas?: true
    userId?: true
  }

  export type ReseñaMinAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    estrellas?: true
    name?: true
    artist?: true
    album?: true
    genre?: true
    coverUrl?: true
    tipo?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReseñaMaxAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    estrellas?: true
    name?: true
    artist?: true
    album?: true
    genre?: true
    coverUrl?: true
    tipo?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReseñaCountAggregateInputType = {
    id?: true
    titulo?: true
    contenido?: true
    estrellas?: true
    name?: true
    artist?: true
    album?: true
    genre?: true
    coverUrl?: true
    tipo?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReseñaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reseña to aggregate.
     */
    where?: ReseñaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseñas to fetch.
     */
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReseñaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseñas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseñas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reseñas
    **/
    _count?: true | ReseñaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReseñaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReseñaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReseñaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReseñaMaxAggregateInputType
  }

  export type GetReseñaAggregateType<T extends ReseñaAggregateArgs> = {
        [P in keyof T & keyof AggregateReseña]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReseña[P]>
      : GetScalarType<T[P], AggregateReseña[P]>
  }




  export type ReseñaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReseñaWhereInput
    orderBy?: ReseñaOrderByWithAggregationInput | ReseñaOrderByWithAggregationInput[]
    by: ReseñaScalarFieldEnum[] | ReseñaScalarFieldEnum
    having?: ReseñaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReseñaCountAggregateInputType | true
    _avg?: ReseñaAvgAggregateInputType
    _sum?: ReseñaSumAggregateInputType
    _min?: ReseñaMinAggregateInputType
    _max?: ReseñaMaxAggregateInputType
  }

  export type ReseñaGroupByOutputType = {
    id: string
    titulo: string
    contenido: string
    estrellas: number
    name: string
    artist: string
    album: string | null
    genre: string | null
    coverUrl: string | null
    tipo: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: ReseñaCountAggregateOutputType | null
    _avg: ReseñaAvgAggregateOutputType | null
    _sum: ReseñaSumAggregateOutputType | null
    _min: ReseñaMinAggregateOutputType | null
    _max: ReseñaMaxAggregateOutputType | null
  }

  type GetReseñaGroupByPayload<T extends ReseñaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReseñaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReseñaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReseñaGroupByOutputType[P]>
            : GetScalarType<T[P], ReseñaGroupByOutputType[P]>
        }
      >
    >


  export type ReseñaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    estrellas?: boolean
    name?: boolean
    artist?: boolean
    album?: boolean
    genre?: boolean
    coverUrl?: boolean
    tipo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reseña"]>

  export type ReseñaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    estrellas?: boolean
    name?: boolean
    artist?: boolean
    album?: boolean
    genre?: boolean
    coverUrl?: boolean
    tipo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reseña"]>

  export type ReseñaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    estrellas?: boolean
    name?: boolean
    artist?: boolean
    album?: boolean
    genre?: boolean
    coverUrl?: boolean
    tipo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reseña"]>

  export type ReseñaSelectScalar = {
    id?: boolean
    titulo?: boolean
    contenido?: boolean
    estrellas?: boolean
    name?: boolean
    artist?: boolean
    album?: boolean
    genre?: boolean
    coverUrl?: boolean
    tipo?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReseñaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "contenido" | "estrellas" | "name" | "artist" | "album" | "genre" | "coverUrl" | "tipo" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["reseña"]>
  export type ReseñaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReseñaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ReseñaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ReseñaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reseña"
    objects: {
      user: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      contenido: string
      estrellas: number
      name: string
      artist: string
      album: string | null
      genre: string | null
      coverUrl: string | null
      tipo: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reseña"]>
    composites: {}
  }

  type ReseñaGetPayload<S extends boolean | null | undefined | ReseñaDefaultArgs> = $Result.GetResult<Prisma.$ReseñaPayload, S>

  type ReseñaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReseñaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReseñaCountAggregateInputType | true
    }

  export interface ReseñaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reseña'], meta: { name: 'Reseña' } }
    /**
     * Find zero or one Reseña that matches the filter.
     * @param {ReseñaFindUniqueArgs} args - Arguments to find a Reseña
     * @example
     * // Get one Reseña
     * const reseña = await prisma.reseña.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReseñaFindUniqueArgs>(args: SelectSubset<T, ReseñaFindUniqueArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reseña that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReseñaFindUniqueOrThrowArgs} args - Arguments to find a Reseña
     * @example
     * // Get one Reseña
     * const reseña = await prisma.reseña.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReseñaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReseñaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reseña that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaFindFirstArgs} args - Arguments to find a Reseña
     * @example
     * // Get one Reseña
     * const reseña = await prisma.reseña.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReseñaFindFirstArgs>(args?: SelectSubset<T, ReseñaFindFirstArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reseña that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaFindFirstOrThrowArgs} args - Arguments to find a Reseña
     * @example
     * // Get one Reseña
     * const reseña = await prisma.reseña.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReseñaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReseñaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reseñas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reseñas
     * const reseñas = await prisma.reseña.findMany()
     * 
     * // Get first 10 Reseñas
     * const reseñas = await prisma.reseña.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reseñaWithIdOnly = await prisma.reseña.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReseñaFindManyArgs>(args?: SelectSubset<T, ReseñaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reseña.
     * @param {ReseñaCreateArgs} args - Arguments to create a Reseña.
     * @example
     * // Create one Reseña
     * const Reseña = await prisma.reseña.create({
     *   data: {
     *     // ... data to create a Reseña
     *   }
     * })
     * 
     */
    create<T extends ReseñaCreateArgs>(args: SelectSubset<T, ReseñaCreateArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reseñas.
     * @param {ReseñaCreateManyArgs} args - Arguments to create many Reseñas.
     * @example
     * // Create many Reseñas
     * const reseña = await prisma.reseña.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReseñaCreateManyArgs>(args?: SelectSubset<T, ReseñaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reseñas and returns the data saved in the database.
     * @param {ReseñaCreateManyAndReturnArgs} args - Arguments to create many Reseñas.
     * @example
     * // Create many Reseñas
     * const reseña = await prisma.reseña.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reseñas and only return the `id`
     * const reseñaWithIdOnly = await prisma.reseña.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReseñaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReseñaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reseña.
     * @param {ReseñaDeleteArgs} args - Arguments to delete one Reseña.
     * @example
     * // Delete one Reseña
     * const Reseña = await prisma.reseña.delete({
     *   where: {
     *     // ... filter to delete one Reseña
     *   }
     * })
     * 
     */
    delete<T extends ReseñaDeleteArgs>(args: SelectSubset<T, ReseñaDeleteArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reseña.
     * @param {ReseñaUpdateArgs} args - Arguments to update one Reseña.
     * @example
     * // Update one Reseña
     * const reseña = await prisma.reseña.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReseñaUpdateArgs>(args: SelectSubset<T, ReseñaUpdateArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reseñas.
     * @param {ReseñaDeleteManyArgs} args - Arguments to filter Reseñas to delete.
     * @example
     * // Delete a few Reseñas
     * const { count } = await prisma.reseña.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReseñaDeleteManyArgs>(args?: SelectSubset<T, ReseñaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reseñas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reseñas
     * const reseña = await prisma.reseña.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReseñaUpdateManyArgs>(args: SelectSubset<T, ReseñaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reseñas and returns the data updated in the database.
     * @param {ReseñaUpdateManyAndReturnArgs} args - Arguments to update many Reseñas.
     * @example
     * // Update many Reseñas
     * const reseña = await prisma.reseña.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reseñas and only return the `id`
     * const reseñaWithIdOnly = await prisma.reseña.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReseñaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReseñaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reseña.
     * @param {ReseñaUpsertArgs} args - Arguments to update or create a Reseña.
     * @example
     * // Update or create a Reseña
     * const reseña = await prisma.reseña.upsert({
     *   create: {
     *     // ... data to create a Reseña
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reseña we want to update
     *   }
     * })
     */
    upsert<T extends ReseñaUpsertArgs>(args: SelectSubset<T, ReseñaUpsertArgs<ExtArgs>>): Prisma__ReseñaClient<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reseñas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaCountArgs} args - Arguments to filter Reseñas to count.
     * @example
     * // Count the number of Reseñas
     * const count = await prisma.reseña.count({
     *   where: {
     *     // ... the filter for the Reseñas we want to count
     *   }
     * })
    **/
    count<T extends ReseñaCountArgs>(
      args?: Subset<T, ReseñaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReseñaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reseña.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReseñaAggregateArgs>(args: Subset<T, ReseñaAggregateArgs>): Prisma.PrismaPromise<GetReseñaAggregateType<T>>

    /**
     * Group by Reseña.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReseñaGroupByArgs} args - Group by arguments.
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
      T extends ReseñaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReseñaGroupByArgs['orderBy'] }
        : { orderBy?: ReseñaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReseñaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReseñaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reseña model
   */
  readonly fields: ReseñaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reseña.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReseñaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reseña model
   */
  interface ReseñaFieldRefs {
    readonly id: FieldRef<"Reseña", 'String'>
    readonly titulo: FieldRef<"Reseña", 'String'>
    readonly contenido: FieldRef<"Reseña", 'String'>
    readonly estrellas: FieldRef<"Reseña", 'Int'>
    readonly name: FieldRef<"Reseña", 'String'>
    readonly artist: FieldRef<"Reseña", 'String'>
    readonly album: FieldRef<"Reseña", 'String'>
    readonly genre: FieldRef<"Reseña", 'String'>
    readonly coverUrl: FieldRef<"Reseña", 'String'>
    readonly tipo: FieldRef<"Reseña", 'String'>
    readonly userId: FieldRef<"Reseña", 'Int'>
    readonly createdAt: FieldRef<"Reseña", 'DateTime'>
    readonly updatedAt: FieldRef<"Reseña", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reseña findUnique
   */
  export type ReseñaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseña to fetch.
     */
    where: ReseñaWhereUniqueInput
  }

  /**
   * Reseña findUniqueOrThrow
   */
  export type ReseñaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseña to fetch.
     */
    where: ReseñaWhereUniqueInput
  }

  /**
   * Reseña findFirst
   */
  export type ReseñaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseña to fetch.
     */
    where?: ReseñaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseñas to fetch.
     */
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reseñas.
     */
    cursor?: ReseñaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseñas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseñas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reseñas.
     */
    distinct?: ReseñaScalarFieldEnum | ReseñaScalarFieldEnum[]
  }

  /**
   * Reseña findFirstOrThrow
   */
  export type ReseñaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseña to fetch.
     */
    where?: ReseñaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseñas to fetch.
     */
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reseñas.
     */
    cursor?: ReseñaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseñas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseñas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reseñas.
     */
    distinct?: ReseñaScalarFieldEnum | ReseñaScalarFieldEnum[]
  }

  /**
   * Reseña findMany
   */
  export type ReseñaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter, which Reseñas to fetch.
     */
    where?: ReseñaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseñas to fetch.
     */
    orderBy?: ReseñaOrderByWithRelationInput | ReseñaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reseñas.
     */
    cursor?: ReseñaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseñas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseñas.
     */
    skip?: number
    distinct?: ReseñaScalarFieldEnum | ReseñaScalarFieldEnum[]
  }

  /**
   * Reseña create
   */
  export type ReseñaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reseña.
     */
    data: XOR<ReseñaCreateInput, ReseñaUncheckedCreateInput>
  }

  /**
   * Reseña createMany
   */
  export type ReseñaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reseñas.
     */
    data: ReseñaCreateManyInput | ReseñaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reseña createManyAndReturn
   */
  export type ReseñaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * The data used to create many Reseñas.
     */
    data: ReseñaCreateManyInput | ReseñaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reseña update
   */
  export type ReseñaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reseña.
     */
    data: XOR<ReseñaUpdateInput, ReseñaUncheckedUpdateInput>
    /**
     * Choose, which Reseña to update.
     */
    where: ReseñaWhereUniqueInput
  }

  /**
   * Reseña updateMany
   */
  export type ReseñaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reseñas.
     */
    data: XOR<ReseñaUpdateManyMutationInput, ReseñaUncheckedUpdateManyInput>
    /**
     * Filter which Reseñas to update
     */
    where?: ReseñaWhereInput
    /**
     * Limit how many Reseñas to update.
     */
    limit?: number
  }

  /**
   * Reseña updateManyAndReturn
   */
  export type ReseñaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * The data used to update Reseñas.
     */
    data: XOR<ReseñaUpdateManyMutationInput, ReseñaUncheckedUpdateManyInput>
    /**
     * Filter which Reseñas to update
     */
    where?: ReseñaWhereInput
    /**
     * Limit how many Reseñas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reseña upsert
   */
  export type ReseñaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reseña to update in case it exists.
     */
    where: ReseñaWhereUniqueInput
    /**
     * In case the Reseña found by the `where` argument doesn't exist, create a new Reseña with this data.
     */
    create: XOR<ReseñaCreateInput, ReseñaUncheckedCreateInput>
    /**
     * In case the Reseña was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReseñaUpdateInput, ReseñaUncheckedUpdateInput>
  }

  /**
   * Reseña delete
   */
  export type ReseñaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
    /**
     * Filter which Reseña to delete.
     */
    where: ReseñaWhereUniqueInput
  }

  /**
   * Reseña deleteMany
   */
  export type ReseñaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reseñas to delete
     */
    where?: ReseñaWhereInput
    /**
     * Limit how many Reseñas to delete.
     */
    limit?: number
  }

  /**
   * Reseña without action
   */
  export type ReseñaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reseña
     */
    select?: ReseñaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reseña
     */
    omit?: ReseñaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReseñaInclude<ExtArgs> | null
  }


  /**
   * Model TestMusical
   */

  export type AggregateTestMusical = {
    _count: TestMusicalCountAggregateOutputType | null
    _avg: TestMusicalAvgAggregateOutputType | null
    _sum: TestMusicalSumAggregateOutputType | null
    _min: TestMusicalMinAggregateOutputType | null
    _max: TestMusicalMaxAggregateOutputType | null
  }

  export type TestMusicalAvgAggregateOutputType = {
    id: number | null
  }

  export type TestMusicalSumAggregateOutputType = {
    id: number | null
  }

  export type TestMusicalMinAggregateOutputType = {
    id: number | null
    pregunta: string | null
  }

  export type TestMusicalMaxAggregateOutputType = {
    id: number | null
    pregunta: string | null
  }

  export type TestMusicalCountAggregateOutputType = {
    id: number
    pregunta: number
    opciones: number
    respuestas: number
    _all: number
  }


  export type TestMusicalAvgAggregateInputType = {
    id?: true
  }

  export type TestMusicalSumAggregateInputType = {
    id?: true
  }

  export type TestMusicalMinAggregateInputType = {
    id?: true
    pregunta?: true
  }

  export type TestMusicalMaxAggregateInputType = {
    id?: true
    pregunta?: true
  }

  export type TestMusicalCountAggregateInputType = {
    id?: true
    pregunta?: true
    opciones?: true
    respuestas?: true
    _all?: true
  }

  export type TestMusicalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestMusical to aggregate.
     */
    where?: TestMusicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestMusicals to fetch.
     */
    orderBy?: TestMusicalOrderByWithRelationInput | TestMusicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestMusicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestMusicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestMusicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestMusicals
    **/
    _count?: true | TestMusicalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestMusicalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestMusicalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMusicalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMusicalMaxAggregateInputType
  }

  export type GetTestMusicalAggregateType<T extends TestMusicalAggregateArgs> = {
        [P in keyof T & keyof AggregateTestMusical]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestMusical[P]>
      : GetScalarType<T[P], AggregateTestMusical[P]>
  }




  export type TestMusicalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestMusicalWhereInput
    orderBy?: TestMusicalOrderByWithAggregationInput | TestMusicalOrderByWithAggregationInput[]
    by: TestMusicalScalarFieldEnum[] | TestMusicalScalarFieldEnum
    having?: TestMusicalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestMusicalCountAggregateInputType | true
    _avg?: TestMusicalAvgAggregateInputType
    _sum?: TestMusicalSumAggregateInputType
    _min?: TestMusicalMinAggregateInputType
    _max?: TestMusicalMaxAggregateInputType
  }

  export type TestMusicalGroupByOutputType = {
    id: number
    pregunta: string
    opciones: JsonValue
    respuestas: JsonValue
    _count: TestMusicalCountAggregateOutputType | null
    _avg: TestMusicalAvgAggregateOutputType | null
    _sum: TestMusicalSumAggregateOutputType | null
    _min: TestMusicalMinAggregateOutputType | null
    _max: TestMusicalMaxAggregateOutputType | null
  }

  type GetTestMusicalGroupByPayload<T extends TestMusicalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestMusicalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestMusicalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestMusicalGroupByOutputType[P]>
            : GetScalarType<T[P], TestMusicalGroupByOutputType[P]>
        }
      >
    >


  export type TestMusicalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pregunta?: boolean
    opciones?: boolean
    respuestas?: boolean
  }, ExtArgs["result"]["testMusical"]>

  export type TestMusicalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pregunta?: boolean
    opciones?: boolean
    respuestas?: boolean
  }, ExtArgs["result"]["testMusical"]>

  export type TestMusicalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pregunta?: boolean
    opciones?: boolean
    respuestas?: boolean
  }, ExtArgs["result"]["testMusical"]>

  export type TestMusicalSelectScalar = {
    id?: boolean
    pregunta?: boolean
    opciones?: boolean
    respuestas?: boolean
  }

  export type TestMusicalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pregunta" | "opciones" | "respuestas", ExtArgs["result"]["testMusical"]>

  export type $TestMusicalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestMusical"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pregunta: string
      opciones: Prisma.JsonValue
      respuestas: Prisma.JsonValue
    }, ExtArgs["result"]["testMusical"]>
    composites: {}
  }

  type TestMusicalGetPayload<S extends boolean | null | undefined | TestMusicalDefaultArgs> = $Result.GetResult<Prisma.$TestMusicalPayload, S>

  type TestMusicalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestMusicalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestMusicalCountAggregateInputType | true
    }

  export interface TestMusicalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestMusical'], meta: { name: 'TestMusical' } }
    /**
     * Find zero or one TestMusical that matches the filter.
     * @param {TestMusicalFindUniqueArgs} args - Arguments to find a TestMusical
     * @example
     * // Get one TestMusical
     * const testMusical = await prisma.testMusical.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestMusicalFindUniqueArgs>(args: SelectSubset<T, TestMusicalFindUniqueArgs<ExtArgs>>): Prisma__TestMusicalClient<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestMusical that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestMusicalFindUniqueOrThrowArgs} args - Arguments to find a TestMusical
     * @example
     * // Get one TestMusical
     * const testMusical = await prisma.testMusical.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestMusicalFindUniqueOrThrowArgs>(args: SelectSubset<T, TestMusicalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestMusicalClient<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestMusical that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestMusicalFindFirstArgs} args - Arguments to find a TestMusical
     * @example
     * // Get one TestMusical
     * const testMusical = await prisma.testMusical.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestMusicalFindFirstArgs>(args?: SelectSubset<T, TestMusicalFindFirstArgs<ExtArgs>>): Prisma__TestMusicalClient<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestMusical that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestMusicalFindFirstOrThrowArgs} args - Arguments to find a TestMusical
     * @example
     * // Get one TestMusical
     * const testMusical = await prisma.testMusical.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestMusicalFindFirstOrThrowArgs>(args?: SelectSubset<T, TestMusicalFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestMusicalClient<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestMusicals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestMusicalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestMusicals
     * const testMusicals = await prisma.testMusical.findMany()
     * 
     * // Get first 10 TestMusicals
     * const testMusicals = await prisma.testMusical.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testMusicalWithIdOnly = await prisma.testMusical.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestMusicalFindManyArgs>(args?: SelectSubset<T, TestMusicalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestMusical.
     * @param {TestMusicalCreateArgs} args - Arguments to create a TestMusical.
     * @example
     * // Create one TestMusical
     * const TestMusical = await prisma.testMusical.create({
     *   data: {
     *     // ... data to create a TestMusical
     *   }
     * })
     * 
     */
    create<T extends TestMusicalCreateArgs>(args: SelectSubset<T, TestMusicalCreateArgs<ExtArgs>>): Prisma__TestMusicalClient<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestMusicals.
     * @param {TestMusicalCreateManyArgs} args - Arguments to create many TestMusicals.
     * @example
     * // Create many TestMusicals
     * const testMusical = await prisma.testMusical.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestMusicalCreateManyArgs>(args?: SelectSubset<T, TestMusicalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestMusicals and returns the data saved in the database.
     * @param {TestMusicalCreateManyAndReturnArgs} args - Arguments to create many TestMusicals.
     * @example
     * // Create many TestMusicals
     * const testMusical = await prisma.testMusical.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestMusicals and only return the `id`
     * const testMusicalWithIdOnly = await prisma.testMusical.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestMusicalCreateManyAndReturnArgs>(args?: SelectSubset<T, TestMusicalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestMusical.
     * @param {TestMusicalDeleteArgs} args - Arguments to delete one TestMusical.
     * @example
     * // Delete one TestMusical
     * const TestMusical = await prisma.testMusical.delete({
     *   where: {
     *     // ... filter to delete one TestMusical
     *   }
     * })
     * 
     */
    delete<T extends TestMusicalDeleteArgs>(args: SelectSubset<T, TestMusicalDeleteArgs<ExtArgs>>): Prisma__TestMusicalClient<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestMusical.
     * @param {TestMusicalUpdateArgs} args - Arguments to update one TestMusical.
     * @example
     * // Update one TestMusical
     * const testMusical = await prisma.testMusical.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestMusicalUpdateArgs>(args: SelectSubset<T, TestMusicalUpdateArgs<ExtArgs>>): Prisma__TestMusicalClient<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestMusicals.
     * @param {TestMusicalDeleteManyArgs} args - Arguments to filter TestMusicals to delete.
     * @example
     * // Delete a few TestMusicals
     * const { count } = await prisma.testMusical.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestMusicalDeleteManyArgs>(args?: SelectSubset<T, TestMusicalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestMusicals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestMusicalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestMusicals
     * const testMusical = await prisma.testMusical.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestMusicalUpdateManyArgs>(args: SelectSubset<T, TestMusicalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestMusicals and returns the data updated in the database.
     * @param {TestMusicalUpdateManyAndReturnArgs} args - Arguments to update many TestMusicals.
     * @example
     * // Update many TestMusicals
     * const testMusical = await prisma.testMusical.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestMusicals and only return the `id`
     * const testMusicalWithIdOnly = await prisma.testMusical.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestMusicalUpdateManyAndReturnArgs>(args: SelectSubset<T, TestMusicalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestMusical.
     * @param {TestMusicalUpsertArgs} args - Arguments to update or create a TestMusical.
     * @example
     * // Update or create a TestMusical
     * const testMusical = await prisma.testMusical.upsert({
     *   create: {
     *     // ... data to create a TestMusical
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestMusical we want to update
     *   }
     * })
     */
    upsert<T extends TestMusicalUpsertArgs>(args: SelectSubset<T, TestMusicalUpsertArgs<ExtArgs>>): Prisma__TestMusicalClient<$Result.GetResult<Prisma.$TestMusicalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestMusicals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestMusicalCountArgs} args - Arguments to filter TestMusicals to count.
     * @example
     * // Count the number of TestMusicals
     * const count = await prisma.testMusical.count({
     *   where: {
     *     // ... the filter for the TestMusicals we want to count
     *   }
     * })
    **/
    count<T extends TestMusicalCountArgs>(
      args?: Subset<T, TestMusicalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestMusicalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestMusical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestMusicalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestMusicalAggregateArgs>(args: Subset<T, TestMusicalAggregateArgs>): Prisma.PrismaPromise<GetTestMusicalAggregateType<T>>

    /**
     * Group by TestMusical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestMusicalGroupByArgs} args - Group by arguments.
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
      T extends TestMusicalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestMusicalGroupByArgs['orderBy'] }
        : { orderBy?: TestMusicalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TestMusicalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestMusicalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestMusical model
   */
  readonly fields: TestMusicalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestMusical.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestMusicalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestMusical model
   */
  interface TestMusicalFieldRefs {
    readonly id: FieldRef<"TestMusical", 'Int'>
    readonly pregunta: FieldRef<"TestMusical", 'String'>
    readonly opciones: FieldRef<"TestMusical", 'Json'>
    readonly respuestas: FieldRef<"TestMusical", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * TestMusical findUnique
   */
  export type TestMusicalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * Filter, which TestMusical to fetch.
     */
    where: TestMusicalWhereUniqueInput
  }

  /**
   * TestMusical findUniqueOrThrow
   */
  export type TestMusicalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * Filter, which TestMusical to fetch.
     */
    where: TestMusicalWhereUniqueInput
  }

  /**
   * TestMusical findFirst
   */
  export type TestMusicalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * Filter, which TestMusical to fetch.
     */
    where?: TestMusicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestMusicals to fetch.
     */
    orderBy?: TestMusicalOrderByWithRelationInput | TestMusicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestMusicals.
     */
    cursor?: TestMusicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestMusicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestMusicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestMusicals.
     */
    distinct?: TestMusicalScalarFieldEnum | TestMusicalScalarFieldEnum[]
  }

  /**
   * TestMusical findFirstOrThrow
   */
  export type TestMusicalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * Filter, which TestMusical to fetch.
     */
    where?: TestMusicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestMusicals to fetch.
     */
    orderBy?: TestMusicalOrderByWithRelationInput | TestMusicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestMusicals.
     */
    cursor?: TestMusicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestMusicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestMusicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestMusicals.
     */
    distinct?: TestMusicalScalarFieldEnum | TestMusicalScalarFieldEnum[]
  }

  /**
   * TestMusical findMany
   */
  export type TestMusicalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * Filter, which TestMusicals to fetch.
     */
    where?: TestMusicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestMusicals to fetch.
     */
    orderBy?: TestMusicalOrderByWithRelationInput | TestMusicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestMusicals.
     */
    cursor?: TestMusicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestMusicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestMusicals.
     */
    skip?: number
    distinct?: TestMusicalScalarFieldEnum | TestMusicalScalarFieldEnum[]
  }

  /**
   * TestMusical create
   */
  export type TestMusicalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * The data needed to create a TestMusical.
     */
    data: XOR<TestMusicalCreateInput, TestMusicalUncheckedCreateInput>
  }

  /**
   * TestMusical createMany
   */
  export type TestMusicalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestMusicals.
     */
    data: TestMusicalCreateManyInput | TestMusicalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestMusical createManyAndReturn
   */
  export type TestMusicalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * The data used to create many TestMusicals.
     */
    data: TestMusicalCreateManyInput | TestMusicalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestMusical update
   */
  export type TestMusicalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * The data needed to update a TestMusical.
     */
    data: XOR<TestMusicalUpdateInput, TestMusicalUncheckedUpdateInput>
    /**
     * Choose, which TestMusical to update.
     */
    where: TestMusicalWhereUniqueInput
  }

  /**
   * TestMusical updateMany
   */
  export type TestMusicalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestMusicals.
     */
    data: XOR<TestMusicalUpdateManyMutationInput, TestMusicalUncheckedUpdateManyInput>
    /**
     * Filter which TestMusicals to update
     */
    where?: TestMusicalWhereInput
    /**
     * Limit how many TestMusicals to update.
     */
    limit?: number
  }

  /**
   * TestMusical updateManyAndReturn
   */
  export type TestMusicalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * The data used to update TestMusicals.
     */
    data: XOR<TestMusicalUpdateManyMutationInput, TestMusicalUncheckedUpdateManyInput>
    /**
     * Filter which TestMusicals to update
     */
    where?: TestMusicalWhereInput
    /**
     * Limit how many TestMusicals to update.
     */
    limit?: number
  }

  /**
   * TestMusical upsert
   */
  export type TestMusicalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * The filter to search for the TestMusical to update in case it exists.
     */
    where: TestMusicalWhereUniqueInput
    /**
     * In case the TestMusical found by the `where` argument doesn't exist, create a new TestMusical with this data.
     */
    create: XOR<TestMusicalCreateInput, TestMusicalUncheckedCreateInput>
    /**
     * In case the TestMusical was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestMusicalUpdateInput, TestMusicalUncheckedUpdateInput>
  }

  /**
   * TestMusical delete
   */
  export type TestMusicalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
    /**
     * Filter which TestMusical to delete.
     */
    where: TestMusicalWhereUniqueInput
  }

  /**
   * TestMusical deleteMany
   */
  export type TestMusicalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestMusicals to delete
     */
    where?: TestMusicalWhereInput
    /**
     * Limit how many TestMusicals to delete.
     */
    limit?: number
  }

  /**
   * TestMusical without action
   */
  export type TestMusicalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestMusical
     */
    select?: TestMusicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestMusical
     */
    omit?: TestMusicalOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    correo: 'correo',
    nombreUsuario: 'nombreUsuario',
    contraseña: 'contraseña',
    nombre: 'nombre',
    imagenPerfil: 'imagenPerfil'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


  export const UsuarioGeneroScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    generoId: 'generoId',
    tipo: 'tipo'
  };

  export type UsuarioGeneroScalarFieldEnum = (typeof UsuarioGeneroScalarFieldEnum)[keyof typeof UsuarioGeneroScalarFieldEnum]


  export const ReseñaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    contenido: 'contenido',
    estrellas: 'estrellas',
    name: 'name',
    artist: 'artist',
    album: 'album',
    genre: 'genre',
    coverUrl: 'coverUrl',
    tipo: 'tipo',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReseñaScalarFieldEnum = (typeof ReseñaScalarFieldEnum)[keyof typeof ReseñaScalarFieldEnum]


  export const TestMusicalScalarFieldEnum: {
    id: 'id',
    pregunta: 'pregunta',
    opciones: 'opciones',
    respuestas: 'respuestas'
  };

  export type TestMusicalScalarFieldEnum = (typeof TestMusicalScalarFieldEnum)[keyof typeof TestMusicalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    correo?: StringFilter<"Usuario"> | string
    nombreUsuario?: StringFilter<"Usuario"> | string
    contraseña?: StringFilter<"Usuario"> | string
    nombre?: StringNullableFilter<"Usuario"> | string | null
    imagenPerfil?: StringNullableFilter<"Usuario"> | string | null
    generos?: UsuarioGeneroListRelationFilter
    reseñas?: ReseñaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    correo?: SortOrder
    nombreUsuario?: SortOrder
    contraseña?: SortOrder
    nombre?: SortOrderInput | SortOrder
    imagenPerfil?: SortOrderInput | SortOrder
    generos?: UsuarioGeneroOrderByRelationAggregateInput
    reseñas?: ReseñaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    nombreUsuario?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    contraseña?: StringFilter<"Usuario"> | string
    nombre?: StringNullableFilter<"Usuario"> | string | null
    imagenPerfil?: StringNullableFilter<"Usuario"> | string | null
    generos?: UsuarioGeneroListRelationFilter
    reseñas?: ReseñaListRelationFilter
  }, "id" | "correo" | "nombreUsuario">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    correo?: SortOrder
    nombreUsuario?: SortOrder
    contraseña?: SortOrder
    nombre?: SortOrderInput | SortOrder
    imagenPerfil?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    nombreUsuario?: StringWithAggregatesFilter<"Usuario"> | string
    contraseña?: StringWithAggregatesFilter<"Usuario"> | string
    nombre?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    imagenPerfil?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type GeneroWhereInput = {
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    id?: IntFilter<"Genero"> | number
    nombre?: StringFilter<"Genero"> | string
    usuarios?: UsuarioGeneroListRelationFilter
  }

  export type GeneroOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioGeneroOrderByRelationAggregateInput
  }

  export type GeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    usuarios?: UsuarioGeneroListRelationFilter
  }, "id" | "nombre">

  export type GeneroOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: GeneroCountOrderByAggregateInput
    _avg?: GeneroAvgOrderByAggregateInput
    _max?: GeneroMaxOrderByAggregateInput
    _min?: GeneroMinOrderByAggregateInput
    _sum?: GeneroSumOrderByAggregateInput
  }

  export type GeneroScalarWhereWithAggregatesInput = {
    AND?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    OR?: GeneroScalarWhereWithAggregatesInput[]
    NOT?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genero"> | number
    nombre?: StringWithAggregatesFilter<"Genero"> | string
  }

  export type UsuarioGeneroWhereInput = {
    AND?: UsuarioGeneroWhereInput | UsuarioGeneroWhereInput[]
    OR?: UsuarioGeneroWhereInput[]
    NOT?: UsuarioGeneroWhereInput | UsuarioGeneroWhereInput[]
    id?: IntFilter<"UsuarioGenero"> | number
    usuarioId?: IntFilter<"UsuarioGenero"> | number
    generoId?: IntFilter<"UsuarioGenero"> | number
    tipo?: StringFilter<"UsuarioGenero"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }

  export type UsuarioGeneroOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
    tipo?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    genero?: GeneroOrderByWithRelationInput
  }

  export type UsuarioGeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_generoId_tipo?: UsuarioGeneroUsuarioIdGeneroIdTipoCompoundUniqueInput
    AND?: UsuarioGeneroWhereInput | UsuarioGeneroWhereInput[]
    OR?: UsuarioGeneroWhereInput[]
    NOT?: UsuarioGeneroWhereInput | UsuarioGeneroWhereInput[]
    usuarioId?: IntFilter<"UsuarioGenero"> | number
    generoId?: IntFilter<"UsuarioGenero"> | number
    tipo?: StringFilter<"UsuarioGenero"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }, "id" | "usuarioId_generoId_tipo">

  export type UsuarioGeneroOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
    tipo?: SortOrder
    _count?: UsuarioGeneroCountOrderByAggregateInput
    _avg?: UsuarioGeneroAvgOrderByAggregateInput
    _max?: UsuarioGeneroMaxOrderByAggregateInput
    _min?: UsuarioGeneroMinOrderByAggregateInput
    _sum?: UsuarioGeneroSumOrderByAggregateInput
  }

  export type UsuarioGeneroScalarWhereWithAggregatesInput = {
    AND?: UsuarioGeneroScalarWhereWithAggregatesInput | UsuarioGeneroScalarWhereWithAggregatesInput[]
    OR?: UsuarioGeneroScalarWhereWithAggregatesInput[]
    NOT?: UsuarioGeneroScalarWhereWithAggregatesInput | UsuarioGeneroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioGenero"> | number
    usuarioId?: IntWithAggregatesFilter<"UsuarioGenero"> | number
    generoId?: IntWithAggregatesFilter<"UsuarioGenero"> | number
    tipo?: StringWithAggregatesFilter<"UsuarioGenero"> | string
  }

  export type ReseñaWhereInput = {
    AND?: ReseñaWhereInput | ReseñaWhereInput[]
    OR?: ReseñaWhereInput[]
    NOT?: ReseñaWhereInput | ReseñaWhereInput[]
    id?: StringFilter<"Reseña"> | string
    titulo?: StringFilter<"Reseña"> | string
    contenido?: StringFilter<"Reseña"> | string
    estrellas?: IntFilter<"Reseña"> | number
    name?: StringFilter<"Reseña"> | string
    artist?: StringFilter<"Reseña"> | string
    album?: StringNullableFilter<"Reseña"> | string | null
    genre?: StringNullableFilter<"Reseña"> | string | null
    coverUrl?: StringNullableFilter<"Reseña"> | string | null
    tipo?: StringFilter<"Reseña"> | string
    userId?: IntFilter<"Reseña"> | number
    createdAt?: DateTimeFilter<"Reseña"> | Date | string
    updatedAt?: DateTimeFilter<"Reseña"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ReseñaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    estrellas?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    album?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    tipo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsuarioOrderByWithRelationInput
  }

  export type ReseñaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReseñaWhereInput | ReseñaWhereInput[]
    OR?: ReseñaWhereInput[]
    NOT?: ReseñaWhereInput | ReseñaWhereInput[]
    titulo?: StringFilter<"Reseña"> | string
    contenido?: StringFilter<"Reseña"> | string
    estrellas?: IntFilter<"Reseña"> | number
    name?: StringFilter<"Reseña"> | string
    artist?: StringFilter<"Reseña"> | string
    album?: StringNullableFilter<"Reseña"> | string | null
    genre?: StringNullableFilter<"Reseña"> | string | null
    coverUrl?: StringNullableFilter<"Reseña"> | string | null
    tipo?: StringFilter<"Reseña"> | string
    userId?: IntFilter<"Reseña"> | number
    createdAt?: DateTimeFilter<"Reseña"> | Date | string
    updatedAt?: DateTimeFilter<"Reseña"> | Date | string
    user?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ReseñaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    estrellas?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    album?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    tipo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReseñaCountOrderByAggregateInput
    _avg?: ReseñaAvgOrderByAggregateInput
    _max?: ReseñaMaxOrderByAggregateInput
    _min?: ReseñaMinOrderByAggregateInput
    _sum?: ReseñaSumOrderByAggregateInput
  }

  export type ReseñaScalarWhereWithAggregatesInput = {
    AND?: ReseñaScalarWhereWithAggregatesInput | ReseñaScalarWhereWithAggregatesInput[]
    OR?: ReseñaScalarWhereWithAggregatesInput[]
    NOT?: ReseñaScalarWhereWithAggregatesInput | ReseñaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reseña"> | string
    titulo?: StringWithAggregatesFilter<"Reseña"> | string
    contenido?: StringWithAggregatesFilter<"Reseña"> | string
    estrellas?: IntWithAggregatesFilter<"Reseña"> | number
    name?: StringWithAggregatesFilter<"Reseña"> | string
    artist?: StringWithAggregatesFilter<"Reseña"> | string
    album?: StringNullableWithAggregatesFilter<"Reseña"> | string | null
    genre?: StringNullableWithAggregatesFilter<"Reseña"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Reseña"> | string | null
    tipo?: StringWithAggregatesFilter<"Reseña"> | string
    userId?: IntWithAggregatesFilter<"Reseña"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reseña"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reseña"> | Date | string
  }

  export type TestMusicalWhereInput = {
    AND?: TestMusicalWhereInput | TestMusicalWhereInput[]
    OR?: TestMusicalWhereInput[]
    NOT?: TestMusicalWhereInput | TestMusicalWhereInput[]
    id?: IntFilter<"TestMusical"> | number
    pregunta?: StringFilter<"TestMusical"> | string
    opciones?: JsonFilter<"TestMusical">
    respuestas?: JsonFilter<"TestMusical">
  }

  export type TestMusicalOrderByWithRelationInput = {
    id?: SortOrder
    pregunta?: SortOrder
    opciones?: SortOrder
    respuestas?: SortOrder
  }

  export type TestMusicalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestMusicalWhereInput | TestMusicalWhereInput[]
    OR?: TestMusicalWhereInput[]
    NOT?: TestMusicalWhereInput | TestMusicalWhereInput[]
    pregunta?: StringFilter<"TestMusical"> | string
    opciones?: JsonFilter<"TestMusical">
    respuestas?: JsonFilter<"TestMusical">
  }, "id">

  export type TestMusicalOrderByWithAggregationInput = {
    id?: SortOrder
    pregunta?: SortOrder
    opciones?: SortOrder
    respuestas?: SortOrder
    _count?: TestMusicalCountOrderByAggregateInput
    _avg?: TestMusicalAvgOrderByAggregateInput
    _max?: TestMusicalMaxOrderByAggregateInput
    _min?: TestMusicalMinOrderByAggregateInput
    _sum?: TestMusicalSumOrderByAggregateInput
  }

  export type TestMusicalScalarWhereWithAggregatesInput = {
    AND?: TestMusicalScalarWhereWithAggregatesInput | TestMusicalScalarWhereWithAggregatesInput[]
    OR?: TestMusicalScalarWhereWithAggregatesInput[]
    NOT?: TestMusicalScalarWhereWithAggregatesInput | TestMusicalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TestMusical"> | number
    pregunta?: StringWithAggregatesFilter<"TestMusical"> | string
    opciones?: JsonWithAggregatesFilter<"TestMusical">
    respuestas?: JsonWithAggregatesFilter<"TestMusical">
  }

  export type UsuarioCreateInput = {
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    generos?: UsuarioGeneroCreateNestedManyWithoutUsuarioInput
    reseñas?: ReseñaCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    generos?: UsuarioGeneroUncheckedCreateNestedManyWithoutUsuarioInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioUpdateInput = {
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: UsuarioGeneroUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: UsuarioGeneroUncheckedUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneroCreateInput = {
    nombre: string
    usuarios?: UsuarioGeneroCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioGeneroUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroCreateManyInput = {
    id?: number
    nombre: string
  }

  export type GeneroUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioGeneroCreateInput = {
    tipo: string
    usuario: UsuarioCreateNestedOneWithoutGenerosInput
    genero: GeneroCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioGeneroUncheckedCreateInput = {
    id?: number
    usuarioId: number
    generoId: number
    tipo: string
  }

  export type UsuarioGeneroUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutGenerosNestedInput
    genero?: GeneroUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioGeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioGeneroCreateManyInput = {
    id?: number
    usuarioId: number
    generoId: number
    tipo: string
  }

  export type UsuarioGeneroUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioGeneroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type ReseñaCreateInput = {
    id?: string
    titulo: string
    contenido: string
    estrellas: number
    name: string
    artist: string
    album?: string | null
    genre?: string | null
    coverUrl?: string | null
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsuarioCreateNestedOneWithoutReseñasInput
  }

  export type ReseñaUncheckedCreateInput = {
    id?: string
    titulo: string
    contenido: string
    estrellas: number
    name: string
    artist: string
    album?: string | null
    genre?: string | null
    coverUrl?: string | null
    tipo: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReseñaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    estrellas?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsuarioUpdateOneRequiredWithoutReseñasNestedInput
  }

  export type ReseñaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    estrellas?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReseñaCreateManyInput = {
    id?: string
    titulo: string
    contenido: string
    estrellas: number
    name: string
    artist: string
    album?: string | null
    genre?: string | null
    coverUrl?: string | null
    tipo: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReseñaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    estrellas?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReseñaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    estrellas?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestMusicalCreateInput = {
    pregunta: string
    opciones: JsonNullValueInput | InputJsonValue
    respuestas: JsonNullValueInput | InputJsonValue
  }

  export type TestMusicalUncheckedCreateInput = {
    id?: number
    pregunta: string
    opciones: JsonNullValueInput | InputJsonValue
    respuestas: JsonNullValueInput | InputJsonValue
  }

  export type TestMusicalUpdateInput = {
    pregunta?: StringFieldUpdateOperationsInput | string
    opciones?: JsonNullValueInput | InputJsonValue
    respuestas?: JsonNullValueInput | InputJsonValue
  }

  export type TestMusicalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pregunta?: StringFieldUpdateOperationsInput | string
    opciones?: JsonNullValueInput | InputJsonValue
    respuestas?: JsonNullValueInput | InputJsonValue
  }

  export type TestMusicalCreateManyInput = {
    id?: number
    pregunta: string
    opciones: JsonNullValueInput | InputJsonValue
    respuestas: JsonNullValueInput | InputJsonValue
  }

  export type TestMusicalUpdateManyMutationInput = {
    pregunta?: StringFieldUpdateOperationsInput | string
    opciones?: JsonNullValueInput | InputJsonValue
    respuestas?: JsonNullValueInput | InputJsonValue
  }

  export type TestMusicalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pregunta?: StringFieldUpdateOperationsInput | string
    opciones?: JsonNullValueInput | InputJsonValue
    respuestas?: JsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsuarioGeneroListRelationFilter = {
    every?: UsuarioGeneroWhereInput
    some?: UsuarioGeneroWhereInput
    none?: UsuarioGeneroWhereInput
  }

  export type ReseñaListRelationFilter = {
    every?: ReseñaWhereInput
    some?: ReseñaWhereInput
    none?: ReseñaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioGeneroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReseñaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    nombreUsuario?: SortOrder
    contraseña?: SortOrder
    nombre?: SortOrder
    imagenPerfil?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    nombreUsuario?: SortOrder
    contraseña?: SortOrder
    nombre?: SortOrder
    imagenPerfil?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    correo?: SortOrder
    nombreUsuario?: SortOrder
    contraseña?: SortOrder
    nombre?: SortOrder
    imagenPerfil?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type GeneroCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type GeneroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneroMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type GeneroMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type GeneroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type GeneroScalarRelationFilter = {
    is?: GeneroWhereInput
    isNot?: GeneroWhereInput
  }

  export type UsuarioGeneroUsuarioIdGeneroIdTipoCompoundUniqueInput = {
    usuarioId: number
    generoId: number
    tipo: string
  }

  export type UsuarioGeneroCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioGeneroAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
  }

  export type UsuarioGeneroMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioGeneroMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioGeneroSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReseñaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    estrellas?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    album?: SortOrder
    genre?: SortOrder
    coverUrl?: SortOrder
    tipo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReseñaAvgOrderByAggregateInput = {
    estrellas?: SortOrder
    userId?: SortOrder
  }

  export type ReseñaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    estrellas?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    album?: SortOrder
    genre?: SortOrder
    coverUrl?: SortOrder
    tipo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReseñaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    contenido?: SortOrder
    estrellas?: SortOrder
    name?: SortOrder
    artist?: SortOrder
    album?: SortOrder
    genre?: SortOrder
    coverUrl?: SortOrder
    tipo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReseñaSumOrderByAggregateInput = {
    estrellas?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TestMusicalCountOrderByAggregateInput = {
    id?: SortOrder
    pregunta?: SortOrder
    opciones?: SortOrder
    respuestas?: SortOrder
  }

  export type TestMusicalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestMusicalMaxOrderByAggregateInput = {
    id?: SortOrder
    pregunta?: SortOrder
  }

  export type TestMusicalMinOrderByAggregateInput = {
    id?: SortOrder
    pregunta?: SortOrder
  }

  export type TestMusicalSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UsuarioGeneroCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioGeneroCreateWithoutUsuarioInput, UsuarioGeneroUncheckedCreateWithoutUsuarioInput> | UsuarioGeneroCreateWithoutUsuarioInput[] | UsuarioGeneroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutUsuarioInput | UsuarioGeneroCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioGeneroCreateManyUsuarioInputEnvelope
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
  }

  export type ReseñaCreateNestedManyWithoutUserInput = {
    create?: XOR<ReseñaCreateWithoutUserInput, ReseñaUncheckedCreateWithoutUserInput> | ReseñaCreateWithoutUserInput[] | ReseñaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUserInput | ReseñaCreateOrConnectWithoutUserInput[]
    createMany?: ReseñaCreateManyUserInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type UsuarioGeneroUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioGeneroCreateWithoutUsuarioInput, UsuarioGeneroUncheckedCreateWithoutUsuarioInput> | UsuarioGeneroCreateWithoutUsuarioInput[] | UsuarioGeneroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutUsuarioInput | UsuarioGeneroCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioGeneroCreateManyUsuarioInputEnvelope
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
  }

  export type ReseñaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReseñaCreateWithoutUserInput, ReseñaUncheckedCreateWithoutUserInput> | ReseñaCreateWithoutUserInput[] | ReseñaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUserInput | ReseñaCreateOrConnectWithoutUserInput[]
    createMany?: ReseñaCreateManyUserInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioGeneroUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioGeneroCreateWithoutUsuarioInput, UsuarioGeneroUncheckedCreateWithoutUsuarioInput> | UsuarioGeneroCreateWithoutUsuarioInput[] | UsuarioGeneroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutUsuarioInput | UsuarioGeneroCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioGeneroUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioGeneroUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioGeneroCreateManyUsuarioInputEnvelope
    set?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    disconnect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    delete?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    update?: UsuarioGeneroUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioGeneroUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioGeneroUpdateManyWithWhereWithoutUsuarioInput | UsuarioGeneroUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioGeneroScalarWhereInput | UsuarioGeneroScalarWhereInput[]
  }

  export type ReseñaUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReseñaCreateWithoutUserInput, ReseñaUncheckedCreateWithoutUserInput> | ReseñaCreateWithoutUserInput[] | ReseñaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUserInput | ReseñaCreateOrConnectWithoutUserInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutUserInput | ReseñaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReseñaCreateManyUserInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutUserInput | ReseñaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutUserInput | ReseñaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioGeneroUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioGeneroCreateWithoutUsuarioInput, UsuarioGeneroUncheckedCreateWithoutUsuarioInput> | UsuarioGeneroCreateWithoutUsuarioInput[] | UsuarioGeneroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutUsuarioInput | UsuarioGeneroCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioGeneroUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioGeneroUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioGeneroCreateManyUsuarioInputEnvelope
    set?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    disconnect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    delete?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    update?: UsuarioGeneroUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioGeneroUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioGeneroUpdateManyWithWhereWithoutUsuarioInput | UsuarioGeneroUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioGeneroScalarWhereInput | UsuarioGeneroScalarWhereInput[]
  }

  export type ReseñaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReseñaCreateWithoutUserInput, ReseñaUncheckedCreateWithoutUserInput> | ReseñaCreateWithoutUserInput[] | ReseñaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUserInput | ReseñaCreateOrConnectWithoutUserInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutUserInput | ReseñaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReseñaCreateManyUserInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutUserInput | ReseñaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutUserInput | ReseñaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type UsuarioGeneroCreateNestedManyWithoutGeneroInput = {
    create?: XOR<UsuarioGeneroCreateWithoutGeneroInput, UsuarioGeneroUncheckedCreateWithoutGeneroInput> | UsuarioGeneroCreateWithoutGeneroInput[] | UsuarioGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutGeneroInput | UsuarioGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: UsuarioGeneroCreateManyGeneroInputEnvelope
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
  }

  export type UsuarioGeneroUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<UsuarioGeneroCreateWithoutGeneroInput, UsuarioGeneroUncheckedCreateWithoutGeneroInput> | UsuarioGeneroCreateWithoutGeneroInput[] | UsuarioGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutGeneroInput | UsuarioGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: UsuarioGeneroCreateManyGeneroInputEnvelope
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
  }

  export type UsuarioGeneroUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<UsuarioGeneroCreateWithoutGeneroInput, UsuarioGeneroUncheckedCreateWithoutGeneroInput> | UsuarioGeneroCreateWithoutGeneroInput[] | UsuarioGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutGeneroInput | UsuarioGeneroCreateOrConnectWithoutGeneroInput[]
    upsert?: UsuarioGeneroUpsertWithWhereUniqueWithoutGeneroInput | UsuarioGeneroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: UsuarioGeneroCreateManyGeneroInputEnvelope
    set?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    disconnect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    delete?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    update?: UsuarioGeneroUpdateWithWhereUniqueWithoutGeneroInput | UsuarioGeneroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: UsuarioGeneroUpdateManyWithWhereWithoutGeneroInput | UsuarioGeneroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: UsuarioGeneroScalarWhereInput | UsuarioGeneroScalarWhereInput[]
  }

  export type UsuarioGeneroUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<UsuarioGeneroCreateWithoutGeneroInput, UsuarioGeneroUncheckedCreateWithoutGeneroInput> | UsuarioGeneroCreateWithoutGeneroInput[] | UsuarioGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutGeneroInput | UsuarioGeneroCreateOrConnectWithoutGeneroInput[]
    upsert?: UsuarioGeneroUpsertWithWhereUniqueWithoutGeneroInput | UsuarioGeneroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: UsuarioGeneroCreateManyGeneroInputEnvelope
    set?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    disconnect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    delete?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
    update?: UsuarioGeneroUpdateWithWhereUniqueWithoutGeneroInput | UsuarioGeneroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: UsuarioGeneroUpdateManyWithWhereWithoutGeneroInput | UsuarioGeneroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: UsuarioGeneroScalarWhereInput | UsuarioGeneroScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutGenerosInput = {
    create?: XOR<UsuarioCreateWithoutGenerosInput, UsuarioUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGenerosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type GeneroCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<GeneroCreateWithoutUsuariosInput, GeneroUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutUsuariosInput
    connect?: GeneroWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutGenerosNestedInput = {
    create?: XOR<UsuarioCreateWithoutGenerosInput, UsuarioUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutGenerosInput
    upsert?: UsuarioUpsertWithoutGenerosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutGenerosInput, UsuarioUpdateWithoutGenerosInput>, UsuarioUncheckedUpdateWithoutGenerosInput>
  }

  export type GeneroUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<GeneroCreateWithoutUsuariosInput, GeneroUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutUsuariosInput
    upsert?: GeneroUpsertWithoutUsuariosInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutUsuariosInput, GeneroUpdateWithoutUsuariosInput>, GeneroUncheckedUpdateWithoutUsuariosInput>
  }

  export type UsuarioCreateNestedOneWithoutReseñasInput = {
    create?: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReseñasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneRequiredWithoutReseñasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReseñasInput
    upsert?: UsuarioUpsertWithoutReseñasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReseñasInput, UsuarioUpdateWithoutReseñasInput>, UsuarioUncheckedUpdateWithoutReseñasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UsuarioGeneroCreateWithoutUsuarioInput = {
    tipo: string
    genero: GeneroCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioGeneroUncheckedCreateWithoutUsuarioInput = {
    id?: number
    generoId: number
    tipo: string
  }

  export type UsuarioGeneroCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioGeneroWhereUniqueInput
    create: XOR<UsuarioGeneroCreateWithoutUsuarioInput, UsuarioGeneroUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioGeneroCreateManyUsuarioInputEnvelope = {
    data: UsuarioGeneroCreateManyUsuarioInput | UsuarioGeneroCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReseñaCreateWithoutUserInput = {
    id?: string
    titulo: string
    contenido: string
    estrellas: number
    name: string
    artist: string
    album?: string | null
    genre?: string | null
    coverUrl?: string | null
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReseñaUncheckedCreateWithoutUserInput = {
    id?: string
    titulo: string
    contenido: string
    estrellas: number
    name: string
    artist: string
    album?: string | null
    genre?: string | null
    coverUrl?: string | null
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReseñaCreateOrConnectWithoutUserInput = {
    where: ReseñaWhereUniqueInput
    create: XOR<ReseñaCreateWithoutUserInput, ReseñaUncheckedCreateWithoutUserInput>
  }

  export type ReseñaCreateManyUserInputEnvelope = {
    data: ReseñaCreateManyUserInput | ReseñaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioGeneroUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioGeneroWhereUniqueInput
    update: XOR<UsuarioGeneroUpdateWithoutUsuarioInput, UsuarioGeneroUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioGeneroCreateWithoutUsuarioInput, UsuarioGeneroUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioGeneroUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioGeneroWhereUniqueInput
    data: XOR<UsuarioGeneroUpdateWithoutUsuarioInput, UsuarioGeneroUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioGeneroUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioGeneroScalarWhereInput
    data: XOR<UsuarioGeneroUpdateManyMutationInput, UsuarioGeneroUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioGeneroScalarWhereInput = {
    AND?: UsuarioGeneroScalarWhereInput | UsuarioGeneroScalarWhereInput[]
    OR?: UsuarioGeneroScalarWhereInput[]
    NOT?: UsuarioGeneroScalarWhereInput | UsuarioGeneroScalarWhereInput[]
    id?: IntFilter<"UsuarioGenero"> | number
    usuarioId?: IntFilter<"UsuarioGenero"> | number
    generoId?: IntFilter<"UsuarioGenero"> | number
    tipo?: StringFilter<"UsuarioGenero"> | string
  }

  export type ReseñaUpsertWithWhereUniqueWithoutUserInput = {
    where: ReseñaWhereUniqueInput
    update: XOR<ReseñaUpdateWithoutUserInput, ReseñaUncheckedUpdateWithoutUserInput>
    create: XOR<ReseñaCreateWithoutUserInput, ReseñaUncheckedCreateWithoutUserInput>
  }

  export type ReseñaUpdateWithWhereUniqueWithoutUserInput = {
    where: ReseñaWhereUniqueInput
    data: XOR<ReseñaUpdateWithoutUserInput, ReseñaUncheckedUpdateWithoutUserInput>
  }

  export type ReseñaUpdateManyWithWhereWithoutUserInput = {
    where: ReseñaScalarWhereInput
    data: XOR<ReseñaUpdateManyMutationInput, ReseñaUncheckedUpdateManyWithoutUserInput>
  }

  export type ReseñaScalarWhereInput = {
    AND?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
    OR?: ReseñaScalarWhereInput[]
    NOT?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
    id?: StringFilter<"Reseña"> | string
    titulo?: StringFilter<"Reseña"> | string
    contenido?: StringFilter<"Reseña"> | string
    estrellas?: IntFilter<"Reseña"> | number
    name?: StringFilter<"Reseña"> | string
    artist?: StringFilter<"Reseña"> | string
    album?: StringNullableFilter<"Reseña"> | string | null
    genre?: StringNullableFilter<"Reseña"> | string | null
    coverUrl?: StringNullableFilter<"Reseña"> | string | null
    tipo?: StringFilter<"Reseña"> | string
    userId?: IntFilter<"Reseña"> | number
    createdAt?: DateTimeFilter<"Reseña"> | Date | string
    updatedAt?: DateTimeFilter<"Reseña"> | Date | string
  }

  export type UsuarioGeneroCreateWithoutGeneroInput = {
    tipo: string
    usuario: UsuarioCreateNestedOneWithoutGenerosInput
  }

  export type UsuarioGeneroUncheckedCreateWithoutGeneroInput = {
    id?: number
    usuarioId: number
    tipo: string
  }

  export type UsuarioGeneroCreateOrConnectWithoutGeneroInput = {
    where: UsuarioGeneroWhereUniqueInput
    create: XOR<UsuarioGeneroCreateWithoutGeneroInput, UsuarioGeneroUncheckedCreateWithoutGeneroInput>
  }

  export type UsuarioGeneroCreateManyGeneroInputEnvelope = {
    data: UsuarioGeneroCreateManyGeneroInput | UsuarioGeneroCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioGeneroUpsertWithWhereUniqueWithoutGeneroInput = {
    where: UsuarioGeneroWhereUniqueInput
    update: XOR<UsuarioGeneroUpdateWithoutGeneroInput, UsuarioGeneroUncheckedUpdateWithoutGeneroInput>
    create: XOR<UsuarioGeneroCreateWithoutGeneroInput, UsuarioGeneroUncheckedCreateWithoutGeneroInput>
  }

  export type UsuarioGeneroUpdateWithWhereUniqueWithoutGeneroInput = {
    where: UsuarioGeneroWhereUniqueInput
    data: XOR<UsuarioGeneroUpdateWithoutGeneroInput, UsuarioGeneroUncheckedUpdateWithoutGeneroInput>
  }

  export type UsuarioGeneroUpdateManyWithWhereWithoutGeneroInput = {
    where: UsuarioGeneroScalarWhereInput
    data: XOR<UsuarioGeneroUpdateManyMutationInput, UsuarioGeneroUncheckedUpdateManyWithoutGeneroInput>
  }

  export type UsuarioCreateWithoutGenerosInput = {
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    reseñas?: ReseñaCreateNestedManyWithoutUserInput
  }

  export type UsuarioUncheckedCreateWithoutGenerosInput = {
    id?: number
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsuarioCreateOrConnectWithoutGenerosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGenerosInput, UsuarioUncheckedCreateWithoutGenerosInput>
  }

  export type GeneroCreateWithoutUsuariosInput = {
    nombre: string
  }

  export type GeneroUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
  }

  export type GeneroCreateOrConnectWithoutUsuariosInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutUsuariosInput, GeneroUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioUpsertWithoutGenerosInput = {
    update: XOR<UsuarioUpdateWithoutGenerosInput, UsuarioUncheckedUpdateWithoutGenerosInput>
    create: XOR<UsuarioCreateWithoutGenerosInput, UsuarioUncheckedCreateWithoutGenerosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutGenerosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutGenerosInput, UsuarioUncheckedUpdateWithoutGenerosInput>
  }

  export type UsuarioUpdateWithoutGenerosInput = {
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    reseñas?: ReseñaUpdateManyWithoutUserNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGenerosInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    reseñas?: ReseñaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GeneroUpsertWithoutUsuariosInput = {
    update: XOR<GeneroUpdateWithoutUsuariosInput, GeneroUncheckedUpdateWithoutUsuariosInput>
    create: XOR<GeneroCreateWithoutUsuariosInput, GeneroUncheckedCreateWithoutUsuariosInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutUsuariosInput, GeneroUncheckedUpdateWithoutUsuariosInput>
  }

  export type GeneroUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateWithoutReseñasInput = {
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    generos?: UsuarioGeneroCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReseñasInput = {
    id?: number
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    generos?: UsuarioGeneroUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReseñasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
  }

  export type UsuarioUpsertWithoutReseñasInput = {
    update: XOR<UsuarioUpdateWithoutReseñasInput, UsuarioUncheckedUpdateWithoutReseñasInput>
    create: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReseñasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReseñasInput, UsuarioUncheckedUpdateWithoutReseñasInput>
  }

  export type UsuarioUpdateWithoutReseñasInput = {
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: UsuarioGeneroUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReseñasInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: UsuarioGeneroUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioGeneroCreateManyUsuarioInput = {
    id?: number
    generoId: number
    tipo: string
  }

  export type ReseñaCreateManyUserInput = {
    id?: string
    titulo: string
    contenido: string
    estrellas: number
    name: string
    artist: string
    album?: string | null
    genre?: string | null
    coverUrl?: string | null
    tipo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioGeneroUpdateWithoutUsuarioInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    genero?: GeneroUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioGeneroUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioGeneroUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type ReseñaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    estrellas?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReseñaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    estrellas?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReseñaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    estrellas?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    artist?: StringFieldUpdateOperationsInput | string
    album?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioGeneroCreateManyGeneroInput = {
    id?: number
    usuarioId: number
    tipo: string
  }

  export type UsuarioGeneroUpdateWithoutGeneroInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutGenerosNestedInput
  }

  export type UsuarioGeneroUncheckedUpdateWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioGeneroUncheckedUpdateManyWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
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