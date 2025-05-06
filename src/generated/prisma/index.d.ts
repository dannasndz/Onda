
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
 * Model Artista
 * 
 */
export type Artista = $Result.DefaultSelection<Prisma.$ArtistaPayload>
/**
 * Model ArtistaGenero
 * 
 */
export type ArtistaGenero = $Result.DefaultSelection<Prisma.$ArtistaGeneroPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model AlbumGenero
 * 
 */
export type AlbumGenero = $Result.DefaultSelection<Prisma.$AlbumGeneroPayload>
/**
 * Model Cancion
 * 
 */
export type Cancion = $Result.DefaultSelection<Prisma.$CancionPayload>
/**
 * Model CancionGenero
 * 
 */
export type CancionGenero = $Result.DefaultSelection<Prisma.$CancionGeneroPayload>
/**
 * Model Reseña
 * 
 */
export type Reseña = $Result.DefaultSelection<Prisma.$ReseñaPayload>
/**
 * Model Calificacion
 * 
 */
export type Calificacion = $Result.DefaultSelection<Prisma.$CalificacionPayload>
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
   * `prisma.artista`: Exposes CRUD operations for the **Artista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artistas
    * const artistas = await prisma.artista.findMany()
    * ```
    */
  get artista(): Prisma.ArtistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artistaGenero`: Exposes CRUD operations for the **ArtistaGenero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistaGeneros
    * const artistaGeneros = await prisma.artistaGenero.findMany()
    * ```
    */
  get artistaGenero(): Prisma.ArtistaGeneroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.albumGenero`: Exposes CRUD operations for the **AlbumGenero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumGeneros
    * const albumGeneros = await prisma.albumGenero.findMany()
    * ```
    */
  get albumGenero(): Prisma.AlbumGeneroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cancion`: Exposes CRUD operations for the **Cancion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cancions
    * const cancions = await prisma.cancion.findMany()
    * ```
    */
  get cancion(): Prisma.CancionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cancionGenero`: Exposes CRUD operations for the **CancionGenero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CancionGeneros
    * const cancionGeneros = await prisma.cancionGenero.findMany()
    * ```
    */
  get cancionGenero(): Prisma.CancionGeneroDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.calificacion`: Exposes CRUD operations for the **Calificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calificacions
    * const calificacions = await prisma.calificacion.findMany()
    * ```
    */
  get calificacion(): Prisma.CalificacionDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Artista: 'Artista',
    ArtistaGenero: 'ArtistaGenero',
    Album: 'Album',
    AlbumGenero: 'AlbumGenero',
    Cancion: 'Cancion',
    CancionGenero: 'CancionGenero',
    Reseña: 'Reseña',
    Calificacion: 'Calificacion',
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
      modelProps: "usuario" | "genero" | "usuarioGenero" | "artista" | "artistaGenero" | "album" | "albumGenero" | "cancion" | "cancionGenero" | "reseña" | "calificacion" | "testMusical"
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
      Artista: {
        payload: Prisma.$ArtistaPayload<ExtArgs>
        fields: Prisma.ArtistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          findFirst: {
            args: Prisma.ArtistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          findMany: {
            args: Prisma.ArtistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>[]
          }
          create: {
            args: Prisma.ArtistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          createMany: {
            args: Prisma.ArtistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>[]
          }
          delete: {
            args: Prisma.ArtistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          update: {
            args: Prisma.ArtistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          deleteMany: {
            args: Prisma.ArtistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>[]
          }
          upsert: {
            args: Prisma.ArtistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          aggregate: {
            args: Prisma.ArtistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtista>
          }
          groupBy: {
            args: Prisma.ArtistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistaCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistaCountAggregateOutputType> | number
          }
        }
      }
      ArtistaGenero: {
        payload: Prisma.$ArtistaGeneroPayload<ExtArgs>
        fields: Prisma.ArtistaGeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistaGeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistaGeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload>
          }
          findFirst: {
            args: Prisma.ArtistaGeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistaGeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload>
          }
          findMany: {
            args: Prisma.ArtistaGeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload>[]
          }
          create: {
            args: Prisma.ArtistaGeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload>
          }
          createMany: {
            args: Prisma.ArtistaGeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistaGeneroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload>[]
          }
          delete: {
            args: Prisma.ArtistaGeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload>
          }
          update: {
            args: Prisma.ArtistaGeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload>
          }
          deleteMany: {
            args: Prisma.ArtistaGeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistaGeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistaGeneroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload>[]
          }
          upsert: {
            args: Prisma.ArtistaGeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaGeneroPayload>
          }
          aggregate: {
            args: Prisma.ArtistaGeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtistaGenero>
          }
          groupBy: {
            args: Prisma.ArtistaGeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistaGeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistaGeneroCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistaGeneroCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      AlbumGenero: {
        payload: Prisma.$AlbumGeneroPayload<ExtArgs>
        fields: Prisma.AlbumGeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumGeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumGeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload>
          }
          findFirst: {
            args: Prisma.AlbumGeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumGeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload>
          }
          findMany: {
            args: Prisma.AlbumGeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload>[]
          }
          create: {
            args: Prisma.AlbumGeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload>
          }
          createMany: {
            args: Prisma.AlbumGeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumGeneroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload>[]
          }
          delete: {
            args: Prisma.AlbumGeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload>
          }
          update: {
            args: Prisma.AlbumGeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload>
          }
          deleteMany: {
            args: Prisma.AlbumGeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumGeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumGeneroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload>[]
          }
          upsert: {
            args: Prisma.AlbumGeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumGeneroPayload>
          }
          aggregate: {
            args: Prisma.AlbumGeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbumGenero>
          }
          groupBy: {
            args: Prisma.AlbumGeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumGeneroCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumGeneroCountAggregateOutputType> | number
          }
        }
      }
      Cancion: {
        payload: Prisma.$CancionPayload<ExtArgs>
        fields: Prisma.CancionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CancionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CancionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload>
          }
          findFirst: {
            args: Prisma.CancionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CancionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload>
          }
          findMany: {
            args: Prisma.CancionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload>[]
          }
          create: {
            args: Prisma.CancionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload>
          }
          createMany: {
            args: Prisma.CancionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CancionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload>[]
          }
          delete: {
            args: Prisma.CancionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload>
          }
          update: {
            args: Prisma.CancionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload>
          }
          deleteMany: {
            args: Prisma.CancionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CancionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CancionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload>[]
          }
          upsert: {
            args: Prisma.CancionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionPayload>
          }
          aggregate: {
            args: Prisma.CancionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCancion>
          }
          groupBy: {
            args: Prisma.CancionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CancionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CancionCountArgs<ExtArgs>
            result: $Utils.Optional<CancionCountAggregateOutputType> | number
          }
        }
      }
      CancionGenero: {
        payload: Prisma.$CancionGeneroPayload<ExtArgs>
        fields: Prisma.CancionGeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CancionGeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CancionGeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload>
          }
          findFirst: {
            args: Prisma.CancionGeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CancionGeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload>
          }
          findMany: {
            args: Prisma.CancionGeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload>[]
          }
          create: {
            args: Prisma.CancionGeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload>
          }
          createMany: {
            args: Prisma.CancionGeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CancionGeneroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload>[]
          }
          delete: {
            args: Prisma.CancionGeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload>
          }
          update: {
            args: Prisma.CancionGeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload>
          }
          deleteMany: {
            args: Prisma.CancionGeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CancionGeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CancionGeneroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload>[]
          }
          upsert: {
            args: Prisma.CancionGeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CancionGeneroPayload>
          }
          aggregate: {
            args: Prisma.CancionGeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCancionGenero>
          }
          groupBy: {
            args: Prisma.CancionGeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<CancionGeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.CancionGeneroCountArgs<ExtArgs>
            result: $Utils.Optional<CancionGeneroCountAggregateOutputType> | number
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
      Calificacion: {
        payload: Prisma.$CalificacionPayload<ExtArgs>
        fields: Prisma.CalificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          findFirst: {
            args: Prisma.CalificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          findMany: {
            args: Prisma.CalificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>[]
          }
          create: {
            args: Prisma.CalificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          createMany: {
            args: Prisma.CalificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>[]
          }
          delete: {
            args: Prisma.CalificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          update: {
            args: Prisma.CalificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          deleteMany: {
            args: Prisma.CalificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>[]
          }
          upsert: {
            args: Prisma.CalificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalificacionPayload>
          }
          aggregate: {
            args: Prisma.CalificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalificacion>
          }
          groupBy: {
            args: Prisma.CalificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalificacionCountArgs<ExtArgs>
            result: $Utils.Optional<CalificacionCountAggregateOutputType> | number
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
    artista?: ArtistaOmit
    artistaGenero?: ArtistaGeneroOmit
    album?: AlbumOmit
    albumGenero?: AlbumGeneroOmit
    cancion?: CancionOmit
    cancionGenero?: CancionGeneroOmit
    reseña?: ReseñaOmit
    calificacion?: CalificacionOmit
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
    calificaciones: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | UsuarioCountOutputTypeCountGenerosArgs
    reseñas?: boolean | UsuarioCountOutputTypeCountReseñasArgs
    calificaciones?: boolean | UsuarioCountOutputTypeCountCalificacionesArgs
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
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCalificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalificacionWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    usuarios: number
    artistas: number
    albums: number
    canciones: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | GeneroCountOutputTypeCountUsuariosArgs
    artistas?: boolean | GeneroCountOutputTypeCountArtistasArgs
    albums?: boolean | GeneroCountOutputTypeCountAlbumsArgs
    canciones?: boolean | GeneroCountOutputTypeCountCancionesArgs
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
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountArtistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistaGeneroWhereInput
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumGeneroWhereInput
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountCancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancionGeneroWhereInput
  }


  /**
   * Count Type ArtistaCountOutputType
   */

  export type ArtistaCountOutputType = {
    generos: number
    albums: number
    canciones: number
  }

  export type ArtistaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | ArtistaCountOutputTypeCountGenerosArgs
    albums?: boolean | ArtistaCountOutputTypeCountAlbumsArgs
    canciones?: boolean | ArtistaCountOutputTypeCountCancionesArgs
  }

  // Custom InputTypes
  /**
   * ArtistaCountOutputType without action
   */
  export type ArtistaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaCountOutputType
     */
    select?: ArtistaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistaCountOutputType without action
   */
  export type ArtistaCountOutputTypeCountGenerosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistaGeneroWhereInput
  }

  /**
   * ArtistaCountOutputType without action
   */
  export type ArtistaCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }

  /**
   * ArtistaCountOutputType without action
   */
  export type ArtistaCountOutputTypeCountCancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancionWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    canciones: number
    generos: number
    reseñas: number
    calificaciones: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    canciones?: boolean | AlbumCountOutputTypeCountCancionesArgs
    generos?: boolean | AlbumCountOutputTypeCountGenerosArgs
    reseñas?: boolean | AlbumCountOutputTypeCountReseñasArgs
    calificaciones?: boolean | AlbumCountOutputTypeCountCalificacionesArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountCancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancionWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountGenerosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumGeneroWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountReseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReseñaWhereInput
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountCalificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalificacionWhereInput
  }


  /**
   * Count Type CancionCountOutputType
   */

  export type CancionCountOutputType = {
    generos: number
    reseñas: number
    calificaciones: number
  }

  export type CancionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | CancionCountOutputTypeCountGenerosArgs
    reseñas?: boolean | CancionCountOutputTypeCountReseñasArgs
    calificaciones?: boolean | CancionCountOutputTypeCountCalificacionesArgs
  }

  // Custom InputTypes
  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionCountOutputType
     */
    select?: CancionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeCountGenerosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancionGeneroWhereInput
  }

  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeCountReseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReseñaWhereInput
  }

  /**
   * CancionCountOutputType without action
   */
  export type CancionCountOutputTypeCountCalificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalificacionWhereInput
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
    calificaciones?: boolean | Usuario$calificacionesArgs<ExtArgs>
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
    calificaciones?: boolean | Usuario$calificacionesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      generos: Prisma.$UsuarioGeneroPayload<ExtArgs>[]
      reseñas: Prisma.$ReseñaPayload<ExtArgs>[]
      calificaciones: Prisma.$CalificacionPayload<ExtArgs>[]
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
    calificaciones<T extends Usuario$calificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$calificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Usuario.calificaciones
   */
  export type Usuario$calificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    where?: CalificacionWhereInput
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    cursor?: CalificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
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
    artistas?: boolean | Genero$artistasArgs<ExtArgs>
    albums?: boolean | Genero$albumsArgs<ExtArgs>
    canciones?: boolean | Genero$cancionesArgs<ExtArgs>
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
    artistas?: boolean | Genero$artistasArgs<ExtArgs>
    albums?: boolean | Genero$albumsArgs<ExtArgs>
    canciones?: boolean | Genero$cancionesArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GeneroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GeneroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genero"
    objects: {
      usuarios: Prisma.$UsuarioGeneroPayload<ExtArgs>[]
      artistas: Prisma.$ArtistaGeneroPayload<ExtArgs>[]
      albums: Prisma.$AlbumGeneroPayload<ExtArgs>[]
      canciones: Prisma.$CancionGeneroPayload<ExtArgs>[]
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
    artistas<T extends Genero$artistasArgs<ExtArgs> = {}>(args?: Subset<T, Genero$artistasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albums<T extends Genero$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Genero$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    canciones<T extends Genero$cancionesArgs<ExtArgs> = {}>(args?: Subset<T, Genero$cancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Genero.artistas
   */
  export type Genero$artistasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    where?: ArtistaGeneroWhereInput
    orderBy?: ArtistaGeneroOrderByWithRelationInput | ArtistaGeneroOrderByWithRelationInput[]
    cursor?: ArtistaGeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistaGeneroScalarFieldEnum | ArtistaGeneroScalarFieldEnum[]
  }

  /**
   * Genero.albums
   */
  export type Genero$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    where?: AlbumGeneroWhereInput
    orderBy?: AlbumGeneroOrderByWithRelationInput | AlbumGeneroOrderByWithRelationInput[]
    cursor?: AlbumGeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumGeneroScalarFieldEnum | AlbumGeneroScalarFieldEnum[]
  }

  /**
   * Genero.canciones
   */
  export type Genero$cancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    where?: CancionGeneroWhereInput
    orderBy?: CancionGeneroOrderByWithRelationInput | CancionGeneroOrderByWithRelationInput[]
    cursor?: CancionGeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CancionGeneroScalarFieldEnum | CancionGeneroScalarFieldEnum[]
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
  }

  export type UsuarioGeneroMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    generoId: number | null
  }

  export type UsuarioGeneroCountAggregateOutputType = {
    id: number
    usuarioId: number
    generoId: number
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
  }

  export type UsuarioGeneroMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    generoId?: true
  }

  export type UsuarioGeneroCountAggregateInputType = {
    id?: true
    usuarioId?: true
    generoId?: true
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
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioGenero"]>

  export type UsuarioGeneroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    generoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioGenero"]>

  export type UsuarioGeneroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    generoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioGenero"]>

  export type UsuarioGeneroSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    generoId?: boolean
  }

  export type UsuarioGeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "generoId", ExtArgs["result"]["usuarioGenero"]>
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
   * Model Artista
   */

  export type AggregateArtista = {
    _count: ArtistaCountAggregateOutputType | null
    _avg: ArtistaAvgAggregateOutputType | null
    _sum: ArtistaSumAggregateOutputType | null
    _min: ArtistaMinAggregateOutputType | null
    _max: ArtistaMaxAggregateOutputType | null
  }

  export type ArtistaAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistaSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    spotifyId: string | null
    imagenUrl: string | null
  }

  export type ArtistaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    spotifyId: string | null
    imagenUrl: string | null
  }

  export type ArtistaCountAggregateOutputType = {
    id: number
    nombre: number
    spotifyId: number
    imagenUrl: number
    _all: number
  }


  export type ArtistaAvgAggregateInputType = {
    id?: true
  }

  export type ArtistaSumAggregateInputType = {
    id?: true
  }

  export type ArtistaMinAggregateInputType = {
    id?: true
    nombre?: true
    spotifyId?: true
    imagenUrl?: true
  }

  export type ArtistaMaxAggregateInputType = {
    id?: true
    nombre?: true
    spotifyId?: true
    imagenUrl?: true
  }

  export type ArtistaCountAggregateInputType = {
    id?: true
    nombre?: true
    spotifyId?: true
    imagenUrl?: true
    _all?: true
  }

  export type ArtistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artista to aggregate.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artistas
    **/
    _count?: true | ArtistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistaMaxAggregateInputType
  }

  export type GetArtistaAggregateType<T extends ArtistaAggregateArgs> = {
        [P in keyof T & keyof AggregateArtista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtista[P]>
      : GetScalarType<T[P], AggregateArtista[P]>
  }




  export type ArtistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistaWhereInput
    orderBy?: ArtistaOrderByWithAggregationInput | ArtistaOrderByWithAggregationInput[]
    by: ArtistaScalarFieldEnum[] | ArtistaScalarFieldEnum
    having?: ArtistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistaCountAggregateInputType | true
    _avg?: ArtistaAvgAggregateInputType
    _sum?: ArtistaSumAggregateInputType
    _min?: ArtistaMinAggregateInputType
    _max?: ArtistaMaxAggregateInputType
  }

  export type ArtistaGroupByOutputType = {
    id: number
    nombre: string
    spotifyId: string
    imagenUrl: string | null
    _count: ArtistaCountAggregateOutputType | null
    _avg: ArtistaAvgAggregateOutputType | null
    _sum: ArtistaSumAggregateOutputType | null
    _min: ArtistaMinAggregateOutputType | null
    _max: ArtistaMaxAggregateOutputType | null
  }

  type GetArtistaGroupByPayload<T extends ArtistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistaGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistaGroupByOutputType[P]>
        }
      >
    >


  export type ArtistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    spotifyId?: boolean
    imagenUrl?: boolean
    generos?: boolean | Artista$generosArgs<ExtArgs>
    albums?: boolean | Artista$albumsArgs<ExtArgs>
    canciones?: boolean | Artista$cancionesArgs<ExtArgs>
    _count?: boolean | ArtistaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artista"]>

  export type ArtistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    spotifyId?: boolean
    imagenUrl?: boolean
  }, ExtArgs["result"]["artista"]>

  export type ArtistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    spotifyId?: boolean
    imagenUrl?: boolean
  }, ExtArgs["result"]["artista"]>

  export type ArtistaSelectScalar = {
    id?: boolean
    nombre?: boolean
    spotifyId?: boolean
    imagenUrl?: boolean
  }

  export type ArtistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "spotifyId" | "imagenUrl", ExtArgs["result"]["artista"]>
  export type ArtistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | Artista$generosArgs<ExtArgs>
    albums?: boolean | Artista$albumsArgs<ExtArgs>
    canciones?: boolean | Artista$cancionesArgs<ExtArgs>
    _count?: boolean | ArtistaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artista"
    objects: {
      generos: Prisma.$ArtistaGeneroPayload<ExtArgs>[]
      albums: Prisma.$AlbumPayload<ExtArgs>[]
      canciones: Prisma.$CancionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      spotifyId: string
      imagenUrl: string | null
    }, ExtArgs["result"]["artista"]>
    composites: {}
  }

  type ArtistaGetPayload<S extends boolean | null | undefined | ArtistaDefaultArgs> = $Result.GetResult<Prisma.$ArtistaPayload, S>

  type ArtistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistaCountAggregateInputType | true
    }

  export interface ArtistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artista'], meta: { name: 'Artista' } }
    /**
     * Find zero or one Artista that matches the filter.
     * @param {ArtistaFindUniqueArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistaFindUniqueArgs>(args: SelectSubset<T, ArtistaFindUniqueArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistaFindUniqueOrThrowArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaFindFirstArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistaFindFirstArgs>(args?: SelectSubset<T, ArtistaFindFirstArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaFindFirstOrThrowArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artistas
     * const artistas = await prisma.artista.findMany()
     * 
     * // Get first 10 Artistas
     * const artistas = await prisma.artista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistaWithIdOnly = await prisma.artista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistaFindManyArgs>(args?: SelectSubset<T, ArtistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artista.
     * @param {ArtistaCreateArgs} args - Arguments to create a Artista.
     * @example
     * // Create one Artista
     * const Artista = await prisma.artista.create({
     *   data: {
     *     // ... data to create a Artista
     *   }
     * })
     * 
     */
    create<T extends ArtistaCreateArgs>(args: SelectSubset<T, ArtistaCreateArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artistas.
     * @param {ArtistaCreateManyArgs} args - Arguments to create many Artistas.
     * @example
     * // Create many Artistas
     * const artista = await prisma.artista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistaCreateManyArgs>(args?: SelectSubset<T, ArtistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artistas and returns the data saved in the database.
     * @param {ArtistaCreateManyAndReturnArgs} args - Arguments to create many Artistas.
     * @example
     * // Create many Artistas
     * const artista = await prisma.artista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artistas and only return the `id`
     * const artistaWithIdOnly = await prisma.artista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artista.
     * @param {ArtistaDeleteArgs} args - Arguments to delete one Artista.
     * @example
     * // Delete one Artista
     * const Artista = await prisma.artista.delete({
     *   where: {
     *     // ... filter to delete one Artista
     *   }
     * })
     * 
     */
    delete<T extends ArtistaDeleteArgs>(args: SelectSubset<T, ArtistaDeleteArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artista.
     * @param {ArtistaUpdateArgs} args - Arguments to update one Artista.
     * @example
     * // Update one Artista
     * const artista = await prisma.artista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistaUpdateArgs>(args: SelectSubset<T, ArtistaUpdateArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artistas.
     * @param {ArtistaDeleteManyArgs} args - Arguments to filter Artistas to delete.
     * @example
     * // Delete a few Artistas
     * const { count } = await prisma.artista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistaDeleteManyArgs>(args?: SelectSubset<T, ArtistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artistas
     * const artista = await prisma.artista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistaUpdateManyArgs>(args: SelectSubset<T, ArtistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artistas and returns the data updated in the database.
     * @param {ArtistaUpdateManyAndReturnArgs} args - Arguments to update many Artistas.
     * @example
     * // Update many Artistas
     * const artista = await prisma.artista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artistas and only return the `id`
     * const artistaWithIdOnly = await prisma.artista.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artista.
     * @param {ArtistaUpsertArgs} args - Arguments to update or create a Artista.
     * @example
     * // Update or create a Artista
     * const artista = await prisma.artista.upsert({
     *   create: {
     *     // ... data to create a Artista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artista we want to update
     *   }
     * })
     */
    upsert<T extends ArtistaUpsertArgs>(args: SelectSubset<T, ArtistaUpsertArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaCountArgs} args - Arguments to filter Artistas to count.
     * @example
     * // Count the number of Artistas
     * const count = await prisma.artista.count({
     *   where: {
     *     // ... the filter for the Artistas we want to count
     *   }
     * })
    **/
    count<T extends ArtistaCountArgs>(
      args?: Subset<T, ArtistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistaAggregateArgs>(args: Subset<T, ArtistaAggregateArgs>): Prisma.PrismaPromise<GetArtistaAggregateType<T>>

    /**
     * Group by Artista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGroupByArgs} args - Group by arguments.
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
      T extends ArtistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistaGroupByArgs['orderBy'] }
        : { orderBy?: ArtistaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artista model
   */
  readonly fields: ArtistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generos<T extends Artista$generosArgs<ExtArgs> = {}>(args?: Subset<T, Artista$generosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    albums<T extends Artista$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Artista$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    canciones<T extends Artista$cancionesArgs<ExtArgs> = {}>(args?: Subset<T, Artista$cancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Artista model
   */
  interface ArtistaFieldRefs {
    readonly id: FieldRef<"Artista", 'Int'>
    readonly nombre: FieldRef<"Artista", 'String'>
    readonly spotifyId: FieldRef<"Artista", 'String'>
    readonly imagenUrl: FieldRef<"Artista", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artista findUnique
   */
  export type ArtistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista findUniqueOrThrow
   */
  export type ArtistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista findFirst
   */
  export type ArtistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artistas.
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artistas.
     */
    distinct?: ArtistaScalarFieldEnum | ArtistaScalarFieldEnum[]
  }

  /**
   * Artista findFirstOrThrow
   */
  export type ArtistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artistas.
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artistas.
     */
    distinct?: ArtistaScalarFieldEnum | ArtistaScalarFieldEnum[]
  }

  /**
   * Artista findMany
   */
  export type ArtistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artistas to fetch.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artistas.
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    distinct?: ArtistaScalarFieldEnum | ArtistaScalarFieldEnum[]
  }

  /**
   * Artista create
   */
  export type ArtistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * The data needed to create a Artista.
     */
    data: XOR<ArtistaCreateInput, ArtistaUncheckedCreateInput>
  }

  /**
   * Artista createMany
   */
  export type ArtistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artistas.
     */
    data: ArtistaCreateManyInput | ArtistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artista createManyAndReturn
   */
  export type ArtistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * The data used to create many Artistas.
     */
    data: ArtistaCreateManyInput | ArtistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artista update
   */
  export type ArtistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * The data needed to update a Artista.
     */
    data: XOR<ArtistaUpdateInput, ArtistaUncheckedUpdateInput>
    /**
     * Choose, which Artista to update.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista updateMany
   */
  export type ArtistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artistas.
     */
    data: XOR<ArtistaUpdateManyMutationInput, ArtistaUncheckedUpdateManyInput>
    /**
     * Filter which Artistas to update
     */
    where?: ArtistaWhereInput
    /**
     * Limit how many Artistas to update.
     */
    limit?: number
  }

  /**
   * Artista updateManyAndReturn
   */
  export type ArtistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * The data used to update Artistas.
     */
    data: XOR<ArtistaUpdateManyMutationInput, ArtistaUncheckedUpdateManyInput>
    /**
     * Filter which Artistas to update
     */
    where?: ArtistaWhereInput
    /**
     * Limit how many Artistas to update.
     */
    limit?: number
  }

  /**
   * Artista upsert
   */
  export type ArtistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * The filter to search for the Artista to update in case it exists.
     */
    where: ArtistaWhereUniqueInput
    /**
     * In case the Artista found by the `where` argument doesn't exist, create a new Artista with this data.
     */
    create: XOR<ArtistaCreateInput, ArtistaUncheckedCreateInput>
    /**
     * In case the Artista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistaUpdateInput, ArtistaUncheckedUpdateInput>
  }

  /**
   * Artista delete
   */
  export type ArtistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter which Artista to delete.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista deleteMany
   */
  export type ArtistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artistas to delete
     */
    where?: ArtistaWhereInput
    /**
     * Limit how many Artistas to delete.
     */
    limit?: number
  }

  /**
   * Artista.generos
   */
  export type Artista$generosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    where?: ArtistaGeneroWhereInput
    orderBy?: ArtistaGeneroOrderByWithRelationInput | ArtistaGeneroOrderByWithRelationInput[]
    cursor?: ArtistaGeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistaGeneroScalarFieldEnum | ArtistaGeneroScalarFieldEnum[]
  }

  /**
   * Artista.albums
   */
  export type Artista$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Artista.canciones
   */
  export type Artista$cancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    where?: CancionWhereInput
    orderBy?: CancionOrderByWithRelationInput | CancionOrderByWithRelationInput[]
    cursor?: CancionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * Artista without action
   */
  export type ArtistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
  }


  /**
   * Model ArtistaGenero
   */

  export type AggregateArtistaGenero = {
    _count: ArtistaGeneroCountAggregateOutputType | null
    _avg: ArtistaGeneroAvgAggregateOutputType | null
    _sum: ArtistaGeneroSumAggregateOutputType | null
    _min: ArtistaGeneroMinAggregateOutputType | null
    _max: ArtistaGeneroMaxAggregateOutputType | null
  }

  export type ArtistaGeneroAvgAggregateOutputType = {
    id: number | null
    artistaId: number | null
    generoId: number | null
  }

  export type ArtistaGeneroSumAggregateOutputType = {
    id: number | null
    artistaId: number | null
    generoId: number | null
  }

  export type ArtistaGeneroMinAggregateOutputType = {
    id: number | null
    artistaId: number | null
    generoId: number | null
  }

  export type ArtistaGeneroMaxAggregateOutputType = {
    id: number | null
    artistaId: number | null
    generoId: number | null
  }

  export type ArtistaGeneroCountAggregateOutputType = {
    id: number
    artistaId: number
    generoId: number
    _all: number
  }


  export type ArtistaGeneroAvgAggregateInputType = {
    id?: true
    artistaId?: true
    generoId?: true
  }

  export type ArtistaGeneroSumAggregateInputType = {
    id?: true
    artistaId?: true
    generoId?: true
  }

  export type ArtistaGeneroMinAggregateInputType = {
    id?: true
    artistaId?: true
    generoId?: true
  }

  export type ArtistaGeneroMaxAggregateInputType = {
    id?: true
    artistaId?: true
    generoId?: true
  }

  export type ArtistaGeneroCountAggregateInputType = {
    id?: true
    artistaId?: true
    generoId?: true
    _all?: true
  }

  export type ArtistaGeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistaGenero to aggregate.
     */
    where?: ArtistaGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistaGeneros to fetch.
     */
    orderBy?: ArtistaGeneroOrderByWithRelationInput | ArtistaGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistaGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistaGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistaGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistaGeneros
    **/
    _count?: true | ArtistaGeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistaGeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistaGeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistaGeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistaGeneroMaxAggregateInputType
  }

  export type GetArtistaGeneroAggregateType<T extends ArtistaGeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistaGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistaGenero[P]>
      : GetScalarType<T[P], AggregateArtistaGenero[P]>
  }




  export type ArtistaGeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistaGeneroWhereInput
    orderBy?: ArtistaGeneroOrderByWithAggregationInput | ArtistaGeneroOrderByWithAggregationInput[]
    by: ArtistaGeneroScalarFieldEnum[] | ArtistaGeneroScalarFieldEnum
    having?: ArtistaGeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistaGeneroCountAggregateInputType | true
    _avg?: ArtistaGeneroAvgAggregateInputType
    _sum?: ArtistaGeneroSumAggregateInputType
    _min?: ArtistaGeneroMinAggregateInputType
    _max?: ArtistaGeneroMaxAggregateInputType
  }

  export type ArtistaGeneroGroupByOutputType = {
    id: number
    artistaId: number
    generoId: number
    _count: ArtistaGeneroCountAggregateOutputType | null
    _avg: ArtistaGeneroAvgAggregateOutputType | null
    _sum: ArtistaGeneroSumAggregateOutputType | null
    _min: ArtistaGeneroMinAggregateOutputType | null
    _max: ArtistaGeneroMaxAggregateOutputType | null
  }

  type GetArtistaGeneroGroupByPayload<T extends ArtistaGeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistaGeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistaGeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistaGeneroGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistaGeneroGroupByOutputType[P]>
        }
      >
    >


  export type ArtistaGeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistaId?: boolean
    generoId?: boolean
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistaGenero"]>

  export type ArtistaGeneroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistaId?: boolean
    generoId?: boolean
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistaGenero"]>

  export type ArtistaGeneroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistaId?: boolean
    generoId?: boolean
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistaGenero"]>

  export type ArtistaGeneroSelectScalar = {
    id?: boolean
    artistaId?: boolean
    generoId?: boolean
  }

  export type ArtistaGeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "artistaId" | "generoId", ExtArgs["result"]["artistaGenero"]>
  export type ArtistaGeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }
  export type ArtistaGeneroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }
  export type ArtistaGeneroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }

  export type $ArtistaGeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistaGenero"
    objects: {
      artista: Prisma.$ArtistaPayload<ExtArgs>
      genero: Prisma.$GeneroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      artistaId: number
      generoId: number
    }, ExtArgs["result"]["artistaGenero"]>
    composites: {}
  }

  type ArtistaGeneroGetPayload<S extends boolean | null | undefined | ArtistaGeneroDefaultArgs> = $Result.GetResult<Prisma.$ArtistaGeneroPayload, S>

  type ArtistaGeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistaGeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistaGeneroCountAggregateInputType | true
    }

  export interface ArtistaGeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistaGenero'], meta: { name: 'ArtistaGenero' } }
    /**
     * Find zero or one ArtistaGenero that matches the filter.
     * @param {ArtistaGeneroFindUniqueArgs} args - Arguments to find a ArtistaGenero
     * @example
     * // Get one ArtistaGenero
     * const artistaGenero = await prisma.artistaGenero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistaGeneroFindUniqueArgs>(args: SelectSubset<T, ArtistaGeneroFindUniqueArgs<ExtArgs>>): Prisma__ArtistaGeneroClient<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtistaGenero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistaGeneroFindUniqueOrThrowArgs} args - Arguments to find a ArtistaGenero
     * @example
     * // Get one ArtistaGenero
     * const artistaGenero = await prisma.artistaGenero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistaGeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistaGeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistaGeneroClient<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistaGenero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGeneroFindFirstArgs} args - Arguments to find a ArtistaGenero
     * @example
     * // Get one ArtistaGenero
     * const artistaGenero = await prisma.artistaGenero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistaGeneroFindFirstArgs>(args?: SelectSubset<T, ArtistaGeneroFindFirstArgs<ExtArgs>>): Prisma__ArtistaGeneroClient<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtistaGenero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGeneroFindFirstOrThrowArgs} args - Arguments to find a ArtistaGenero
     * @example
     * // Get one ArtistaGenero
     * const artistaGenero = await prisma.artistaGenero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistaGeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistaGeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistaGeneroClient<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtistaGeneros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistaGeneros
     * const artistaGeneros = await prisma.artistaGenero.findMany()
     * 
     * // Get first 10 ArtistaGeneros
     * const artistaGeneros = await prisma.artistaGenero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistaGeneroWithIdOnly = await prisma.artistaGenero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistaGeneroFindManyArgs>(args?: SelectSubset<T, ArtistaGeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtistaGenero.
     * @param {ArtistaGeneroCreateArgs} args - Arguments to create a ArtistaGenero.
     * @example
     * // Create one ArtistaGenero
     * const ArtistaGenero = await prisma.artistaGenero.create({
     *   data: {
     *     // ... data to create a ArtistaGenero
     *   }
     * })
     * 
     */
    create<T extends ArtistaGeneroCreateArgs>(args: SelectSubset<T, ArtistaGeneroCreateArgs<ExtArgs>>): Prisma__ArtistaGeneroClient<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtistaGeneros.
     * @param {ArtistaGeneroCreateManyArgs} args - Arguments to create many ArtistaGeneros.
     * @example
     * // Create many ArtistaGeneros
     * const artistaGenero = await prisma.artistaGenero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistaGeneroCreateManyArgs>(args?: SelectSubset<T, ArtistaGeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtistaGeneros and returns the data saved in the database.
     * @param {ArtistaGeneroCreateManyAndReturnArgs} args - Arguments to create many ArtistaGeneros.
     * @example
     * // Create many ArtistaGeneros
     * const artistaGenero = await prisma.artistaGenero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtistaGeneros and only return the `id`
     * const artistaGeneroWithIdOnly = await prisma.artistaGenero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistaGeneroCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistaGeneroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtistaGenero.
     * @param {ArtistaGeneroDeleteArgs} args - Arguments to delete one ArtistaGenero.
     * @example
     * // Delete one ArtistaGenero
     * const ArtistaGenero = await prisma.artistaGenero.delete({
     *   where: {
     *     // ... filter to delete one ArtistaGenero
     *   }
     * })
     * 
     */
    delete<T extends ArtistaGeneroDeleteArgs>(args: SelectSubset<T, ArtistaGeneroDeleteArgs<ExtArgs>>): Prisma__ArtistaGeneroClient<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtistaGenero.
     * @param {ArtistaGeneroUpdateArgs} args - Arguments to update one ArtistaGenero.
     * @example
     * // Update one ArtistaGenero
     * const artistaGenero = await prisma.artistaGenero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistaGeneroUpdateArgs>(args: SelectSubset<T, ArtistaGeneroUpdateArgs<ExtArgs>>): Prisma__ArtistaGeneroClient<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtistaGeneros.
     * @param {ArtistaGeneroDeleteManyArgs} args - Arguments to filter ArtistaGeneros to delete.
     * @example
     * // Delete a few ArtistaGeneros
     * const { count } = await prisma.artistaGenero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistaGeneroDeleteManyArgs>(args?: SelectSubset<T, ArtistaGeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistaGeneros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistaGeneros
     * const artistaGenero = await prisma.artistaGenero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistaGeneroUpdateManyArgs>(args: SelectSubset<T, ArtistaGeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistaGeneros and returns the data updated in the database.
     * @param {ArtistaGeneroUpdateManyAndReturnArgs} args - Arguments to update many ArtistaGeneros.
     * @example
     * // Update many ArtistaGeneros
     * const artistaGenero = await prisma.artistaGenero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtistaGeneros and only return the `id`
     * const artistaGeneroWithIdOnly = await prisma.artistaGenero.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistaGeneroUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistaGeneroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtistaGenero.
     * @param {ArtistaGeneroUpsertArgs} args - Arguments to update or create a ArtistaGenero.
     * @example
     * // Update or create a ArtistaGenero
     * const artistaGenero = await prisma.artistaGenero.upsert({
     *   create: {
     *     // ... data to create a ArtistaGenero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistaGenero we want to update
     *   }
     * })
     */
    upsert<T extends ArtistaGeneroUpsertArgs>(args: SelectSubset<T, ArtistaGeneroUpsertArgs<ExtArgs>>): Prisma__ArtistaGeneroClient<$Result.GetResult<Prisma.$ArtistaGeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtistaGeneros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGeneroCountArgs} args - Arguments to filter ArtistaGeneros to count.
     * @example
     * // Count the number of ArtistaGeneros
     * const count = await prisma.artistaGenero.count({
     *   where: {
     *     // ... the filter for the ArtistaGeneros we want to count
     *   }
     * })
    **/
    count<T extends ArtistaGeneroCountArgs>(
      args?: Subset<T, ArtistaGeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistaGeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistaGenero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistaGeneroAggregateArgs>(args: Subset<T, ArtistaGeneroAggregateArgs>): Prisma.PrismaPromise<GetArtistaGeneroAggregateType<T>>

    /**
     * Group by ArtistaGenero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGeneroGroupByArgs} args - Group by arguments.
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
      T extends ArtistaGeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistaGeneroGroupByArgs['orderBy'] }
        : { orderBy?: ArtistaGeneroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistaGeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistaGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistaGenero model
   */
  readonly fields: ArtistaGeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistaGenero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistaGeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artista<T extends ArtistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistaDefaultArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ArtistaGenero model
   */
  interface ArtistaGeneroFieldRefs {
    readonly id: FieldRef<"ArtistaGenero", 'Int'>
    readonly artistaId: FieldRef<"ArtistaGenero", 'Int'>
    readonly generoId: FieldRef<"ArtistaGenero", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArtistaGenero findUnique
   */
  export type ArtistaGeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    /**
     * Filter, which ArtistaGenero to fetch.
     */
    where: ArtistaGeneroWhereUniqueInput
  }

  /**
   * ArtistaGenero findUniqueOrThrow
   */
  export type ArtistaGeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    /**
     * Filter, which ArtistaGenero to fetch.
     */
    where: ArtistaGeneroWhereUniqueInput
  }

  /**
   * ArtistaGenero findFirst
   */
  export type ArtistaGeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    /**
     * Filter, which ArtistaGenero to fetch.
     */
    where?: ArtistaGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistaGeneros to fetch.
     */
    orderBy?: ArtistaGeneroOrderByWithRelationInput | ArtistaGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistaGeneros.
     */
    cursor?: ArtistaGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistaGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistaGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistaGeneros.
     */
    distinct?: ArtistaGeneroScalarFieldEnum | ArtistaGeneroScalarFieldEnum[]
  }

  /**
   * ArtistaGenero findFirstOrThrow
   */
  export type ArtistaGeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    /**
     * Filter, which ArtistaGenero to fetch.
     */
    where?: ArtistaGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistaGeneros to fetch.
     */
    orderBy?: ArtistaGeneroOrderByWithRelationInput | ArtistaGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistaGeneros.
     */
    cursor?: ArtistaGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistaGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistaGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistaGeneros.
     */
    distinct?: ArtistaGeneroScalarFieldEnum | ArtistaGeneroScalarFieldEnum[]
  }

  /**
   * ArtistaGenero findMany
   */
  export type ArtistaGeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    /**
     * Filter, which ArtistaGeneros to fetch.
     */
    where?: ArtistaGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistaGeneros to fetch.
     */
    orderBy?: ArtistaGeneroOrderByWithRelationInput | ArtistaGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistaGeneros.
     */
    cursor?: ArtistaGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistaGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistaGeneros.
     */
    skip?: number
    distinct?: ArtistaGeneroScalarFieldEnum | ArtistaGeneroScalarFieldEnum[]
  }

  /**
   * ArtistaGenero create
   */
  export type ArtistaGeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistaGenero.
     */
    data: XOR<ArtistaGeneroCreateInput, ArtistaGeneroUncheckedCreateInput>
  }

  /**
   * ArtistaGenero createMany
   */
  export type ArtistaGeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistaGeneros.
     */
    data: ArtistaGeneroCreateManyInput | ArtistaGeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtistaGenero createManyAndReturn
   */
  export type ArtistaGeneroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * The data used to create many ArtistaGeneros.
     */
    data: ArtistaGeneroCreateManyInput | ArtistaGeneroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistaGenero update
   */
  export type ArtistaGeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistaGenero.
     */
    data: XOR<ArtistaGeneroUpdateInput, ArtistaGeneroUncheckedUpdateInput>
    /**
     * Choose, which ArtistaGenero to update.
     */
    where: ArtistaGeneroWhereUniqueInput
  }

  /**
   * ArtistaGenero updateMany
   */
  export type ArtistaGeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistaGeneros.
     */
    data: XOR<ArtistaGeneroUpdateManyMutationInput, ArtistaGeneroUncheckedUpdateManyInput>
    /**
     * Filter which ArtistaGeneros to update
     */
    where?: ArtistaGeneroWhereInput
    /**
     * Limit how many ArtistaGeneros to update.
     */
    limit?: number
  }

  /**
   * ArtistaGenero updateManyAndReturn
   */
  export type ArtistaGeneroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * The data used to update ArtistaGeneros.
     */
    data: XOR<ArtistaGeneroUpdateManyMutationInput, ArtistaGeneroUncheckedUpdateManyInput>
    /**
     * Filter which ArtistaGeneros to update
     */
    where?: ArtistaGeneroWhereInput
    /**
     * Limit how many ArtistaGeneros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtistaGenero upsert
   */
  export type ArtistaGeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistaGenero to update in case it exists.
     */
    where: ArtistaGeneroWhereUniqueInput
    /**
     * In case the ArtistaGenero found by the `where` argument doesn't exist, create a new ArtistaGenero with this data.
     */
    create: XOR<ArtistaGeneroCreateInput, ArtistaGeneroUncheckedCreateInput>
    /**
     * In case the ArtistaGenero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistaGeneroUpdateInput, ArtistaGeneroUncheckedUpdateInput>
  }

  /**
   * ArtistaGenero delete
   */
  export type ArtistaGeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
    /**
     * Filter which ArtistaGenero to delete.
     */
    where: ArtistaGeneroWhereUniqueInput
  }

  /**
   * ArtistaGenero deleteMany
   */
  export type ArtistaGeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistaGeneros to delete
     */
    where?: ArtistaGeneroWhereInput
    /**
     * Limit how many ArtistaGeneros to delete.
     */
    limit?: number
  }

  /**
   * ArtistaGenero without action
   */
  export type ArtistaGeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaGenero
     */
    select?: ArtistaGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtistaGenero
     */
    omit?: ArtistaGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaGeneroInclude<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    totalCanciones: number | null
    artistaId: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    totalCanciones: number | null
    artistaId: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    spotifyId: string | null
    fechaLanzamiento: Date | null
    imagenUrl: string | null
    tipoAlbum: string | null
    totalCanciones: number | null
    artistaId: number | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    spotifyId: string | null
    fechaLanzamiento: Date | null
    imagenUrl: string | null
    tipoAlbum: string | null
    totalCanciones: number | null
    artistaId: number | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    titulo: number
    spotifyId: number
    fechaLanzamiento: number
    imagenUrl: number
    tipoAlbum: number
    totalCanciones: number
    artistaId: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    totalCanciones?: true
    artistaId?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    totalCanciones?: true
    artistaId?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    titulo?: true
    spotifyId?: true
    fechaLanzamiento?: true
    imagenUrl?: true
    tipoAlbum?: true
    totalCanciones?: true
    artistaId?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    titulo?: true
    spotifyId?: true
    fechaLanzamiento?: true
    imagenUrl?: true
    tipoAlbum?: true
    totalCanciones?: true
    artistaId?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    titulo?: true
    spotifyId?: true
    fechaLanzamiento?: true
    imagenUrl?: true
    tipoAlbum?: true
    totalCanciones?: true
    artistaId?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: number
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date
    imagenUrl: string | null
    tipoAlbum: string
    totalCanciones: number
    artistaId: number
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    spotifyId?: boolean
    fechaLanzamiento?: boolean
    imagenUrl?: boolean
    tipoAlbum?: boolean
    totalCanciones?: boolean
    artistaId?: boolean
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    canciones?: boolean | Album$cancionesArgs<ExtArgs>
    generos?: boolean | Album$generosArgs<ExtArgs>
    reseñas?: boolean | Album$reseñasArgs<ExtArgs>
    calificaciones?: boolean | Album$calificacionesArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    spotifyId?: boolean
    fechaLanzamiento?: boolean
    imagenUrl?: boolean
    tipoAlbum?: boolean
    totalCanciones?: boolean
    artistaId?: boolean
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    spotifyId?: boolean
    fechaLanzamiento?: boolean
    imagenUrl?: boolean
    tipoAlbum?: boolean
    totalCanciones?: boolean
    artistaId?: boolean
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    titulo?: boolean
    spotifyId?: boolean
    fechaLanzamiento?: boolean
    imagenUrl?: boolean
    tipoAlbum?: boolean
    totalCanciones?: boolean
    artistaId?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "spotifyId" | "fechaLanzamiento" | "imagenUrl" | "tipoAlbum" | "totalCanciones" | "artistaId", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    canciones?: boolean | Album$cancionesArgs<ExtArgs>
    generos?: boolean | Album$generosArgs<ExtArgs>
    reseñas?: boolean | Album$reseñasArgs<ExtArgs>
    calificaciones?: boolean | Album$calificacionesArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      artista: Prisma.$ArtistaPayload<ExtArgs>
      canciones: Prisma.$CancionPayload<ExtArgs>[]
      generos: Prisma.$AlbumGeneroPayload<ExtArgs>[]
      reseñas: Prisma.$ReseñaPayload<ExtArgs>[]
      calificaciones: Prisma.$CalificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      spotifyId: string
      fechaLanzamiento: Date
      imagenUrl: string | null
      tipoAlbum: string
      totalCanciones: number
      artistaId: number
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artista<T extends ArtistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistaDefaultArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    canciones<T extends Album$cancionesArgs<ExtArgs> = {}>(args?: Subset<T, Album$cancionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generos<T extends Album$generosArgs<ExtArgs> = {}>(args?: Subset<T, Album$generosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reseñas<T extends Album$reseñasArgs<ExtArgs> = {}>(args?: Subset<T, Album$reseñasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calificaciones<T extends Album$calificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Album$calificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'Int'>
    readonly titulo: FieldRef<"Album", 'String'>
    readonly spotifyId: FieldRef<"Album", 'String'>
    readonly fechaLanzamiento: FieldRef<"Album", 'DateTime'>
    readonly imagenUrl: FieldRef<"Album", 'String'>
    readonly tipoAlbum: FieldRef<"Album", 'String'>
    readonly totalCanciones: FieldRef<"Album", 'Int'>
    readonly artistaId: FieldRef<"Album", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.canciones
   */
  export type Album$cancionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    where?: CancionWhereInput
    orderBy?: CancionOrderByWithRelationInput | CancionOrderByWithRelationInput[]
    cursor?: CancionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * Album.generos
   */
  export type Album$generosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    where?: AlbumGeneroWhereInput
    orderBy?: AlbumGeneroOrderByWithRelationInput | AlbumGeneroOrderByWithRelationInput[]
    cursor?: AlbumGeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumGeneroScalarFieldEnum | AlbumGeneroScalarFieldEnum[]
  }

  /**
   * Album.reseñas
   */
  export type Album$reseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Album.calificaciones
   */
  export type Album$calificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    where?: CalificacionWhereInput
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    cursor?: CalificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model AlbumGenero
   */

  export type AggregateAlbumGenero = {
    _count: AlbumGeneroCountAggregateOutputType | null
    _avg: AlbumGeneroAvgAggregateOutputType | null
    _sum: AlbumGeneroSumAggregateOutputType | null
    _min: AlbumGeneroMinAggregateOutputType | null
    _max: AlbumGeneroMaxAggregateOutputType | null
  }

  export type AlbumGeneroAvgAggregateOutputType = {
    id: number | null
    albumId: number | null
    generoId: number | null
  }

  export type AlbumGeneroSumAggregateOutputType = {
    id: number | null
    albumId: number | null
    generoId: number | null
  }

  export type AlbumGeneroMinAggregateOutputType = {
    id: number | null
    albumId: number | null
    generoId: number | null
  }

  export type AlbumGeneroMaxAggregateOutputType = {
    id: number | null
    albumId: number | null
    generoId: number | null
  }

  export type AlbumGeneroCountAggregateOutputType = {
    id: number
    albumId: number
    generoId: number
    _all: number
  }


  export type AlbumGeneroAvgAggregateInputType = {
    id?: true
    albumId?: true
    generoId?: true
  }

  export type AlbumGeneroSumAggregateInputType = {
    id?: true
    albumId?: true
    generoId?: true
  }

  export type AlbumGeneroMinAggregateInputType = {
    id?: true
    albumId?: true
    generoId?: true
  }

  export type AlbumGeneroMaxAggregateInputType = {
    id?: true
    albumId?: true
    generoId?: true
  }

  export type AlbumGeneroCountAggregateInputType = {
    id?: true
    albumId?: true
    generoId?: true
    _all?: true
  }

  export type AlbumGeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumGenero to aggregate.
     */
    where?: AlbumGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumGeneros to fetch.
     */
    orderBy?: AlbumGeneroOrderByWithRelationInput | AlbumGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumGeneros
    **/
    _count?: true | AlbumGeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumGeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumGeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumGeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumGeneroMaxAggregateInputType
  }

  export type GetAlbumGeneroAggregateType<T extends AlbumGeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumGenero[P]>
      : GetScalarType<T[P], AggregateAlbumGenero[P]>
  }




  export type AlbumGeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumGeneroWhereInput
    orderBy?: AlbumGeneroOrderByWithAggregationInput | AlbumGeneroOrderByWithAggregationInput[]
    by: AlbumGeneroScalarFieldEnum[] | AlbumGeneroScalarFieldEnum
    having?: AlbumGeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumGeneroCountAggregateInputType | true
    _avg?: AlbumGeneroAvgAggregateInputType
    _sum?: AlbumGeneroSumAggregateInputType
    _min?: AlbumGeneroMinAggregateInputType
    _max?: AlbumGeneroMaxAggregateInputType
  }

  export type AlbumGeneroGroupByOutputType = {
    id: number
    albumId: number
    generoId: number
    _count: AlbumGeneroCountAggregateOutputType | null
    _avg: AlbumGeneroAvgAggregateOutputType | null
    _sum: AlbumGeneroSumAggregateOutputType | null
    _min: AlbumGeneroMinAggregateOutputType | null
    _max: AlbumGeneroMaxAggregateOutputType | null
  }

  type GetAlbumGeneroGroupByPayload<T extends AlbumGeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGeneroGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGeneroGroupByOutputType[P]>
        }
      >
    >


  export type AlbumGeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    generoId?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumGenero"]>

  export type AlbumGeneroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    generoId?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumGenero"]>

  export type AlbumGeneroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    generoId?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albumGenero"]>

  export type AlbumGeneroSelectScalar = {
    id?: boolean
    albumId?: boolean
    generoId?: boolean
  }

  export type AlbumGeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "albumId" | "generoId", ExtArgs["result"]["albumGenero"]>
  export type AlbumGeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }
  export type AlbumGeneroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }
  export type AlbumGeneroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }

  export type $AlbumGeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlbumGenero"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>
      genero: Prisma.$GeneroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      albumId: number
      generoId: number
    }, ExtArgs["result"]["albumGenero"]>
    composites: {}
  }

  type AlbumGeneroGetPayload<S extends boolean | null | undefined | AlbumGeneroDefaultArgs> = $Result.GetResult<Prisma.$AlbumGeneroPayload, S>

  type AlbumGeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumGeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumGeneroCountAggregateInputType | true
    }

  export interface AlbumGeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlbumGenero'], meta: { name: 'AlbumGenero' } }
    /**
     * Find zero or one AlbumGenero that matches the filter.
     * @param {AlbumGeneroFindUniqueArgs} args - Arguments to find a AlbumGenero
     * @example
     * // Get one AlbumGenero
     * const albumGenero = await prisma.albumGenero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumGeneroFindUniqueArgs>(args: SelectSubset<T, AlbumGeneroFindUniqueArgs<ExtArgs>>): Prisma__AlbumGeneroClient<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlbumGenero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumGeneroFindUniqueOrThrowArgs} args - Arguments to find a AlbumGenero
     * @example
     * // Get one AlbumGenero
     * const albumGenero = await prisma.albumGenero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumGeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumGeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumGeneroClient<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumGenero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGeneroFindFirstArgs} args - Arguments to find a AlbumGenero
     * @example
     * // Get one AlbumGenero
     * const albumGenero = await prisma.albumGenero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumGeneroFindFirstArgs>(args?: SelectSubset<T, AlbumGeneroFindFirstArgs<ExtArgs>>): Prisma__AlbumGeneroClient<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlbumGenero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGeneroFindFirstOrThrowArgs} args - Arguments to find a AlbumGenero
     * @example
     * // Get one AlbumGenero
     * const albumGenero = await prisma.albumGenero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumGeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumGeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumGeneroClient<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlbumGeneros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumGeneros
     * const albumGeneros = await prisma.albumGenero.findMany()
     * 
     * // Get first 10 AlbumGeneros
     * const albumGeneros = await prisma.albumGenero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumGeneroWithIdOnly = await prisma.albumGenero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumGeneroFindManyArgs>(args?: SelectSubset<T, AlbumGeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlbumGenero.
     * @param {AlbumGeneroCreateArgs} args - Arguments to create a AlbumGenero.
     * @example
     * // Create one AlbumGenero
     * const AlbumGenero = await prisma.albumGenero.create({
     *   data: {
     *     // ... data to create a AlbumGenero
     *   }
     * })
     * 
     */
    create<T extends AlbumGeneroCreateArgs>(args: SelectSubset<T, AlbumGeneroCreateArgs<ExtArgs>>): Prisma__AlbumGeneroClient<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlbumGeneros.
     * @param {AlbumGeneroCreateManyArgs} args - Arguments to create many AlbumGeneros.
     * @example
     * // Create many AlbumGeneros
     * const albumGenero = await prisma.albumGenero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumGeneroCreateManyArgs>(args?: SelectSubset<T, AlbumGeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlbumGeneros and returns the data saved in the database.
     * @param {AlbumGeneroCreateManyAndReturnArgs} args - Arguments to create many AlbumGeneros.
     * @example
     * // Create many AlbumGeneros
     * const albumGenero = await prisma.albumGenero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlbumGeneros and only return the `id`
     * const albumGeneroWithIdOnly = await prisma.albumGenero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumGeneroCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumGeneroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlbumGenero.
     * @param {AlbumGeneroDeleteArgs} args - Arguments to delete one AlbumGenero.
     * @example
     * // Delete one AlbumGenero
     * const AlbumGenero = await prisma.albumGenero.delete({
     *   where: {
     *     // ... filter to delete one AlbumGenero
     *   }
     * })
     * 
     */
    delete<T extends AlbumGeneroDeleteArgs>(args: SelectSubset<T, AlbumGeneroDeleteArgs<ExtArgs>>): Prisma__AlbumGeneroClient<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlbumGenero.
     * @param {AlbumGeneroUpdateArgs} args - Arguments to update one AlbumGenero.
     * @example
     * // Update one AlbumGenero
     * const albumGenero = await prisma.albumGenero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumGeneroUpdateArgs>(args: SelectSubset<T, AlbumGeneroUpdateArgs<ExtArgs>>): Prisma__AlbumGeneroClient<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlbumGeneros.
     * @param {AlbumGeneroDeleteManyArgs} args - Arguments to filter AlbumGeneros to delete.
     * @example
     * // Delete a few AlbumGeneros
     * const { count } = await prisma.albumGenero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumGeneroDeleteManyArgs>(args?: SelectSubset<T, AlbumGeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumGeneros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumGeneros
     * const albumGenero = await prisma.albumGenero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumGeneroUpdateManyArgs>(args: SelectSubset<T, AlbumGeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumGeneros and returns the data updated in the database.
     * @param {AlbumGeneroUpdateManyAndReturnArgs} args - Arguments to update many AlbumGeneros.
     * @example
     * // Update many AlbumGeneros
     * const albumGenero = await prisma.albumGenero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlbumGeneros and only return the `id`
     * const albumGeneroWithIdOnly = await prisma.albumGenero.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlbumGeneroUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumGeneroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlbumGenero.
     * @param {AlbumGeneroUpsertArgs} args - Arguments to update or create a AlbumGenero.
     * @example
     * // Update or create a AlbumGenero
     * const albumGenero = await prisma.albumGenero.upsert({
     *   create: {
     *     // ... data to create a AlbumGenero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumGenero we want to update
     *   }
     * })
     */
    upsert<T extends AlbumGeneroUpsertArgs>(args: SelectSubset<T, AlbumGeneroUpsertArgs<ExtArgs>>): Prisma__AlbumGeneroClient<$Result.GetResult<Prisma.$AlbumGeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlbumGeneros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGeneroCountArgs} args - Arguments to filter AlbumGeneros to count.
     * @example
     * // Count the number of AlbumGeneros
     * const count = await prisma.albumGenero.count({
     *   where: {
     *     // ... the filter for the AlbumGeneros we want to count
     *   }
     * })
    **/
    count<T extends AlbumGeneroCountArgs>(
      args?: Subset<T, AlbumGeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumGeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumGenero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumGeneroAggregateArgs>(args: Subset<T, AlbumGeneroAggregateArgs>): Prisma.PrismaPromise<GetAlbumGeneroAggregateType<T>>

    /**
     * Group by AlbumGenero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGeneroGroupByArgs} args - Group by arguments.
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
      T extends AlbumGeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGeneroGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGeneroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlbumGenero model
   */
  readonly fields: AlbumGeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumGenero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumGeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlbumGenero model
   */
  interface AlbumGeneroFieldRefs {
    readonly id: FieldRef<"AlbumGenero", 'Int'>
    readonly albumId: FieldRef<"AlbumGenero", 'Int'>
    readonly generoId: FieldRef<"AlbumGenero", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AlbumGenero findUnique
   */
  export type AlbumGeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    /**
     * Filter, which AlbumGenero to fetch.
     */
    where: AlbumGeneroWhereUniqueInput
  }

  /**
   * AlbumGenero findUniqueOrThrow
   */
  export type AlbumGeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    /**
     * Filter, which AlbumGenero to fetch.
     */
    where: AlbumGeneroWhereUniqueInput
  }

  /**
   * AlbumGenero findFirst
   */
  export type AlbumGeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    /**
     * Filter, which AlbumGenero to fetch.
     */
    where?: AlbumGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumGeneros to fetch.
     */
    orderBy?: AlbumGeneroOrderByWithRelationInput | AlbumGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumGeneros.
     */
    cursor?: AlbumGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumGeneros.
     */
    distinct?: AlbumGeneroScalarFieldEnum | AlbumGeneroScalarFieldEnum[]
  }

  /**
   * AlbumGenero findFirstOrThrow
   */
  export type AlbumGeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    /**
     * Filter, which AlbumGenero to fetch.
     */
    where?: AlbumGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumGeneros to fetch.
     */
    orderBy?: AlbumGeneroOrderByWithRelationInput | AlbumGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumGeneros.
     */
    cursor?: AlbumGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumGeneros.
     */
    distinct?: AlbumGeneroScalarFieldEnum | AlbumGeneroScalarFieldEnum[]
  }

  /**
   * AlbumGenero findMany
   */
  export type AlbumGeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    /**
     * Filter, which AlbumGeneros to fetch.
     */
    where?: AlbumGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumGeneros to fetch.
     */
    orderBy?: AlbumGeneroOrderByWithRelationInput | AlbumGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumGeneros.
     */
    cursor?: AlbumGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumGeneros.
     */
    skip?: number
    distinct?: AlbumGeneroScalarFieldEnum | AlbumGeneroScalarFieldEnum[]
  }

  /**
   * AlbumGenero create
   */
  export type AlbumGeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a AlbumGenero.
     */
    data: XOR<AlbumGeneroCreateInput, AlbumGeneroUncheckedCreateInput>
  }

  /**
   * AlbumGenero createMany
   */
  export type AlbumGeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlbumGeneros.
     */
    data: AlbumGeneroCreateManyInput | AlbumGeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlbumGenero createManyAndReturn
   */
  export type AlbumGeneroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * The data used to create many AlbumGeneros.
     */
    data: AlbumGeneroCreateManyInput | AlbumGeneroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumGenero update
   */
  export type AlbumGeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a AlbumGenero.
     */
    data: XOR<AlbumGeneroUpdateInput, AlbumGeneroUncheckedUpdateInput>
    /**
     * Choose, which AlbumGenero to update.
     */
    where: AlbumGeneroWhereUniqueInput
  }

  /**
   * AlbumGenero updateMany
   */
  export type AlbumGeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlbumGeneros.
     */
    data: XOR<AlbumGeneroUpdateManyMutationInput, AlbumGeneroUncheckedUpdateManyInput>
    /**
     * Filter which AlbumGeneros to update
     */
    where?: AlbumGeneroWhereInput
    /**
     * Limit how many AlbumGeneros to update.
     */
    limit?: number
  }

  /**
   * AlbumGenero updateManyAndReturn
   */
  export type AlbumGeneroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * The data used to update AlbumGeneros.
     */
    data: XOR<AlbumGeneroUpdateManyMutationInput, AlbumGeneroUncheckedUpdateManyInput>
    /**
     * Filter which AlbumGeneros to update
     */
    where?: AlbumGeneroWhereInput
    /**
     * Limit how many AlbumGeneros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlbumGenero upsert
   */
  export type AlbumGeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the AlbumGenero to update in case it exists.
     */
    where: AlbumGeneroWhereUniqueInput
    /**
     * In case the AlbumGenero found by the `where` argument doesn't exist, create a new AlbumGenero with this data.
     */
    create: XOR<AlbumGeneroCreateInput, AlbumGeneroUncheckedCreateInput>
    /**
     * In case the AlbumGenero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumGeneroUpdateInput, AlbumGeneroUncheckedUpdateInput>
  }

  /**
   * AlbumGenero delete
   */
  export type AlbumGeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
    /**
     * Filter which AlbumGenero to delete.
     */
    where: AlbumGeneroWhereUniqueInput
  }

  /**
   * AlbumGenero deleteMany
   */
  export type AlbumGeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlbumGeneros to delete
     */
    where?: AlbumGeneroWhereInput
    /**
     * Limit how many AlbumGeneros to delete.
     */
    limit?: number
  }

  /**
   * AlbumGenero without action
   */
  export type AlbumGeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumGenero
     */
    select?: AlbumGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlbumGenero
     */
    omit?: AlbumGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumGeneroInclude<ExtArgs> | null
  }


  /**
   * Model Cancion
   */

  export type AggregateCancion = {
    _count: CancionCountAggregateOutputType | null
    _avg: CancionAvgAggregateOutputType | null
    _sum: CancionSumAggregateOutputType | null
    _min: CancionMinAggregateOutputType | null
    _max: CancionMaxAggregateOutputType | null
  }

  export type CancionAvgAggregateOutputType = {
    id: number | null
    duracionMs: number | null
    albumId: number | null
    artistaId: number | null
  }

  export type CancionSumAggregateOutputType = {
    id: number | null
    duracionMs: number | null
    albumId: number | null
    artistaId: number | null
  }

  export type CancionMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    spotifyId: string | null
    duracionMs: number | null
    albumId: number | null
    artistaId: number | null
  }

  export type CancionMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    spotifyId: string | null
    duracionMs: number | null
    albumId: number | null
    artistaId: number | null
  }

  export type CancionCountAggregateOutputType = {
    id: number
    titulo: number
    spotifyId: number
    duracionMs: number
    albumId: number
    artistaId: number
    _all: number
  }


  export type CancionAvgAggregateInputType = {
    id?: true
    duracionMs?: true
    albumId?: true
    artistaId?: true
  }

  export type CancionSumAggregateInputType = {
    id?: true
    duracionMs?: true
    albumId?: true
    artistaId?: true
  }

  export type CancionMinAggregateInputType = {
    id?: true
    titulo?: true
    spotifyId?: true
    duracionMs?: true
    albumId?: true
    artistaId?: true
  }

  export type CancionMaxAggregateInputType = {
    id?: true
    titulo?: true
    spotifyId?: true
    duracionMs?: true
    albumId?: true
    artistaId?: true
  }

  export type CancionCountAggregateInputType = {
    id?: true
    titulo?: true
    spotifyId?: true
    duracionMs?: true
    albumId?: true
    artistaId?: true
    _all?: true
  }

  export type CancionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cancion to aggregate.
     */
    where?: CancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cancions to fetch.
     */
    orderBy?: CancionOrderByWithRelationInput | CancionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cancions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cancions
    **/
    _count?: true | CancionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CancionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CancionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CancionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CancionMaxAggregateInputType
  }

  export type GetCancionAggregateType<T extends CancionAggregateArgs> = {
        [P in keyof T & keyof AggregateCancion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCancion[P]>
      : GetScalarType<T[P], AggregateCancion[P]>
  }




  export type CancionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancionWhereInput
    orderBy?: CancionOrderByWithAggregationInput | CancionOrderByWithAggregationInput[]
    by: CancionScalarFieldEnum[] | CancionScalarFieldEnum
    having?: CancionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CancionCountAggregateInputType | true
    _avg?: CancionAvgAggregateInputType
    _sum?: CancionSumAggregateInputType
    _min?: CancionMinAggregateInputType
    _max?: CancionMaxAggregateInputType
  }

  export type CancionGroupByOutputType = {
    id: number
    titulo: string
    spotifyId: string
    duracionMs: number
    albumId: number
    artistaId: number
    _count: CancionCountAggregateOutputType | null
    _avg: CancionAvgAggregateOutputType | null
    _sum: CancionSumAggregateOutputType | null
    _min: CancionMinAggregateOutputType | null
    _max: CancionMaxAggregateOutputType | null
  }

  type GetCancionGroupByPayload<T extends CancionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CancionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CancionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CancionGroupByOutputType[P]>
            : GetScalarType<T[P], CancionGroupByOutputType[P]>
        }
      >
    >


  export type CancionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    spotifyId?: boolean
    duracionMs?: boolean
    albumId?: boolean
    artistaId?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    generos?: boolean | Cancion$generosArgs<ExtArgs>
    reseñas?: boolean | Cancion$reseñasArgs<ExtArgs>
    calificaciones?: boolean | Cancion$calificacionesArgs<ExtArgs>
    _count?: boolean | CancionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancion"]>

  export type CancionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    spotifyId?: boolean
    duracionMs?: boolean
    albumId?: boolean
    artistaId?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancion"]>

  export type CancionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    spotifyId?: boolean
    duracionMs?: boolean
    albumId?: boolean
    artistaId?: boolean
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancion"]>

  export type CancionSelectScalar = {
    id?: boolean
    titulo?: boolean
    spotifyId?: boolean
    duracionMs?: boolean
    albumId?: boolean
    artistaId?: boolean
  }

  export type CancionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "spotifyId" | "duracionMs" | "albumId" | "artistaId", ExtArgs["result"]["cancion"]>
  export type CancionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    generos?: boolean | Cancion$generosArgs<ExtArgs>
    reseñas?: boolean | Cancion$reseñasArgs<ExtArgs>
    calificaciones?: boolean | Cancion$calificacionesArgs<ExtArgs>
    _count?: boolean | CancionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CancionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }
  export type CancionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumDefaultArgs<ExtArgs>
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }

  export type $CancionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cancion"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>
      artista: Prisma.$ArtistaPayload<ExtArgs>
      generos: Prisma.$CancionGeneroPayload<ExtArgs>[]
      reseñas: Prisma.$ReseñaPayload<ExtArgs>[]
      calificaciones: Prisma.$CalificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      spotifyId: string
      duracionMs: number
      albumId: number
      artistaId: number
    }, ExtArgs["result"]["cancion"]>
    composites: {}
  }

  type CancionGetPayload<S extends boolean | null | undefined | CancionDefaultArgs> = $Result.GetResult<Prisma.$CancionPayload, S>

  type CancionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CancionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CancionCountAggregateInputType | true
    }

  export interface CancionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cancion'], meta: { name: 'Cancion' } }
    /**
     * Find zero or one Cancion that matches the filter.
     * @param {CancionFindUniqueArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CancionFindUniqueArgs>(args: SelectSubset<T, CancionFindUniqueArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cancion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CancionFindUniqueOrThrowArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CancionFindUniqueOrThrowArgs>(args: SelectSubset<T, CancionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cancion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionFindFirstArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CancionFindFirstArgs>(args?: SelectSubset<T, CancionFindFirstArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cancion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionFindFirstOrThrowArgs} args - Arguments to find a Cancion
     * @example
     * // Get one Cancion
     * const cancion = await prisma.cancion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CancionFindFirstOrThrowArgs>(args?: SelectSubset<T, CancionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cancions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cancions
     * const cancions = await prisma.cancion.findMany()
     * 
     * // Get first 10 Cancions
     * const cancions = await prisma.cancion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cancionWithIdOnly = await prisma.cancion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CancionFindManyArgs>(args?: SelectSubset<T, CancionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cancion.
     * @param {CancionCreateArgs} args - Arguments to create a Cancion.
     * @example
     * // Create one Cancion
     * const Cancion = await prisma.cancion.create({
     *   data: {
     *     // ... data to create a Cancion
     *   }
     * })
     * 
     */
    create<T extends CancionCreateArgs>(args: SelectSubset<T, CancionCreateArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cancions.
     * @param {CancionCreateManyArgs} args - Arguments to create many Cancions.
     * @example
     * // Create many Cancions
     * const cancion = await prisma.cancion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CancionCreateManyArgs>(args?: SelectSubset<T, CancionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cancions and returns the data saved in the database.
     * @param {CancionCreateManyAndReturnArgs} args - Arguments to create many Cancions.
     * @example
     * // Create many Cancions
     * const cancion = await prisma.cancion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cancions and only return the `id`
     * const cancionWithIdOnly = await prisma.cancion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CancionCreateManyAndReturnArgs>(args?: SelectSubset<T, CancionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cancion.
     * @param {CancionDeleteArgs} args - Arguments to delete one Cancion.
     * @example
     * // Delete one Cancion
     * const Cancion = await prisma.cancion.delete({
     *   where: {
     *     // ... filter to delete one Cancion
     *   }
     * })
     * 
     */
    delete<T extends CancionDeleteArgs>(args: SelectSubset<T, CancionDeleteArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cancion.
     * @param {CancionUpdateArgs} args - Arguments to update one Cancion.
     * @example
     * // Update one Cancion
     * const cancion = await prisma.cancion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CancionUpdateArgs>(args: SelectSubset<T, CancionUpdateArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cancions.
     * @param {CancionDeleteManyArgs} args - Arguments to filter Cancions to delete.
     * @example
     * // Delete a few Cancions
     * const { count } = await prisma.cancion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CancionDeleteManyArgs>(args?: SelectSubset<T, CancionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cancions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cancions
     * const cancion = await prisma.cancion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CancionUpdateManyArgs>(args: SelectSubset<T, CancionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cancions and returns the data updated in the database.
     * @param {CancionUpdateManyAndReturnArgs} args - Arguments to update many Cancions.
     * @example
     * // Update many Cancions
     * const cancion = await prisma.cancion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cancions and only return the `id`
     * const cancionWithIdOnly = await prisma.cancion.updateManyAndReturn({
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
    updateManyAndReturn<T extends CancionUpdateManyAndReturnArgs>(args: SelectSubset<T, CancionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cancion.
     * @param {CancionUpsertArgs} args - Arguments to update or create a Cancion.
     * @example
     * // Update or create a Cancion
     * const cancion = await prisma.cancion.upsert({
     *   create: {
     *     // ... data to create a Cancion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cancion we want to update
     *   }
     * })
     */
    upsert<T extends CancionUpsertArgs>(args: SelectSubset<T, CancionUpsertArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cancions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionCountArgs} args - Arguments to filter Cancions to count.
     * @example
     * // Count the number of Cancions
     * const count = await prisma.cancion.count({
     *   where: {
     *     // ... the filter for the Cancions we want to count
     *   }
     * })
    **/
    count<T extends CancionCountArgs>(
      args?: Subset<T, CancionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CancionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cancion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CancionAggregateArgs>(args: Subset<T, CancionAggregateArgs>): Prisma.PrismaPromise<GetCancionAggregateType<T>>

    /**
     * Group by Cancion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionGroupByArgs} args - Group by arguments.
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
      T extends CancionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CancionGroupByArgs['orderBy'] }
        : { orderBy?: CancionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CancionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cancion model
   */
  readonly fields: CancionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cancion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CancionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends AlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumDefaultArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artista<T extends ArtistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistaDefaultArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generos<T extends Cancion$generosArgs<ExtArgs> = {}>(args?: Subset<T, Cancion$generosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reseñas<T extends Cancion$reseñasArgs<ExtArgs> = {}>(args?: Subset<T, Cancion$reseñasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReseñaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calificaciones<T extends Cancion$calificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Cancion$calificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cancion model
   */
  interface CancionFieldRefs {
    readonly id: FieldRef<"Cancion", 'Int'>
    readonly titulo: FieldRef<"Cancion", 'String'>
    readonly spotifyId: FieldRef<"Cancion", 'String'>
    readonly duracionMs: FieldRef<"Cancion", 'Int'>
    readonly albumId: FieldRef<"Cancion", 'Int'>
    readonly artistaId: FieldRef<"Cancion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cancion findUnique
   */
  export type CancionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    /**
     * Filter, which Cancion to fetch.
     */
    where: CancionWhereUniqueInput
  }

  /**
   * Cancion findUniqueOrThrow
   */
  export type CancionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    /**
     * Filter, which Cancion to fetch.
     */
    where: CancionWhereUniqueInput
  }

  /**
   * Cancion findFirst
   */
  export type CancionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    /**
     * Filter, which Cancion to fetch.
     */
    where?: CancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cancions to fetch.
     */
    orderBy?: CancionOrderByWithRelationInput | CancionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cancions.
     */
    cursor?: CancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cancions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cancions.
     */
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * Cancion findFirstOrThrow
   */
  export type CancionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    /**
     * Filter, which Cancion to fetch.
     */
    where?: CancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cancions to fetch.
     */
    orderBy?: CancionOrderByWithRelationInput | CancionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cancions.
     */
    cursor?: CancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cancions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cancions.
     */
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * Cancion findMany
   */
  export type CancionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    /**
     * Filter, which Cancions to fetch.
     */
    where?: CancionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cancions to fetch.
     */
    orderBy?: CancionOrderByWithRelationInput | CancionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cancions.
     */
    cursor?: CancionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cancions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cancions.
     */
    skip?: number
    distinct?: CancionScalarFieldEnum | CancionScalarFieldEnum[]
  }

  /**
   * Cancion create
   */
  export type CancionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    /**
     * The data needed to create a Cancion.
     */
    data: XOR<CancionCreateInput, CancionUncheckedCreateInput>
  }

  /**
   * Cancion createMany
   */
  export type CancionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cancions.
     */
    data: CancionCreateManyInput | CancionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cancion createManyAndReturn
   */
  export type CancionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * The data used to create many Cancions.
     */
    data: CancionCreateManyInput | CancionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cancion update
   */
  export type CancionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    /**
     * The data needed to update a Cancion.
     */
    data: XOR<CancionUpdateInput, CancionUncheckedUpdateInput>
    /**
     * Choose, which Cancion to update.
     */
    where: CancionWhereUniqueInput
  }

  /**
   * Cancion updateMany
   */
  export type CancionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cancions.
     */
    data: XOR<CancionUpdateManyMutationInput, CancionUncheckedUpdateManyInput>
    /**
     * Filter which Cancions to update
     */
    where?: CancionWhereInput
    /**
     * Limit how many Cancions to update.
     */
    limit?: number
  }

  /**
   * Cancion updateManyAndReturn
   */
  export type CancionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * The data used to update Cancions.
     */
    data: XOR<CancionUpdateManyMutationInput, CancionUncheckedUpdateManyInput>
    /**
     * Filter which Cancions to update
     */
    where?: CancionWhereInput
    /**
     * Limit how many Cancions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cancion upsert
   */
  export type CancionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    /**
     * The filter to search for the Cancion to update in case it exists.
     */
    where: CancionWhereUniqueInput
    /**
     * In case the Cancion found by the `where` argument doesn't exist, create a new Cancion with this data.
     */
    create: XOR<CancionCreateInput, CancionUncheckedCreateInput>
    /**
     * In case the Cancion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CancionUpdateInput, CancionUncheckedUpdateInput>
  }

  /**
   * Cancion delete
   */
  export type CancionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    /**
     * Filter which Cancion to delete.
     */
    where: CancionWhereUniqueInput
  }

  /**
   * Cancion deleteMany
   */
  export type CancionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cancions to delete
     */
    where?: CancionWhereInput
    /**
     * Limit how many Cancions to delete.
     */
    limit?: number
  }

  /**
   * Cancion.generos
   */
  export type Cancion$generosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    where?: CancionGeneroWhereInput
    orderBy?: CancionGeneroOrderByWithRelationInput | CancionGeneroOrderByWithRelationInput[]
    cursor?: CancionGeneroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CancionGeneroScalarFieldEnum | CancionGeneroScalarFieldEnum[]
  }

  /**
   * Cancion.reseñas
   */
  export type Cancion$reseñasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Cancion.calificaciones
   */
  export type Cancion$calificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    where?: CalificacionWhereInput
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    cursor?: CalificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Cancion without action
   */
  export type CancionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
  }


  /**
   * Model CancionGenero
   */

  export type AggregateCancionGenero = {
    _count: CancionGeneroCountAggregateOutputType | null
    _avg: CancionGeneroAvgAggregateOutputType | null
    _sum: CancionGeneroSumAggregateOutputType | null
    _min: CancionGeneroMinAggregateOutputType | null
    _max: CancionGeneroMaxAggregateOutputType | null
  }

  export type CancionGeneroAvgAggregateOutputType = {
    id: number | null
    cancionId: number | null
    generoId: number | null
  }

  export type CancionGeneroSumAggregateOutputType = {
    id: number | null
    cancionId: number | null
    generoId: number | null
  }

  export type CancionGeneroMinAggregateOutputType = {
    id: number | null
    cancionId: number | null
    generoId: number | null
  }

  export type CancionGeneroMaxAggregateOutputType = {
    id: number | null
    cancionId: number | null
    generoId: number | null
  }

  export type CancionGeneroCountAggregateOutputType = {
    id: number
    cancionId: number
    generoId: number
    _all: number
  }


  export type CancionGeneroAvgAggregateInputType = {
    id?: true
    cancionId?: true
    generoId?: true
  }

  export type CancionGeneroSumAggregateInputType = {
    id?: true
    cancionId?: true
    generoId?: true
  }

  export type CancionGeneroMinAggregateInputType = {
    id?: true
    cancionId?: true
    generoId?: true
  }

  export type CancionGeneroMaxAggregateInputType = {
    id?: true
    cancionId?: true
    generoId?: true
  }

  export type CancionGeneroCountAggregateInputType = {
    id?: true
    cancionId?: true
    generoId?: true
    _all?: true
  }

  export type CancionGeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CancionGenero to aggregate.
     */
    where?: CancionGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancionGeneros to fetch.
     */
    orderBy?: CancionGeneroOrderByWithRelationInput | CancionGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CancionGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancionGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancionGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CancionGeneros
    **/
    _count?: true | CancionGeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CancionGeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CancionGeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CancionGeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CancionGeneroMaxAggregateInputType
  }

  export type GetCancionGeneroAggregateType<T extends CancionGeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateCancionGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCancionGenero[P]>
      : GetScalarType<T[P], AggregateCancionGenero[P]>
  }




  export type CancionGeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CancionGeneroWhereInput
    orderBy?: CancionGeneroOrderByWithAggregationInput | CancionGeneroOrderByWithAggregationInput[]
    by: CancionGeneroScalarFieldEnum[] | CancionGeneroScalarFieldEnum
    having?: CancionGeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CancionGeneroCountAggregateInputType | true
    _avg?: CancionGeneroAvgAggregateInputType
    _sum?: CancionGeneroSumAggregateInputType
    _min?: CancionGeneroMinAggregateInputType
    _max?: CancionGeneroMaxAggregateInputType
  }

  export type CancionGeneroGroupByOutputType = {
    id: number
    cancionId: number
    generoId: number
    _count: CancionGeneroCountAggregateOutputType | null
    _avg: CancionGeneroAvgAggregateOutputType | null
    _sum: CancionGeneroSumAggregateOutputType | null
    _min: CancionGeneroMinAggregateOutputType | null
    _max: CancionGeneroMaxAggregateOutputType | null
  }

  type GetCancionGeneroGroupByPayload<T extends CancionGeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CancionGeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CancionGeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CancionGeneroGroupByOutputType[P]>
            : GetScalarType<T[P], CancionGeneroGroupByOutputType[P]>
        }
      >
    >


  export type CancionGeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cancionId?: boolean
    generoId?: boolean
    cancion?: boolean | CancionDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancionGenero"]>

  export type CancionGeneroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cancionId?: boolean
    generoId?: boolean
    cancion?: boolean | CancionDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancionGenero"]>

  export type CancionGeneroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cancionId?: boolean
    generoId?: boolean
    cancion?: boolean | CancionDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cancionGenero"]>

  export type CancionGeneroSelectScalar = {
    id?: boolean
    cancionId?: boolean
    generoId?: boolean
  }

  export type CancionGeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cancionId" | "generoId", ExtArgs["result"]["cancionGenero"]>
  export type CancionGeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cancion?: boolean | CancionDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }
  export type CancionGeneroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cancion?: boolean | CancionDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }
  export type CancionGeneroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cancion?: boolean | CancionDefaultArgs<ExtArgs>
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
  }

  export type $CancionGeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CancionGenero"
    objects: {
      cancion: Prisma.$CancionPayload<ExtArgs>
      genero: Prisma.$GeneroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cancionId: number
      generoId: number
    }, ExtArgs["result"]["cancionGenero"]>
    composites: {}
  }

  type CancionGeneroGetPayload<S extends boolean | null | undefined | CancionGeneroDefaultArgs> = $Result.GetResult<Prisma.$CancionGeneroPayload, S>

  type CancionGeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CancionGeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CancionGeneroCountAggregateInputType | true
    }

  export interface CancionGeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CancionGenero'], meta: { name: 'CancionGenero' } }
    /**
     * Find zero or one CancionGenero that matches the filter.
     * @param {CancionGeneroFindUniqueArgs} args - Arguments to find a CancionGenero
     * @example
     * // Get one CancionGenero
     * const cancionGenero = await prisma.cancionGenero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CancionGeneroFindUniqueArgs>(args: SelectSubset<T, CancionGeneroFindUniqueArgs<ExtArgs>>): Prisma__CancionGeneroClient<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CancionGenero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CancionGeneroFindUniqueOrThrowArgs} args - Arguments to find a CancionGenero
     * @example
     * // Get one CancionGenero
     * const cancionGenero = await prisma.cancionGenero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CancionGeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, CancionGeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CancionGeneroClient<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CancionGenero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionGeneroFindFirstArgs} args - Arguments to find a CancionGenero
     * @example
     * // Get one CancionGenero
     * const cancionGenero = await prisma.cancionGenero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CancionGeneroFindFirstArgs>(args?: SelectSubset<T, CancionGeneroFindFirstArgs<ExtArgs>>): Prisma__CancionGeneroClient<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CancionGenero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionGeneroFindFirstOrThrowArgs} args - Arguments to find a CancionGenero
     * @example
     * // Get one CancionGenero
     * const cancionGenero = await prisma.cancionGenero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CancionGeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, CancionGeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__CancionGeneroClient<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CancionGeneros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionGeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CancionGeneros
     * const cancionGeneros = await prisma.cancionGenero.findMany()
     * 
     * // Get first 10 CancionGeneros
     * const cancionGeneros = await prisma.cancionGenero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cancionGeneroWithIdOnly = await prisma.cancionGenero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CancionGeneroFindManyArgs>(args?: SelectSubset<T, CancionGeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CancionGenero.
     * @param {CancionGeneroCreateArgs} args - Arguments to create a CancionGenero.
     * @example
     * // Create one CancionGenero
     * const CancionGenero = await prisma.cancionGenero.create({
     *   data: {
     *     // ... data to create a CancionGenero
     *   }
     * })
     * 
     */
    create<T extends CancionGeneroCreateArgs>(args: SelectSubset<T, CancionGeneroCreateArgs<ExtArgs>>): Prisma__CancionGeneroClient<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CancionGeneros.
     * @param {CancionGeneroCreateManyArgs} args - Arguments to create many CancionGeneros.
     * @example
     * // Create many CancionGeneros
     * const cancionGenero = await prisma.cancionGenero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CancionGeneroCreateManyArgs>(args?: SelectSubset<T, CancionGeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CancionGeneros and returns the data saved in the database.
     * @param {CancionGeneroCreateManyAndReturnArgs} args - Arguments to create many CancionGeneros.
     * @example
     * // Create many CancionGeneros
     * const cancionGenero = await prisma.cancionGenero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CancionGeneros and only return the `id`
     * const cancionGeneroWithIdOnly = await prisma.cancionGenero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CancionGeneroCreateManyAndReturnArgs>(args?: SelectSubset<T, CancionGeneroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CancionGenero.
     * @param {CancionGeneroDeleteArgs} args - Arguments to delete one CancionGenero.
     * @example
     * // Delete one CancionGenero
     * const CancionGenero = await prisma.cancionGenero.delete({
     *   where: {
     *     // ... filter to delete one CancionGenero
     *   }
     * })
     * 
     */
    delete<T extends CancionGeneroDeleteArgs>(args: SelectSubset<T, CancionGeneroDeleteArgs<ExtArgs>>): Prisma__CancionGeneroClient<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CancionGenero.
     * @param {CancionGeneroUpdateArgs} args - Arguments to update one CancionGenero.
     * @example
     * // Update one CancionGenero
     * const cancionGenero = await prisma.cancionGenero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CancionGeneroUpdateArgs>(args: SelectSubset<T, CancionGeneroUpdateArgs<ExtArgs>>): Prisma__CancionGeneroClient<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CancionGeneros.
     * @param {CancionGeneroDeleteManyArgs} args - Arguments to filter CancionGeneros to delete.
     * @example
     * // Delete a few CancionGeneros
     * const { count } = await prisma.cancionGenero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CancionGeneroDeleteManyArgs>(args?: SelectSubset<T, CancionGeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CancionGeneros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionGeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CancionGeneros
     * const cancionGenero = await prisma.cancionGenero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CancionGeneroUpdateManyArgs>(args: SelectSubset<T, CancionGeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CancionGeneros and returns the data updated in the database.
     * @param {CancionGeneroUpdateManyAndReturnArgs} args - Arguments to update many CancionGeneros.
     * @example
     * // Update many CancionGeneros
     * const cancionGenero = await prisma.cancionGenero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CancionGeneros and only return the `id`
     * const cancionGeneroWithIdOnly = await prisma.cancionGenero.updateManyAndReturn({
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
    updateManyAndReturn<T extends CancionGeneroUpdateManyAndReturnArgs>(args: SelectSubset<T, CancionGeneroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CancionGenero.
     * @param {CancionGeneroUpsertArgs} args - Arguments to update or create a CancionGenero.
     * @example
     * // Update or create a CancionGenero
     * const cancionGenero = await prisma.cancionGenero.upsert({
     *   create: {
     *     // ... data to create a CancionGenero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CancionGenero we want to update
     *   }
     * })
     */
    upsert<T extends CancionGeneroUpsertArgs>(args: SelectSubset<T, CancionGeneroUpsertArgs<ExtArgs>>): Prisma__CancionGeneroClient<$Result.GetResult<Prisma.$CancionGeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CancionGeneros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionGeneroCountArgs} args - Arguments to filter CancionGeneros to count.
     * @example
     * // Count the number of CancionGeneros
     * const count = await prisma.cancionGenero.count({
     *   where: {
     *     // ... the filter for the CancionGeneros we want to count
     *   }
     * })
    **/
    count<T extends CancionGeneroCountArgs>(
      args?: Subset<T, CancionGeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CancionGeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CancionGenero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionGeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CancionGeneroAggregateArgs>(args: Subset<T, CancionGeneroAggregateArgs>): Prisma.PrismaPromise<GetCancionGeneroAggregateType<T>>

    /**
     * Group by CancionGenero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CancionGeneroGroupByArgs} args - Group by arguments.
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
      T extends CancionGeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CancionGeneroGroupByArgs['orderBy'] }
        : { orderBy?: CancionGeneroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CancionGeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancionGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CancionGenero model
   */
  readonly fields: CancionGeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CancionGenero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CancionGeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cancion<T extends CancionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CancionDefaultArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CancionGenero model
   */
  interface CancionGeneroFieldRefs {
    readonly id: FieldRef<"CancionGenero", 'Int'>
    readonly cancionId: FieldRef<"CancionGenero", 'Int'>
    readonly generoId: FieldRef<"CancionGenero", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CancionGenero findUnique
   */
  export type CancionGeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    /**
     * Filter, which CancionGenero to fetch.
     */
    where: CancionGeneroWhereUniqueInput
  }

  /**
   * CancionGenero findUniqueOrThrow
   */
  export type CancionGeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    /**
     * Filter, which CancionGenero to fetch.
     */
    where: CancionGeneroWhereUniqueInput
  }

  /**
   * CancionGenero findFirst
   */
  export type CancionGeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    /**
     * Filter, which CancionGenero to fetch.
     */
    where?: CancionGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancionGeneros to fetch.
     */
    orderBy?: CancionGeneroOrderByWithRelationInput | CancionGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CancionGeneros.
     */
    cursor?: CancionGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancionGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancionGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CancionGeneros.
     */
    distinct?: CancionGeneroScalarFieldEnum | CancionGeneroScalarFieldEnum[]
  }

  /**
   * CancionGenero findFirstOrThrow
   */
  export type CancionGeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    /**
     * Filter, which CancionGenero to fetch.
     */
    where?: CancionGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancionGeneros to fetch.
     */
    orderBy?: CancionGeneroOrderByWithRelationInput | CancionGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CancionGeneros.
     */
    cursor?: CancionGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancionGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancionGeneros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CancionGeneros.
     */
    distinct?: CancionGeneroScalarFieldEnum | CancionGeneroScalarFieldEnum[]
  }

  /**
   * CancionGenero findMany
   */
  export type CancionGeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    /**
     * Filter, which CancionGeneros to fetch.
     */
    where?: CancionGeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CancionGeneros to fetch.
     */
    orderBy?: CancionGeneroOrderByWithRelationInput | CancionGeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CancionGeneros.
     */
    cursor?: CancionGeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CancionGeneros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CancionGeneros.
     */
    skip?: number
    distinct?: CancionGeneroScalarFieldEnum | CancionGeneroScalarFieldEnum[]
  }

  /**
   * CancionGenero create
   */
  export type CancionGeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a CancionGenero.
     */
    data: XOR<CancionGeneroCreateInput, CancionGeneroUncheckedCreateInput>
  }

  /**
   * CancionGenero createMany
   */
  export type CancionGeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CancionGeneros.
     */
    data: CancionGeneroCreateManyInput | CancionGeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CancionGenero createManyAndReturn
   */
  export type CancionGeneroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * The data used to create many CancionGeneros.
     */
    data: CancionGeneroCreateManyInput | CancionGeneroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CancionGenero update
   */
  export type CancionGeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a CancionGenero.
     */
    data: XOR<CancionGeneroUpdateInput, CancionGeneroUncheckedUpdateInput>
    /**
     * Choose, which CancionGenero to update.
     */
    where: CancionGeneroWhereUniqueInput
  }

  /**
   * CancionGenero updateMany
   */
  export type CancionGeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CancionGeneros.
     */
    data: XOR<CancionGeneroUpdateManyMutationInput, CancionGeneroUncheckedUpdateManyInput>
    /**
     * Filter which CancionGeneros to update
     */
    where?: CancionGeneroWhereInput
    /**
     * Limit how many CancionGeneros to update.
     */
    limit?: number
  }

  /**
   * CancionGenero updateManyAndReturn
   */
  export type CancionGeneroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * The data used to update CancionGeneros.
     */
    data: XOR<CancionGeneroUpdateManyMutationInput, CancionGeneroUncheckedUpdateManyInput>
    /**
     * Filter which CancionGeneros to update
     */
    where?: CancionGeneroWhereInput
    /**
     * Limit how many CancionGeneros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CancionGenero upsert
   */
  export type CancionGeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the CancionGenero to update in case it exists.
     */
    where: CancionGeneroWhereUniqueInput
    /**
     * In case the CancionGenero found by the `where` argument doesn't exist, create a new CancionGenero with this data.
     */
    create: XOR<CancionGeneroCreateInput, CancionGeneroUncheckedCreateInput>
    /**
     * In case the CancionGenero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CancionGeneroUpdateInput, CancionGeneroUncheckedUpdateInput>
  }

  /**
   * CancionGenero delete
   */
  export type CancionGeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
    /**
     * Filter which CancionGenero to delete.
     */
    where: CancionGeneroWhereUniqueInput
  }

  /**
   * CancionGenero deleteMany
   */
  export type CancionGeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CancionGeneros to delete
     */
    where?: CancionGeneroWhereInput
    /**
     * Limit how many CancionGeneros to delete.
     */
    limit?: number
  }

  /**
   * CancionGenero without action
   */
  export type CancionGeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CancionGenero
     */
    select?: CancionGeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CancionGenero
     */
    omit?: CancionGeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionGeneroInclude<ExtArgs> | null
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
    id: number | null
    usuarioId: number | null
    cancionId: number | null
    albumId: number | null
  }

  export type ReseñaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    cancionId: number | null
    albumId: number | null
  }

  export type ReseñaMinAggregateOutputType = {
    id: number | null
    contenido: string | null
    usuarioId: number | null
    cancionId: number | null
    albumId: number | null
    creadoEn: Date | null
  }

  export type ReseñaMaxAggregateOutputType = {
    id: number | null
    contenido: string | null
    usuarioId: number | null
    cancionId: number | null
    albumId: number | null
    creadoEn: Date | null
  }

  export type ReseñaCountAggregateOutputType = {
    id: number
    contenido: number
    usuarioId: number
    cancionId: number
    albumId: number
    creadoEn: number
    _all: number
  }


  export type ReseñaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
  }

  export type ReseñaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
  }

  export type ReseñaMinAggregateInputType = {
    id?: true
    contenido?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
    creadoEn?: true
  }

  export type ReseñaMaxAggregateInputType = {
    id?: true
    contenido?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
    creadoEn?: true
  }

  export type ReseñaCountAggregateInputType = {
    id?: true
    contenido?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
    creadoEn?: true
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
    id: number
    contenido: string
    usuarioId: number
    cancionId: number | null
    albumId: number | null
    creadoEn: Date
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
    contenido?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    albumId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Reseña$cancionArgs<ExtArgs>
    album?: boolean | Reseña$albumArgs<ExtArgs>
  }, ExtArgs["result"]["reseña"]>

  export type ReseñaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    albumId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Reseña$cancionArgs<ExtArgs>
    album?: boolean | Reseña$albumArgs<ExtArgs>
  }, ExtArgs["result"]["reseña"]>

  export type ReseñaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenido?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    albumId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Reseña$cancionArgs<ExtArgs>
    album?: boolean | Reseña$albumArgs<ExtArgs>
  }, ExtArgs["result"]["reseña"]>

  export type ReseñaSelectScalar = {
    id?: boolean
    contenido?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    albumId?: boolean
    creadoEn?: boolean
  }

  export type ReseñaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenido" | "usuarioId" | "cancionId" | "albumId" | "creadoEn", ExtArgs["result"]["reseña"]>
  export type ReseñaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Reseña$cancionArgs<ExtArgs>
    album?: boolean | Reseña$albumArgs<ExtArgs>
  }
  export type ReseñaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Reseña$cancionArgs<ExtArgs>
    album?: boolean | Reseña$albumArgs<ExtArgs>
  }
  export type ReseñaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Reseña$cancionArgs<ExtArgs>
    album?: boolean | Reseña$albumArgs<ExtArgs>
  }

  export type $ReseñaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reseña"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      cancion: Prisma.$CancionPayload<ExtArgs> | null
      album: Prisma.$AlbumPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      contenido: string
      usuarioId: number
      cancionId: number | null
      albumId: number | null
      creadoEn: Date
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
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cancion<T extends Reseña$cancionArgs<ExtArgs> = {}>(args?: Subset<T, Reseña$cancionArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    album<T extends Reseña$albumArgs<ExtArgs> = {}>(args?: Subset<T, Reseña$albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Reseña", 'Int'>
    readonly contenido: FieldRef<"Reseña", 'String'>
    readonly usuarioId: FieldRef<"Reseña", 'Int'>
    readonly cancionId: FieldRef<"Reseña", 'Int'>
    readonly albumId: FieldRef<"Reseña", 'Int'>
    readonly creadoEn: FieldRef<"Reseña", 'DateTime'>
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
   * Reseña.cancion
   */
  export type Reseña$cancionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    where?: CancionWhereInput
  }

  /**
   * Reseña.album
   */
  export type Reseña$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
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
   * Model Calificacion
   */

  export type AggregateCalificacion = {
    _count: CalificacionCountAggregateOutputType | null
    _avg: CalificacionAvgAggregateOutputType | null
    _sum: CalificacionSumAggregateOutputType | null
    _min: CalificacionMinAggregateOutputType | null
    _max: CalificacionMaxAggregateOutputType | null
  }

  export type CalificacionAvgAggregateOutputType = {
    id: number | null
    estrellas: number | null
    usuarioId: number | null
    cancionId: number | null
    albumId: number | null
  }

  export type CalificacionSumAggregateOutputType = {
    id: number | null
    estrellas: number | null
    usuarioId: number | null
    cancionId: number | null
    albumId: number | null
  }

  export type CalificacionMinAggregateOutputType = {
    id: number | null
    estrellas: number | null
    usuarioId: number | null
    cancionId: number | null
    albumId: number | null
    creadoEn: Date | null
  }

  export type CalificacionMaxAggregateOutputType = {
    id: number | null
    estrellas: number | null
    usuarioId: number | null
    cancionId: number | null
    albumId: number | null
    creadoEn: Date | null
  }

  export type CalificacionCountAggregateOutputType = {
    id: number
    estrellas: number
    usuarioId: number
    cancionId: number
    albumId: number
    creadoEn: number
    _all: number
  }


  export type CalificacionAvgAggregateInputType = {
    id?: true
    estrellas?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
  }

  export type CalificacionSumAggregateInputType = {
    id?: true
    estrellas?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
  }

  export type CalificacionMinAggregateInputType = {
    id?: true
    estrellas?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
    creadoEn?: true
  }

  export type CalificacionMaxAggregateInputType = {
    id?: true
    estrellas?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
    creadoEn?: true
  }

  export type CalificacionCountAggregateInputType = {
    id?: true
    estrellas?: true
    usuarioId?: true
    cancionId?: true
    albumId?: true
    creadoEn?: true
    _all?: true
  }

  export type CalificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calificacion to aggregate.
     */
    where?: CalificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calificacions to fetch.
     */
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calificacions
    **/
    _count?: true | CalificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalificacionMaxAggregateInputType
  }

  export type GetCalificacionAggregateType<T extends CalificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateCalificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalificacion[P]>
      : GetScalarType<T[P], AggregateCalificacion[P]>
  }




  export type CalificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalificacionWhereInput
    orderBy?: CalificacionOrderByWithAggregationInput | CalificacionOrderByWithAggregationInput[]
    by: CalificacionScalarFieldEnum[] | CalificacionScalarFieldEnum
    having?: CalificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalificacionCountAggregateInputType | true
    _avg?: CalificacionAvgAggregateInputType
    _sum?: CalificacionSumAggregateInputType
    _min?: CalificacionMinAggregateInputType
    _max?: CalificacionMaxAggregateInputType
  }

  export type CalificacionGroupByOutputType = {
    id: number
    estrellas: number
    usuarioId: number
    cancionId: number | null
    albumId: number | null
    creadoEn: Date
    _count: CalificacionCountAggregateOutputType | null
    _avg: CalificacionAvgAggregateOutputType | null
    _sum: CalificacionSumAggregateOutputType | null
    _min: CalificacionMinAggregateOutputType | null
    _max: CalificacionMaxAggregateOutputType | null
  }

  type GetCalificacionGroupByPayload<T extends CalificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalificacionGroupByOutputType[P]>
            : GetScalarType<T[P], CalificacionGroupByOutputType[P]>
        }
      >
    >


  export type CalificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estrellas?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    albumId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Calificacion$cancionArgs<ExtArgs>
    album?: boolean | Calificacion$albumArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type CalificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estrellas?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    albumId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Calificacion$cancionArgs<ExtArgs>
    album?: boolean | Calificacion$albumArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type CalificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estrellas?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    albumId?: boolean
    creadoEn?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Calificacion$cancionArgs<ExtArgs>
    album?: boolean | Calificacion$albumArgs<ExtArgs>
  }, ExtArgs["result"]["calificacion"]>

  export type CalificacionSelectScalar = {
    id?: boolean
    estrellas?: boolean
    usuarioId?: boolean
    cancionId?: boolean
    albumId?: boolean
    creadoEn?: boolean
  }

  export type CalificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estrellas" | "usuarioId" | "cancionId" | "albumId" | "creadoEn", ExtArgs["result"]["calificacion"]>
  export type CalificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Calificacion$cancionArgs<ExtArgs>
    album?: boolean | Calificacion$albumArgs<ExtArgs>
  }
  export type CalificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Calificacion$cancionArgs<ExtArgs>
    album?: boolean | Calificacion$albumArgs<ExtArgs>
  }
  export type CalificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    cancion?: boolean | Calificacion$cancionArgs<ExtArgs>
    album?: boolean | Calificacion$albumArgs<ExtArgs>
  }

  export type $CalificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calificacion"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      cancion: Prisma.$CancionPayload<ExtArgs> | null
      album: Prisma.$AlbumPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estrellas: number
      usuarioId: number
      cancionId: number | null
      albumId: number | null
      creadoEn: Date
    }, ExtArgs["result"]["calificacion"]>
    composites: {}
  }

  type CalificacionGetPayload<S extends boolean | null | undefined | CalificacionDefaultArgs> = $Result.GetResult<Prisma.$CalificacionPayload, S>

  type CalificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalificacionCountAggregateInputType | true
    }

  export interface CalificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calificacion'], meta: { name: 'Calificacion' } }
    /**
     * Find zero or one Calificacion that matches the filter.
     * @param {CalificacionFindUniqueArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalificacionFindUniqueArgs>(args: SelectSubset<T, CalificacionFindUniqueArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalificacionFindUniqueOrThrowArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, CalificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionFindFirstArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalificacionFindFirstArgs>(args?: SelectSubset<T, CalificacionFindFirstArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionFindFirstOrThrowArgs} args - Arguments to find a Calificacion
     * @example
     * // Get one Calificacion
     * const calificacion = await prisma.calificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, CalificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calificacions
     * const calificacions = await prisma.calificacion.findMany()
     * 
     * // Get first 10 Calificacions
     * const calificacions = await prisma.calificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calificacionWithIdOnly = await prisma.calificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalificacionFindManyArgs>(args?: SelectSubset<T, CalificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calificacion.
     * @param {CalificacionCreateArgs} args - Arguments to create a Calificacion.
     * @example
     * // Create one Calificacion
     * const Calificacion = await prisma.calificacion.create({
     *   data: {
     *     // ... data to create a Calificacion
     *   }
     * })
     * 
     */
    create<T extends CalificacionCreateArgs>(args: SelectSubset<T, CalificacionCreateArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calificacions.
     * @param {CalificacionCreateManyArgs} args - Arguments to create many Calificacions.
     * @example
     * // Create many Calificacions
     * const calificacion = await prisma.calificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalificacionCreateManyArgs>(args?: SelectSubset<T, CalificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calificacions and returns the data saved in the database.
     * @param {CalificacionCreateManyAndReturnArgs} args - Arguments to create many Calificacions.
     * @example
     * // Create many Calificacions
     * const calificacion = await prisma.calificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calificacions and only return the `id`
     * const calificacionWithIdOnly = await prisma.calificacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, CalificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Calificacion.
     * @param {CalificacionDeleteArgs} args - Arguments to delete one Calificacion.
     * @example
     * // Delete one Calificacion
     * const Calificacion = await prisma.calificacion.delete({
     *   where: {
     *     // ... filter to delete one Calificacion
     *   }
     * })
     * 
     */
    delete<T extends CalificacionDeleteArgs>(args: SelectSubset<T, CalificacionDeleteArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calificacion.
     * @param {CalificacionUpdateArgs} args - Arguments to update one Calificacion.
     * @example
     * // Update one Calificacion
     * const calificacion = await prisma.calificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalificacionUpdateArgs>(args: SelectSubset<T, CalificacionUpdateArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calificacions.
     * @param {CalificacionDeleteManyArgs} args - Arguments to filter Calificacions to delete.
     * @example
     * // Delete a few Calificacions
     * const { count } = await prisma.calificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalificacionDeleteManyArgs>(args?: SelectSubset<T, CalificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calificacions
     * const calificacion = await prisma.calificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalificacionUpdateManyArgs>(args: SelectSubset<T, CalificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calificacions and returns the data updated in the database.
     * @param {CalificacionUpdateManyAndReturnArgs} args - Arguments to update many Calificacions.
     * @example
     * // Update many Calificacions
     * const calificacion = await prisma.calificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Calificacions and only return the `id`
     * const calificacionWithIdOnly = await prisma.calificacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, CalificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Calificacion.
     * @param {CalificacionUpsertArgs} args - Arguments to update or create a Calificacion.
     * @example
     * // Update or create a Calificacion
     * const calificacion = await prisma.calificacion.upsert({
     *   create: {
     *     // ... data to create a Calificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calificacion we want to update
     *   }
     * })
     */
    upsert<T extends CalificacionUpsertArgs>(args: SelectSubset<T, CalificacionUpsertArgs<ExtArgs>>): Prisma__CalificacionClient<$Result.GetResult<Prisma.$CalificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionCountArgs} args - Arguments to filter Calificacions to count.
     * @example
     * // Count the number of Calificacions
     * const count = await prisma.calificacion.count({
     *   where: {
     *     // ... the filter for the Calificacions we want to count
     *   }
     * })
    **/
    count<T extends CalificacionCountArgs>(
      args?: Subset<T, CalificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalificacionAggregateArgs>(args: Subset<T, CalificacionAggregateArgs>): Prisma.PrismaPromise<GetCalificacionAggregateType<T>>

    /**
     * Group by Calificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalificacionGroupByArgs} args - Group by arguments.
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
      T extends CalificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalificacionGroupByArgs['orderBy'] }
        : { orderBy?: CalificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calificacion model
   */
  readonly fields: CalificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cancion<T extends Calificacion$cancionArgs<ExtArgs> = {}>(args?: Subset<T, Calificacion$cancionArgs<ExtArgs>>): Prisma__CancionClient<$Result.GetResult<Prisma.$CancionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    album<T extends Calificacion$albumArgs<ExtArgs> = {}>(args?: Subset<T, Calificacion$albumArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Calificacion model
   */
  interface CalificacionFieldRefs {
    readonly id: FieldRef<"Calificacion", 'Int'>
    readonly estrellas: FieldRef<"Calificacion", 'Int'>
    readonly usuarioId: FieldRef<"Calificacion", 'Int'>
    readonly cancionId: FieldRef<"Calificacion", 'Int'>
    readonly albumId: FieldRef<"Calificacion", 'Int'>
    readonly creadoEn: FieldRef<"Calificacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Calificacion findUnique
   */
  export type CalificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacion to fetch.
     */
    where: CalificacionWhereUniqueInput
  }

  /**
   * Calificacion findUniqueOrThrow
   */
  export type CalificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacion to fetch.
     */
    where: CalificacionWhereUniqueInput
  }

  /**
   * Calificacion findFirst
   */
  export type CalificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacion to fetch.
     */
    where?: CalificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calificacions to fetch.
     */
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calificacions.
     */
    cursor?: CalificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calificacions.
     */
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Calificacion findFirstOrThrow
   */
  export type CalificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacion to fetch.
     */
    where?: CalificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calificacions to fetch.
     */
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calificacions.
     */
    cursor?: CalificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calificacions.
     */
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Calificacion findMany
   */
  export type CalificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter, which Calificacions to fetch.
     */
    where?: CalificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calificacions to fetch.
     */
    orderBy?: CalificacionOrderByWithRelationInput | CalificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calificacions.
     */
    cursor?: CalificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calificacions.
     */
    skip?: number
    distinct?: CalificacionScalarFieldEnum | CalificacionScalarFieldEnum[]
  }

  /**
   * Calificacion create
   */
  export type CalificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Calificacion.
     */
    data: XOR<CalificacionCreateInput, CalificacionUncheckedCreateInput>
  }

  /**
   * Calificacion createMany
   */
  export type CalificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calificacions.
     */
    data: CalificacionCreateManyInput | CalificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Calificacion createManyAndReturn
   */
  export type CalificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * The data used to create many Calificacions.
     */
    data: CalificacionCreateManyInput | CalificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calificacion update
   */
  export type CalificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Calificacion.
     */
    data: XOR<CalificacionUpdateInput, CalificacionUncheckedUpdateInput>
    /**
     * Choose, which Calificacion to update.
     */
    where: CalificacionWhereUniqueInput
  }

  /**
   * Calificacion updateMany
   */
  export type CalificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calificacions.
     */
    data: XOR<CalificacionUpdateManyMutationInput, CalificacionUncheckedUpdateManyInput>
    /**
     * Filter which Calificacions to update
     */
    where?: CalificacionWhereInput
    /**
     * Limit how many Calificacions to update.
     */
    limit?: number
  }

  /**
   * Calificacion updateManyAndReturn
   */
  export type CalificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * The data used to update Calificacions.
     */
    data: XOR<CalificacionUpdateManyMutationInput, CalificacionUncheckedUpdateManyInput>
    /**
     * Filter which Calificacions to update
     */
    where?: CalificacionWhereInput
    /**
     * Limit how many Calificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Calificacion upsert
   */
  export type CalificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Calificacion to update in case it exists.
     */
    where: CalificacionWhereUniqueInput
    /**
     * In case the Calificacion found by the `where` argument doesn't exist, create a new Calificacion with this data.
     */
    create: XOR<CalificacionCreateInput, CalificacionUncheckedCreateInput>
    /**
     * In case the Calificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalificacionUpdateInput, CalificacionUncheckedUpdateInput>
  }

  /**
   * Calificacion delete
   */
  export type CalificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
    /**
     * Filter which Calificacion to delete.
     */
    where: CalificacionWhereUniqueInput
  }

  /**
   * Calificacion deleteMany
   */
  export type CalificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calificacions to delete
     */
    where?: CalificacionWhereInput
    /**
     * Limit how many Calificacions to delete.
     */
    limit?: number
  }

  /**
   * Calificacion.cancion
   */
  export type Calificacion$cancionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cancion
     */
    select?: CancionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cancion
     */
    omit?: CancionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CancionInclude<ExtArgs> | null
    where?: CancionWhereInput
  }

  /**
   * Calificacion.album
   */
  export type Calificacion$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
  }

  /**
   * Calificacion without action
   */
  export type CalificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calificacion
     */
    select?: CalificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Calificacion
     */
    omit?: CalificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalificacionInclude<ExtArgs> | null
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
    generoId: 'generoId'
  };

  export type UsuarioGeneroScalarFieldEnum = (typeof UsuarioGeneroScalarFieldEnum)[keyof typeof UsuarioGeneroScalarFieldEnum]


  export const ArtistaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    spotifyId: 'spotifyId',
    imagenUrl: 'imagenUrl'
  };

  export type ArtistaScalarFieldEnum = (typeof ArtistaScalarFieldEnum)[keyof typeof ArtistaScalarFieldEnum]


  export const ArtistaGeneroScalarFieldEnum: {
    id: 'id',
    artistaId: 'artistaId',
    generoId: 'generoId'
  };

  export type ArtistaGeneroScalarFieldEnum = (typeof ArtistaGeneroScalarFieldEnum)[keyof typeof ArtistaGeneroScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    spotifyId: 'spotifyId',
    fechaLanzamiento: 'fechaLanzamiento',
    imagenUrl: 'imagenUrl',
    tipoAlbum: 'tipoAlbum',
    totalCanciones: 'totalCanciones',
    artistaId: 'artistaId'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const AlbumGeneroScalarFieldEnum: {
    id: 'id',
    albumId: 'albumId',
    generoId: 'generoId'
  };

  export type AlbumGeneroScalarFieldEnum = (typeof AlbumGeneroScalarFieldEnum)[keyof typeof AlbumGeneroScalarFieldEnum]


  export const CancionScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    spotifyId: 'spotifyId',
    duracionMs: 'duracionMs',
    albumId: 'albumId',
    artistaId: 'artistaId'
  };

  export type CancionScalarFieldEnum = (typeof CancionScalarFieldEnum)[keyof typeof CancionScalarFieldEnum]


  export const CancionGeneroScalarFieldEnum: {
    id: 'id',
    cancionId: 'cancionId',
    generoId: 'generoId'
  };

  export type CancionGeneroScalarFieldEnum = (typeof CancionGeneroScalarFieldEnum)[keyof typeof CancionGeneroScalarFieldEnum]


  export const ReseñaScalarFieldEnum: {
    id: 'id',
    contenido: 'contenido',
    usuarioId: 'usuarioId',
    cancionId: 'cancionId',
    albumId: 'albumId',
    creadoEn: 'creadoEn'
  };

  export type ReseñaScalarFieldEnum = (typeof ReseñaScalarFieldEnum)[keyof typeof ReseñaScalarFieldEnum]


  export const CalificacionScalarFieldEnum: {
    id: 'id',
    estrellas: 'estrellas',
    usuarioId: 'usuarioId',
    cancionId: 'cancionId',
    albumId: 'albumId',
    creadoEn: 'creadoEn'
  };

  export type CalificacionScalarFieldEnum = (typeof CalificacionScalarFieldEnum)[keyof typeof CalificacionScalarFieldEnum]


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
    calificaciones?: CalificacionListRelationFilter
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
    calificaciones?: CalificacionOrderByRelationAggregateInput
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
    calificaciones?: CalificacionListRelationFilter
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
    artistas?: ArtistaGeneroListRelationFilter
    albums?: AlbumGeneroListRelationFilter
    canciones?: CancionGeneroListRelationFilter
  }

  export type GeneroOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioGeneroOrderByRelationAggregateInput
    artistas?: ArtistaGeneroOrderByRelationAggregateInput
    albums?: AlbumGeneroOrderByRelationAggregateInput
    canciones?: CancionGeneroOrderByRelationAggregateInput
  }

  export type GeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    usuarios?: UsuarioGeneroListRelationFilter
    artistas?: ArtistaGeneroListRelationFilter
    albums?: AlbumGeneroListRelationFilter
    canciones?: CancionGeneroListRelationFilter
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
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }

  export type UsuarioGeneroOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    genero?: GeneroOrderByWithRelationInput
  }

  export type UsuarioGeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_generoId?: UsuarioGeneroUsuarioIdGeneroIdCompoundUniqueInput
    AND?: UsuarioGeneroWhereInput | UsuarioGeneroWhereInput[]
    OR?: UsuarioGeneroWhereInput[]
    NOT?: UsuarioGeneroWhereInput | UsuarioGeneroWhereInput[]
    usuarioId?: IntFilter<"UsuarioGenero"> | number
    generoId?: IntFilter<"UsuarioGenero"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }, "id" | "usuarioId_generoId">

  export type UsuarioGeneroOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
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
  }

  export type ArtistaWhereInput = {
    AND?: ArtistaWhereInput | ArtistaWhereInput[]
    OR?: ArtistaWhereInput[]
    NOT?: ArtistaWhereInput | ArtistaWhereInput[]
    id?: IntFilter<"Artista"> | number
    nombre?: StringFilter<"Artista"> | string
    spotifyId?: StringFilter<"Artista"> | string
    imagenUrl?: StringNullableFilter<"Artista"> | string | null
    generos?: ArtistaGeneroListRelationFilter
    albums?: AlbumListRelationFilter
    canciones?: CancionListRelationFilter
  }

  export type ArtistaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    spotifyId?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    generos?: ArtistaGeneroOrderByRelationAggregateInput
    albums?: AlbumOrderByRelationAggregateInput
    canciones?: CancionOrderByRelationAggregateInput
  }

  export type ArtistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    spotifyId?: string
    AND?: ArtistaWhereInput | ArtistaWhereInput[]
    OR?: ArtistaWhereInput[]
    NOT?: ArtistaWhereInput | ArtistaWhereInput[]
    nombre?: StringFilter<"Artista"> | string
    imagenUrl?: StringNullableFilter<"Artista"> | string | null
    generos?: ArtistaGeneroListRelationFilter
    albums?: AlbumListRelationFilter
    canciones?: CancionListRelationFilter
  }, "id" | "spotifyId">

  export type ArtistaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    spotifyId?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    _count?: ArtistaCountOrderByAggregateInput
    _avg?: ArtistaAvgOrderByAggregateInput
    _max?: ArtistaMaxOrderByAggregateInput
    _min?: ArtistaMinOrderByAggregateInput
    _sum?: ArtistaSumOrderByAggregateInput
  }

  export type ArtistaScalarWhereWithAggregatesInput = {
    AND?: ArtistaScalarWhereWithAggregatesInput | ArtistaScalarWhereWithAggregatesInput[]
    OR?: ArtistaScalarWhereWithAggregatesInput[]
    NOT?: ArtistaScalarWhereWithAggregatesInput | ArtistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artista"> | number
    nombre?: StringWithAggregatesFilter<"Artista"> | string
    spotifyId?: StringWithAggregatesFilter<"Artista"> | string
    imagenUrl?: StringNullableWithAggregatesFilter<"Artista"> | string | null
  }

  export type ArtistaGeneroWhereInput = {
    AND?: ArtistaGeneroWhereInput | ArtistaGeneroWhereInput[]
    OR?: ArtistaGeneroWhereInput[]
    NOT?: ArtistaGeneroWhereInput | ArtistaGeneroWhereInput[]
    id?: IntFilter<"ArtistaGenero"> | number
    artistaId?: IntFilter<"ArtistaGenero"> | number
    generoId?: IntFilter<"ArtistaGenero"> | number
    artista?: XOR<ArtistaScalarRelationFilter, ArtistaWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }

  export type ArtistaGeneroOrderByWithRelationInput = {
    id?: SortOrder
    artistaId?: SortOrder
    generoId?: SortOrder
    artista?: ArtistaOrderByWithRelationInput
    genero?: GeneroOrderByWithRelationInput
  }

  export type ArtistaGeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    artistaId_generoId?: ArtistaGeneroArtistaIdGeneroIdCompoundUniqueInput
    AND?: ArtistaGeneroWhereInput | ArtistaGeneroWhereInput[]
    OR?: ArtistaGeneroWhereInput[]
    NOT?: ArtistaGeneroWhereInput | ArtistaGeneroWhereInput[]
    artistaId?: IntFilter<"ArtistaGenero"> | number
    generoId?: IntFilter<"ArtistaGenero"> | number
    artista?: XOR<ArtistaScalarRelationFilter, ArtistaWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }, "id" | "artistaId_generoId">

  export type ArtistaGeneroOrderByWithAggregationInput = {
    id?: SortOrder
    artistaId?: SortOrder
    generoId?: SortOrder
    _count?: ArtistaGeneroCountOrderByAggregateInput
    _avg?: ArtistaGeneroAvgOrderByAggregateInput
    _max?: ArtistaGeneroMaxOrderByAggregateInput
    _min?: ArtistaGeneroMinOrderByAggregateInput
    _sum?: ArtistaGeneroSumOrderByAggregateInput
  }

  export type ArtistaGeneroScalarWhereWithAggregatesInput = {
    AND?: ArtistaGeneroScalarWhereWithAggregatesInput | ArtistaGeneroScalarWhereWithAggregatesInput[]
    OR?: ArtistaGeneroScalarWhereWithAggregatesInput[]
    NOT?: ArtistaGeneroScalarWhereWithAggregatesInput | ArtistaGeneroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ArtistaGenero"> | number
    artistaId?: IntWithAggregatesFilter<"ArtistaGenero"> | number
    generoId?: IntWithAggregatesFilter<"ArtistaGenero"> | number
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: IntFilter<"Album"> | number
    titulo?: StringFilter<"Album"> | string
    spotifyId?: StringFilter<"Album"> | string
    fechaLanzamiento?: DateTimeFilter<"Album"> | Date | string
    imagenUrl?: StringNullableFilter<"Album"> | string | null
    tipoAlbum?: StringFilter<"Album"> | string
    totalCanciones?: IntFilter<"Album"> | number
    artistaId?: IntFilter<"Album"> | number
    artista?: XOR<ArtistaScalarRelationFilter, ArtistaWhereInput>
    canciones?: CancionListRelationFilter
    generos?: AlbumGeneroListRelationFilter
    reseñas?: ReseñaListRelationFilter
    calificaciones?: CalificacionListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    fechaLanzamiento?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    tipoAlbum?: SortOrder
    totalCanciones?: SortOrder
    artistaId?: SortOrder
    artista?: ArtistaOrderByWithRelationInput
    canciones?: CancionOrderByRelationAggregateInput
    generos?: AlbumGeneroOrderByRelationAggregateInput
    reseñas?: ReseñaOrderByRelationAggregateInput
    calificaciones?: CalificacionOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    spotifyId?: string
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    titulo?: StringFilter<"Album"> | string
    fechaLanzamiento?: DateTimeFilter<"Album"> | Date | string
    imagenUrl?: StringNullableFilter<"Album"> | string | null
    tipoAlbum?: StringFilter<"Album"> | string
    totalCanciones?: IntFilter<"Album"> | number
    artistaId?: IntFilter<"Album"> | number
    artista?: XOR<ArtistaScalarRelationFilter, ArtistaWhereInput>
    canciones?: CancionListRelationFilter
    generos?: AlbumGeneroListRelationFilter
    reseñas?: ReseñaListRelationFilter
    calificaciones?: CalificacionListRelationFilter
  }, "id" | "spotifyId">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    fechaLanzamiento?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    tipoAlbum?: SortOrder
    totalCanciones?: SortOrder
    artistaId?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Album"> | number
    titulo?: StringWithAggregatesFilter<"Album"> | string
    spotifyId?: StringWithAggregatesFilter<"Album"> | string
    fechaLanzamiento?: DateTimeWithAggregatesFilter<"Album"> | Date | string
    imagenUrl?: StringNullableWithAggregatesFilter<"Album"> | string | null
    tipoAlbum?: StringWithAggregatesFilter<"Album"> | string
    totalCanciones?: IntWithAggregatesFilter<"Album"> | number
    artistaId?: IntWithAggregatesFilter<"Album"> | number
  }

  export type AlbumGeneroWhereInput = {
    AND?: AlbumGeneroWhereInput | AlbumGeneroWhereInput[]
    OR?: AlbumGeneroWhereInput[]
    NOT?: AlbumGeneroWhereInput | AlbumGeneroWhereInput[]
    id?: IntFilter<"AlbumGenero"> | number
    albumId?: IntFilter<"AlbumGenero"> | number
    generoId?: IntFilter<"AlbumGenero"> | number
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }

  export type AlbumGeneroOrderByWithRelationInput = {
    id?: SortOrder
    albumId?: SortOrder
    generoId?: SortOrder
    album?: AlbumOrderByWithRelationInput
    genero?: GeneroOrderByWithRelationInput
  }

  export type AlbumGeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    albumId_generoId?: AlbumGeneroAlbumIdGeneroIdCompoundUniqueInput
    AND?: AlbumGeneroWhereInput | AlbumGeneroWhereInput[]
    OR?: AlbumGeneroWhereInput[]
    NOT?: AlbumGeneroWhereInput | AlbumGeneroWhereInput[]
    albumId?: IntFilter<"AlbumGenero"> | number
    generoId?: IntFilter<"AlbumGenero"> | number
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }, "id" | "albumId_generoId">

  export type AlbumGeneroOrderByWithAggregationInput = {
    id?: SortOrder
    albumId?: SortOrder
    generoId?: SortOrder
    _count?: AlbumGeneroCountOrderByAggregateInput
    _avg?: AlbumGeneroAvgOrderByAggregateInput
    _max?: AlbumGeneroMaxOrderByAggregateInput
    _min?: AlbumGeneroMinOrderByAggregateInput
    _sum?: AlbumGeneroSumOrderByAggregateInput
  }

  export type AlbumGeneroScalarWhereWithAggregatesInput = {
    AND?: AlbumGeneroScalarWhereWithAggregatesInput | AlbumGeneroScalarWhereWithAggregatesInput[]
    OR?: AlbumGeneroScalarWhereWithAggregatesInput[]
    NOT?: AlbumGeneroScalarWhereWithAggregatesInput | AlbumGeneroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlbumGenero"> | number
    albumId?: IntWithAggregatesFilter<"AlbumGenero"> | number
    generoId?: IntWithAggregatesFilter<"AlbumGenero"> | number
  }

  export type CancionWhereInput = {
    AND?: CancionWhereInput | CancionWhereInput[]
    OR?: CancionWhereInput[]
    NOT?: CancionWhereInput | CancionWhereInput[]
    id?: IntFilter<"Cancion"> | number
    titulo?: StringFilter<"Cancion"> | string
    spotifyId?: StringFilter<"Cancion"> | string
    duracionMs?: IntFilter<"Cancion"> | number
    albumId?: IntFilter<"Cancion"> | number
    artistaId?: IntFilter<"Cancion"> | number
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    artista?: XOR<ArtistaScalarRelationFilter, ArtistaWhereInput>
    generos?: CancionGeneroListRelationFilter
    reseñas?: ReseñaListRelationFilter
    calificaciones?: CalificacionListRelationFilter
  }

  export type CancionOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    duracionMs?: SortOrder
    albumId?: SortOrder
    artistaId?: SortOrder
    album?: AlbumOrderByWithRelationInput
    artista?: ArtistaOrderByWithRelationInput
    generos?: CancionGeneroOrderByRelationAggregateInput
    reseñas?: ReseñaOrderByRelationAggregateInput
    calificaciones?: CalificacionOrderByRelationAggregateInput
  }

  export type CancionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    spotifyId?: string
    AND?: CancionWhereInput | CancionWhereInput[]
    OR?: CancionWhereInput[]
    NOT?: CancionWhereInput | CancionWhereInput[]
    titulo?: StringFilter<"Cancion"> | string
    duracionMs?: IntFilter<"Cancion"> | number
    albumId?: IntFilter<"Cancion"> | number
    artistaId?: IntFilter<"Cancion"> | number
    album?: XOR<AlbumScalarRelationFilter, AlbumWhereInput>
    artista?: XOR<ArtistaScalarRelationFilter, ArtistaWhereInput>
    generos?: CancionGeneroListRelationFilter
    reseñas?: ReseñaListRelationFilter
    calificaciones?: CalificacionListRelationFilter
  }, "id" | "spotifyId">

  export type CancionOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    duracionMs?: SortOrder
    albumId?: SortOrder
    artistaId?: SortOrder
    _count?: CancionCountOrderByAggregateInput
    _avg?: CancionAvgOrderByAggregateInput
    _max?: CancionMaxOrderByAggregateInput
    _min?: CancionMinOrderByAggregateInput
    _sum?: CancionSumOrderByAggregateInput
  }

  export type CancionScalarWhereWithAggregatesInput = {
    AND?: CancionScalarWhereWithAggregatesInput | CancionScalarWhereWithAggregatesInput[]
    OR?: CancionScalarWhereWithAggregatesInput[]
    NOT?: CancionScalarWhereWithAggregatesInput | CancionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cancion"> | number
    titulo?: StringWithAggregatesFilter<"Cancion"> | string
    spotifyId?: StringWithAggregatesFilter<"Cancion"> | string
    duracionMs?: IntWithAggregatesFilter<"Cancion"> | number
    albumId?: IntWithAggregatesFilter<"Cancion"> | number
    artistaId?: IntWithAggregatesFilter<"Cancion"> | number
  }

  export type CancionGeneroWhereInput = {
    AND?: CancionGeneroWhereInput | CancionGeneroWhereInput[]
    OR?: CancionGeneroWhereInput[]
    NOT?: CancionGeneroWhereInput | CancionGeneroWhereInput[]
    id?: IntFilter<"CancionGenero"> | number
    cancionId?: IntFilter<"CancionGenero"> | number
    generoId?: IntFilter<"CancionGenero"> | number
    cancion?: XOR<CancionScalarRelationFilter, CancionWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }

  export type CancionGeneroOrderByWithRelationInput = {
    id?: SortOrder
    cancionId?: SortOrder
    generoId?: SortOrder
    cancion?: CancionOrderByWithRelationInput
    genero?: GeneroOrderByWithRelationInput
  }

  export type CancionGeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cancionId_generoId?: CancionGeneroCancionIdGeneroIdCompoundUniqueInput
    AND?: CancionGeneroWhereInput | CancionGeneroWhereInput[]
    OR?: CancionGeneroWhereInput[]
    NOT?: CancionGeneroWhereInput | CancionGeneroWhereInput[]
    cancionId?: IntFilter<"CancionGenero"> | number
    generoId?: IntFilter<"CancionGenero"> | number
    cancion?: XOR<CancionScalarRelationFilter, CancionWhereInput>
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
  }, "id" | "cancionId_generoId">

  export type CancionGeneroOrderByWithAggregationInput = {
    id?: SortOrder
    cancionId?: SortOrder
    generoId?: SortOrder
    _count?: CancionGeneroCountOrderByAggregateInput
    _avg?: CancionGeneroAvgOrderByAggregateInput
    _max?: CancionGeneroMaxOrderByAggregateInput
    _min?: CancionGeneroMinOrderByAggregateInput
    _sum?: CancionGeneroSumOrderByAggregateInput
  }

  export type CancionGeneroScalarWhereWithAggregatesInput = {
    AND?: CancionGeneroScalarWhereWithAggregatesInput | CancionGeneroScalarWhereWithAggregatesInput[]
    OR?: CancionGeneroScalarWhereWithAggregatesInput[]
    NOT?: CancionGeneroScalarWhereWithAggregatesInput | CancionGeneroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CancionGenero"> | number
    cancionId?: IntWithAggregatesFilter<"CancionGenero"> | number
    generoId?: IntWithAggregatesFilter<"CancionGenero"> | number
  }

  export type ReseñaWhereInput = {
    AND?: ReseñaWhereInput | ReseñaWhereInput[]
    OR?: ReseñaWhereInput[]
    NOT?: ReseñaWhereInput | ReseñaWhereInput[]
    id?: IntFilter<"Reseña"> | number
    contenido?: StringFilter<"Reseña"> | string
    usuarioId?: IntFilter<"Reseña"> | number
    cancionId?: IntNullableFilter<"Reseña"> | number | null
    albumId?: IntNullableFilter<"Reseña"> | number | null
    creadoEn?: DateTimeFilter<"Reseña"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cancion?: XOR<CancionNullableScalarRelationFilter, CancionWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
  }

  export type ReseñaOrderByWithRelationInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    cancion?: CancionOrderByWithRelationInput
    album?: AlbumOrderByWithRelationInput
  }

  export type ReseñaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_cancionId?: ReseñaUsuarioIdCancionIdCompoundUniqueInput
    usuarioId_albumId?: ReseñaUsuarioIdAlbumIdCompoundUniqueInput
    AND?: ReseñaWhereInput | ReseñaWhereInput[]
    OR?: ReseñaWhereInput[]
    NOT?: ReseñaWhereInput | ReseñaWhereInput[]
    contenido?: StringFilter<"Reseña"> | string
    usuarioId?: IntFilter<"Reseña"> | number
    cancionId?: IntNullableFilter<"Reseña"> | number | null
    albumId?: IntNullableFilter<"Reseña"> | number | null
    creadoEn?: DateTimeFilter<"Reseña"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cancion?: XOR<CancionNullableScalarRelationFilter, CancionWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
  }, "id" | "usuarioId_cancionId" | "usuarioId_albumId">

  export type ReseñaOrderByWithAggregationInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
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
    id?: IntWithAggregatesFilter<"Reseña"> | number
    contenido?: StringWithAggregatesFilter<"Reseña"> | string
    usuarioId?: IntWithAggregatesFilter<"Reseña"> | number
    cancionId?: IntNullableWithAggregatesFilter<"Reseña"> | number | null
    albumId?: IntNullableWithAggregatesFilter<"Reseña"> | number | null
    creadoEn?: DateTimeWithAggregatesFilter<"Reseña"> | Date | string
  }

  export type CalificacionWhereInput = {
    AND?: CalificacionWhereInput | CalificacionWhereInput[]
    OR?: CalificacionWhereInput[]
    NOT?: CalificacionWhereInput | CalificacionWhereInput[]
    id?: IntFilter<"Calificacion"> | number
    estrellas?: IntFilter<"Calificacion"> | number
    usuarioId?: IntFilter<"Calificacion"> | number
    cancionId?: IntNullableFilter<"Calificacion"> | number | null
    albumId?: IntNullableFilter<"Calificacion"> | number | null
    creadoEn?: DateTimeFilter<"Calificacion"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cancion?: XOR<CancionNullableScalarRelationFilter, CancionWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
  }

  export type CalificacionOrderByWithRelationInput = {
    id?: SortOrder
    estrellas?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    cancion?: CancionOrderByWithRelationInput
    album?: AlbumOrderByWithRelationInput
  }

  export type CalificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_cancionId?: CalificacionUsuarioIdCancionIdCompoundUniqueInput
    usuarioId_albumId?: CalificacionUsuarioIdAlbumIdCompoundUniqueInput
    AND?: CalificacionWhereInput | CalificacionWhereInput[]
    OR?: CalificacionWhereInput[]
    NOT?: CalificacionWhereInput | CalificacionWhereInput[]
    estrellas?: IntFilter<"Calificacion"> | number
    usuarioId?: IntFilter<"Calificacion"> | number
    cancionId?: IntNullableFilter<"Calificacion"> | number | null
    albumId?: IntNullableFilter<"Calificacion"> | number | null
    creadoEn?: DateTimeFilter<"Calificacion"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    cancion?: XOR<CancionNullableScalarRelationFilter, CancionWhereInput> | null
    album?: XOR<AlbumNullableScalarRelationFilter, AlbumWhereInput> | null
  }, "id" | "usuarioId_cancionId" | "usuarioId_albumId">

  export type CalificacionOrderByWithAggregationInput = {
    id?: SortOrder
    estrellas?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrderInput | SortOrder
    albumId?: SortOrderInput | SortOrder
    creadoEn?: SortOrder
    _count?: CalificacionCountOrderByAggregateInput
    _avg?: CalificacionAvgOrderByAggregateInput
    _max?: CalificacionMaxOrderByAggregateInput
    _min?: CalificacionMinOrderByAggregateInput
    _sum?: CalificacionSumOrderByAggregateInput
  }

  export type CalificacionScalarWhereWithAggregatesInput = {
    AND?: CalificacionScalarWhereWithAggregatesInput | CalificacionScalarWhereWithAggregatesInput[]
    OR?: CalificacionScalarWhereWithAggregatesInput[]
    NOT?: CalificacionScalarWhereWithAggregatesInput | CalificacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Calificacion"> | number
    estrellas?: IntWithAggregatesFilter<"Calificacion"> | number
    usuarioId?: IntWithAggregatesFilter<"Calificacion"> | number
    cancionId?: IntNullableWithAggregatesFilter<"Calificacion"> | number | null
    albumId?: IntNullableWithAggregatesFilter<"Calificacion"> | number | null
    creadoEn?: DateTimeWithAggregatesFilter<"Calificacion"> | Date | string
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
    reseñas?: ReseñaCreateNestedManyWithoutUsuarioInput
    calificaciones?: CalificacionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    generos?: UsuarioGeneroUncheckedCreateNestedManyWithoutUsuarioInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutUsuarioInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: UsuarioGeneroUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUpdateManyWithoutUsuarioNestedInput
    calificaciones?: CalificacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: UsuarioGeneroUncheckedUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutUsuarioNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutUsuarioNestedInput
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
    artistas?: ArtistaGeneroCreateNestedManyWithoutGeneroInput
    albums?: AlbumGeneroCreateNestedManyWithoutGeneroInput
    canciones?: CancionGeneroCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioGeneroUncheckedCreateNestedManyWithoutGeneroInput
    artistas?: ArtistaGeneroUncheckedCreateNestedManyWithoutGeneroInput
    albums?: AlbumGeneroUncheckedCreateNestedManyWithoutGeneroInput
    canciones?: CancionGeneroUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUpdateManyWithoutGeneroNestedInput
    artistas?: ArtistaGeneroUpdateManyWithoutGeneroNestedInput
    albums?: AlbumGeneroUpdateManyWithoutGeneroNestedInput
    canciones?: CancionGeneroUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    artistas?: ArtistaGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    albums?: AlbumGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    canciones?: CancionGeneroUncheckedUpdateManyWithoutGeneroNestedInput
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
    usuario: UsuarioCreateNestedOneWithoutGenerosInput
    genero: GeneroCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioGeneroUncheckedCreateInput = {
    id?: number
    usuarioId: number
    generoId: number
  }

  export type UsuarioGeneroUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutGenerosNestedInput
    genero?: GeneroUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioGeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioGeneroCreateManyInput = {
    id?: number
    usuarioId: number
    generoId: number
  }

  export type UsuarioGeneroUpdateManyMutationInput = {

  }

  export type UsuarioGeneroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistaCreateInput = {
    nombre: string
    spotifyId: string
    imagenUrl?: string | null
    generos?: ArtistaGeneroCreateNestedManyWithoutArtistaInput
    albums?: AlbumCreateNestedManyWithoutArtistaInput
    canciones?: CancionCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaUncheckedCreateInput = {
    id?: number
    nombre: string
    spotifyId: string
    imagenUrl?: string | null
    generos?: ArtistaGeneroUncheckedCreateNestedManyWithoutArtistaInput
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistaInput
    canciones?: CancionUncheckedCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: ArtistaGeneroUpdateManyWithoutArtistaNestedInput
    albums?: AlbumUpdateManyWithoutArtistaNestedInput
    canciones?: CancionUpdateManyWithoutArtistaNestedInput
  }

  export type ArtistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: ArtistaGeneroUncheckedUpdateManyWithoutArtistaNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutArtistaNestedInput
    canciones?: CancionUncheckedUpdateManyWithoutArtistaNestedInput
  }

  export type ArtistaCreateManyInput = {
    id?: number
    nombre: string
    spotifyId: string
    imagenUrl?: string | null
  }

  export type ArtistaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistaGeneroCreateInput = {
    artista: ArtistaCreateNestedOneWithoutGenerosInput
    genero: GeneroCreateNestedOneWithoutArtistasInput
  }

  export type ArtistaGeneroUncheckedCreateInput = {
    id?: number
    artistaId: number
    generoId: number
  }

  export type ArtistaGeneroUpdateInput = {
    artista?: ArtistaUpdateOneRequiredWithoutGenerosNestedInput
    genero?: GeneroUpdateOneRequiredWithoutArtistasNestedInput
  }

  export type ArtistaGeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistaGeneroCreateManyInput = {
    id?: number
    artistaId: number
    generoId: number
  }

  export type ArtistaGeneroUpdateManyMutationInput = {

  }

  export type ArtistaGeneroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumCreateInput = {
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artista: ArtistaCreateNestedOneWithoutAlbumsInput
    canciones?: CancionCreateNestedManyWithoutAlbumInput
    generos?: AlbumGeneroCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artistaId: number
    canciones?: CancionUncheckedCreateNestedManyWithoutAlbumInput
    generos?: AlbumGeneroUncheckedCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artista?: ArtistaUpdateOneRequiredWithoutAlbumsNestedInput
    canciones?: CancionUpdateManyWithoutAlbumNestedInput
    generos?: AlbumGeneroUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    canciones?: CancionUncheckedUpdateManyWithoutAlbumNestedInput
    generos?: AlbumGeneroUncheckedUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: number
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artistaId: number
  }

  export type AlbumUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumGeneroCreateInput = {
    album: AlbumCreateNestedOneWithoutGenerosInput
    genero: GeneroCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumGeneroUncheckedCreateInput = {
    id?: number
    albumId: number
    generoId: number
  }

  export type AlbumGeneroUpdateInput = {
    album?: AlbumUpdateOneRequiredWithoutGenerosNestedInput
    genero?: GeneroUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type AlbumGeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumGeneroCreateManyInput = {
    id?: number
    albumId: number
    generoId: number
  }

  export type AlbumGeneroUpdateManyMutationInput = {

  }

  export type AlbumGeneroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type CancionCreateInput = {
    titulo: string
    spotifyId: string
    duracionMs: number
    album: AlbumCreateNestedOneWithoutCancionesInput
    artista: ArtistaCreateNestedOneWithoutCancionesInput
    generos?: CancionGeneroCreateNestedManyWithoutCancionInput
    reseñas?: ReseñaCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionCreateNestedManyWithoutCancionInput
  }

  export type CancionUncheckedCreateInput = {
    id?: number
    titulo: string
    spotifyId: string
    duracionMs: number
    albumId: number
    artistaId: number
    generos?: CancionGeneroUncheckedCreateNestedManyWithoutCancionInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutCancionInput
  }

  export type CancionUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    album?: AlbumUpdateOneRequiredWithoutCancionesNestedInput
    artista?: ArtistaUpdateOneRequiredWithoutCancionesNestedInput
    generos?: CancionGeneroUpdateManyWithoutCancionNestedInput
    reseñas?: ReseñaUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUpdateManyWithoutCancionNestedInput
  }

  export type CancionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    generos?: CancionGeneroUncheckedUpdateManyWithoutCancionNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type CancionCreateManyInput = {
    id?: number
    titulo: string
    spotifyId: string
    duracionMs: number
    albumId: number
    artistaId: number
  }

  export type CancionUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
  }

  export type CancionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
  }

  export type CancionGeneroCreateInput = {
    cancion: CancionCreateNestedOneWithoutGenerosInput
    genero: GeneroCreateNestedOneWithoutCancionesInput
  }

  export type CancionGeneroUncheckedCreateInput = {
    id?: number
    cancionId: number
    generoId: number
  }

  export type CancionGeneroUpdateInput = {
    cancion?: CancionUpdateOneRequiredWithoutGenerosNestedInput
    genero?: GeneroUpdateOneRequiredWithoutCancionesNestedInput
  }

  export type CancionGeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type CancionGeneroCreateManyInput = {
    id?: number
    cancionId: number
    generoId: number
  }

  export type CancionGeneroUpdateManyMutationInput = {

  }

  export type CancionGeneroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReseñaCreateInput = {
    contenido: string
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReseñasInput
    cancion?: CancionCreateNestedOneWithoutReseñasInput
    album?: AlbumCreateNestedOneWithoutReseñasInput
  }

  export type ReseñaUncheckedCreateInput = {
    id?: number
    contenido: string
    usuarioId: number
    cancionId?: number | null
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type ReseñaUpdateInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReseñasNestedInput
    cancion?: CancionUpdateOneWithoutReseñasNestedInput
    album?: AlbumUpdateOneWithoutReseñasNestedInput
  }

  export type ReseñaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReseñaCreateManyInput = {
    id?: number
    contenido: string
    usuarioId: number
    cancionId?: number | null
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type ReseñaUpdateManyMutationInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReseñaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalificacionCreateInput = {
    estrellas: number
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCalificacionesInput
    cancion?: CancionCreateNestedOneWithoutCalificacionesInput
    album?: AlbumCreateNestedOneWithoutCalificacionesInput
  }

  export type CalificacionUncheckedCreateInput = {
    id?: number
    estrellas: number
    usuarioId: number
    cancionId?: number | null
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type CalificacionUpdateInput = {
    estrellas?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCalificacionesNestedInput
    cancion?: CancionUpdateOneWithoutCalificacionesNestedInput
    album?: AlbumUpdateOneWithoutCalificacionesNestedInput
  }

  export type CalificacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estrellas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalificacionCreateManyInput = {
    id?: number
    estrellas: number
    usuarioId: number
    cancionId?: number | null
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type CalificacionUpdateManyMutationInput = {
    estrellas?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalificacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estrellas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CalificacionListRelationFilter = {
    every?: CalificacionWhereInput
    some?: CalificacionWhereInput
    none?: CalificacionWhereInput
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

  export type CalificacionOrderByRelationAggregateInput = {
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

  export type ArtistaGeneroListRelationFilter = {
    every?: ArtistaGeneroWhereInput
    some?: ArtistaGeneroWhereInput
    none?: ArtistaGeneroWhereInput
  }

  export type AlbumGeneroListRelationFilter = {
    every?: AlbumGeneroWhereInput
    some?: AlbumGeneroWhereInput
    none?: AlbumGeneroWhereInput
  }

  export type CancionGeneroListRelationFilter = {
    every?: CancionGeneroWhereInput
    some?: CancionGeneroWhereInput
    none?: CancionGeneroWhereInput
  }

  export type ArtistaGeneroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumGeneroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CancionGeneroOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type UsuarioGeneroUsuarioIdGeneroIdCompoundUniqueInput = {
    usuarioId: number
    generoId: number
  }

  export type UsuarioGeneroCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
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
  }

  export type UsuarioGeneroMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
  }

  export type UsuarioGeneroSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    generoId?: SortOrder
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type CancionListRelationFilter = {
    every?: CancionWhereInput
    some?: CancionWhereInput
    none?: CancionWhereInput
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CancionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    spotifyId?: SortOrder
    imagenUrl?: SortOrder
  }

  export type ArtistaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    spotifyId?: SortOrder
    imagenUrl?: SortOrder
  }

  export type ArtistaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    spotifyId?: SortOrder
    imagenUrl?: SortOrder
  }

  export type ArtistaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistaScalarRelationFilter = {
    is?: ArtistaWhereInput
    isNot?: ArtistaWhereInput
  }

  export type ArtistaGeneroArtistaIdGeneroIdCompoundUniqueInput = {
    artistaId: number
    generoId: number
  }

  export type ArtistaGeneroCountOrderByAggregateInput = {
    id?: SortOrder
    artistaId?: SortOrder
    generoId?: SortOrder
  }

  export type ArtistaGeneroAvgOrderByAggregateInput = {
    id?: SortOrder
    artistaId?: SortOrder
    generoId?: SortOrder
  }

  export type ArtistaGeneroMaxOrderByAggregateInput = {
    id?: SortOrder
    artistaId?: SortOrder
    generoId?: SortOrder
  }

  export type ArtistaGeneroMinOrderByAggregateInput = {
    id?: SortOrder
    artistaId?: SortOrder
    generoId?: SortOrder
  }

  export type ArtistaGeneroSumOrderByAggregateInput = {
    id?: SortOrder
    artistaId?: SortOrder
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

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    fechaLanzamiento?: SortOrder
    imagenUrl?: SortOrder
    tipoAlbum?: SortOrder
    totalCanciones?: SortOrder
    artistaId?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    totalCanciones?: SortOrder
    artistaId?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    fechaLanzamiento?: SortOrder
    imagenUrl?: SortOrder
    tipoAlbum?: SortOrder
    totalCanciones?: SortOrder
    artistaId?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    fechaLanzamiento?: SortOrder
    imagenUrl?: SortOrder
    tipoAlbum?: SortOrder
    totalCanciones?: SortOrder
    artistaId?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
    totalCanciones?: SortOrder
    artistaId?: SortOrder
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

  export type AlbumScalarRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type AlbumGeneroAlbumIdGeneroIdCompoundUniqueInput = {
    albumId: number
    generoId: number
  }

  export type AlbumGeneroCountOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    generoId?: SortOrder
  }

  export type AlbumGeneroAvgOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    generoId?: SortOrder
  }

  export type AlbumGeneroMaxOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    generoId?: SortOrder
  }

  export type AlbumGeneroMinOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    generoId?: SortOrder
  }

  export type AlbumGeneroSumOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    generoId?: SortOrder
  }

  export type CancionCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    duracionMs?: SortOrder
    albumId?: SortOrder
    artistaId?: SortOrder
  }

  export type CancionAvgOrderByAggregateInput = {
    id?: SortOrder
    duracionMs?: SortOrder
    albumId?: SortOrder
    artistaId?: SortOrder
  }

  export type CancionMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    duracionMs?: SortOrder
    albumId?: SortOrder
    artistaId?: SortOrder
  }

  export type CancionMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    spotifyId?: SortOrder
    duracionMs?: SortOrder
    albumId?: SortOrder
    artistaId?: SortOrder
  }

  export type CancionSumOrderByAggregateInput = {
    id?: SortOrder
    duracionMs?: SortOrder
    albumId?: SortOrder
    artistaId?: SortOrder
  }

  export type CancionScalarRelationFilter = {
    is?: CancionWhereInput
    isNot?: CancionWhereInput
  }

  export type CancionGeneroCancionIdGeneroIdCompoundUniqueInput = {
    cancionId: number
    generoId: number
  }

  export type CancionGeneroCountOrderByAggregateInput = {
    id?: SortOrder
    cancionId?: SortOrder
    generoId?: SortOrder
  }

  export type CancionGeneroAvgOrderByAggregateInput = {
    id?: SortOrder
    cancionId?: SortOrder
    generoId?: SortOrder
  }

  export type CancionGeneroMaxOrderByAggregateInput = {
    id?: SortOrder
    cancionId?: SortOrder
    generoId?: SortOrder
  }

  export type CancionGeneroMinOrderByAggregateInput = {
    id?: SortOrder
    cancionId?: SortOrder
    generoId?: SortOrder
  }

  export type CancionGeneroSumOrderByAggregateInput = {
    id?: SortOrder
    cancionId?: SortOrder
    generoId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CancionNullableScalarRelationFilter = {
    is?: CancionWhereInput | null
    isNot?: CancionWhereInput | null
  }

  export type AlbumNullableScalarRelationFilter = {
    is?: AlbumWhereInput | null
    isNot?: AlbumWhereInput | null
  }

  export type ReseñaUsuarioIdCancionIdCompoundUniqueInput = {
    usuarioId: number
    cancionId: number
  }

  export type ReseñaUsuarioIdAlbumIdCompoundUniqueInput = {
    usuarioId: number
    albumId: number
  }

  export type ReseñaCountOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
    creadoEn?: SortOrder
  }

  export type ReseñaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
  }

  export type ReseñaMaxOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
    creadoEn?: SortOrder
  }

  export type ReseñaMinOrderByAggregateInput = {
    id?: SortOrder
    contenido?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
    creadoEn?: SortOrder
  }

  export type ReseñaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CalificacionUsuarioIdCancionIdCompoundUniqueInput = {
    usuarioId: number
    cancionId: number
  }

  export type CalificacionUsuarioIdAlbumIdCompoundUniqueInput = {
    usuarioId: number
    albumId: number
  }

  export type CalificacionCountOrderByAggregateInput = {
    id?: SortOrder
    estrellas?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
    creadoEn?: SortOrder
  }

  export type CalificacionAvgOrderByAggregateInput = {
    id?: SortOrder
    estrellas?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
  }

  export type CalificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    estrellas?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
    creadoEn?: SortOrder
  }

  export type CalificacionMinOrderByAggregateInput = {
    id?: SortOrder
    estrellas?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
    creadoEn?: SortOrder
  }

  export type CalificacionSumOrderByAggregateInput = {
    id?: SortOrder
    estrellas?: SortOrder
    usuarioId?: SortOrder
    cancionId?: SortOrder
    albumId?: SortOrder
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

  export type ReseñaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput> | ReseñaCreateWithoutUsuarioInput[] | ReseñaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUsuarioInput | ReseñaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReseñaCreateManyUsuarioInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type CalificacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput> | CalificacionCreateWithoutUsuarioInput[] | CalificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutUsuarioInput | CalificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: CalificacionCreateManyUsuarioInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
  }

  export type UsuarioGeneroUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioGeneroCreateWithoutUsuarioInput, UsuarioGeneroUncheckedCreateWithoutUsuarioInput> | UsuarioGeneroCreateWithoutUsuarioInput[] | UsuarioGeneroUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutUsuarioInput | UsuarioGeneroCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioGeneroCreateManyUsuarioInputEnvelope
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
  }

  export type ReseñaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput> | ReseñaCreateWithoutUsuarioInput[] | ReseñaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUsuarioInput | ReseñaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReseñaCreateManyUsuarioInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type CalificacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput> | CalificacionCreateWithoutUsuarioInput[] | CalificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutUsuarioInput | CalificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: CalificacionCreateManyUsuarioInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
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

  export type ReseñaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput> | ReseñaCreateWithoutUsuarioInput[] | ReseñaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUsuarioInput | ReseñaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutUsuarioInput | ReseñaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReseñaCreateManyUsuarioInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutUsuarioInput | ReseñaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutUsuarioInput | ReseñaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type CalificacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput> | CalificacionCreateWithoutUsuarioInput[] | CalificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutUsuarioInput | CalificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutUsuarioInput | CalificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CalificacionCreateManyUsuarioInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutUsuarioInput | CalificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutUsuarioInput | CalificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
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

  export type ReseñaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput> | ReseñaCreateWithoutUsuarioInput[] | ReseñaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutUsuarioInput | ReseñaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutUsuarioInput | ReseñaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReseñaCreateManyUsuarioInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutUsuarioInput | ReseñaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutUsuarioInput | ReseñaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type CalificacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput> | CalificacionCreateWithoutUsuarioInput[] | CalificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutUsuarioInput | CalificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutUsuarioInput | CalificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CalificacionCreateManyUsuarioInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutUsuarioInput | CalificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutUsuarioInput | CalificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
  }

  export type UsuarioGeneroCreateNestedManyWithoutGeneroInput = {
    create?: XOR<UsuarioGeneroCreateWithoutGeneroInput, UsuarioGeneroUncheckedCreateWithoutGeneroInput> | UsuarioGeneroCreateWithoutGeneroInput[] | UsuarioGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutGeneroInput | UsuarioGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: UsuarioGeneroCreateManyGeneroInputEnvelope
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
  }

  export type ArtistaGeneroCreateNestedManyWithoutGeneroInput = {
    create?: XOR<ArtistaGeneroCreateWithoutGeneroInput, ArtistaGeneroUncheckedCreateWithoutGeneroInput> | ArtistaGeneroCreateWithoutGeneroInput[] | ArtistaGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ArtistaGeneroCreateOrConnectWithoutGeneroInput | ArtistaGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: ArtistaGeneroCreateManyGeneroInputEnvelope
    connect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
  }

  export type AlbumGeneroCreateNestedManyWithoutGeneroInput = {
    create?: XOR<AlbumGeneroCreateWithoutGeneroInput, AlbumGeneroUncheckedCreateWithoutGeneroInput> | AlbumGeneroCreateWithoutGeneroInput[] | AlbumGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: AlbumGeneroCreateOrConnectWithoutGeneroInput | AlbumGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: AlbumGeneroCreateManyGeneroInputEnvelope
    connect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
  }

  export type CancionGeneroCreateNestedManyWithoutGeneroInput = {
    create?: XOR<CancionGeneroCreateWithoutGeneroInput, CancionGeneroUncheckedCreateWithoutGeneroInput> | CancionGeneroCreateWithoutGeneroInput[] | CancionGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: CancionGeneroCreateOrConnectWithoutGeneroInput | CancionGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: CancionGeneroCreateManyGeneroInputEnvelope
    connect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
  }

  export type UsuarioGeneroUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<UsuarioGeneroCreateWithoutGeneroInput, UsuarioGeneroUncheckedCreateWithoutGeneroInput> | UsuarioGeneroCreateWithoutGeneroInput[] | UsuarioGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: UsuarioGeneroCreateOrConnectWithoutGeneroInput | UsuarioGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: UsuarioGeneroCreateManyGeneroInputEnvelope
    connect?: UsuarioGeneroWhereUniqueInput | UsuarioGeneroWhereUniqueInput[]
  }

  export type ArtistaGeneroUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<ArtistaGeneroCreateWithoutGeneroInput, ArtistaGeneroUncheckedCreateWithoutGeneroInput> | ArtistaGeneroCreateWithoutGeneroInput[] | ArtistaGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ArtistaGeneroCreateOrConnectWithoutGeneroInput | ArtistaGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: ArtistaGeneroCreateManyGeneroInputEnvelope
    connect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
  }

  export type AlbumGeneroUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<AlbumGeneroCreateWithoutGeneroInput, AlbumGeneroUncheckedCreateWithoutGeneroInput> | AlbumGeneroCreateWithoutGeneroInput[] | AlbumGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: AlbumGeneroCreateOrConnectWithoutGeneroInput | AlbumGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: AlbumGeneroCreateManyGeneroInputEnvelope
    connect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
  }

  export type CancionGeneroUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<CancionGeneroCreateWithoutGeneroInput, CancionGeneroUncheckedCreateWithoutGeneroInput> | CancionGeneroCreateWithoutGeneroInput[] | CancionGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: CancionGeneroCreateOrConnectWithoutGeneroInput | CancionGeneroCreateOrConnectWithoutGeneroInput[]
    createMany?: CancionGeneroCreateManyGeneroInputEnvelope
    connect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
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

  export type ArtistaGeneroUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<ArtistaGeneroCreateWithoutGeneroInput, ArtistaGeneroUncheckedCreateWithoutGeneroInput> | ArtistaGeneroCreateWithoutGeneroInput[] | ArtistaGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ArtistaGeneroCreateOrConnectWithoutGeneroInput | ArtistaGeneroCreateOrConnectWithoutGeneroInput[]
    upsert?: ArtistaGeneroUpsertWithWhereUniqueWithoutGeneroInput | ArtistaGeneroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: ArtistaGeneroCreateManyGeneroInputEnvelope
    set?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    disconnect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    delete?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    connect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    update?: ArtistaGeneroUpdateWithWhereUniqueWithoutGeneroInput | ArtistaGeneroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: ArtistaGeneroUpdateManyWithWhereWithoutGeneroInput | ArtistaGeneroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: ArtistaGeneroScalarWhereInput | ArtistaGeneroScalarWhereInput[]
  }

  export type AlbumGeneroUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<AlbumGeneroCreateWithoutGeneroInput, AlbumGeneroUncheckedCreateWithoutGeneroInput> | AlbumGeneroCreateWithoutGeneroInput[] | AlbumGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: AlbumGeneroCreateOrConnectWithoutGeneroInput | AlbumGeneroCreateOrConnectWithoutGeneroInput[]
    upsert?: AlbumGeneroUpsertWithWhereUniqueWithoutGeneroInput | AlbumGeneroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: AlbumGeneroCreateManyGeneroInputEnvelope
    set?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    disconnect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    delete?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    connect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    update?: AlbumGeneroUpdateWithWhereUniqueWithoutGeneroInput | AlbumGeneroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: AlbumGeneroUpdateManyWithWhereWithoutGeneroInput | AlbumGeneroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: AlbumGeneroScalarWhereInput | AlbumGeneroScalarWhereInput[]
  }

  export type CancionGeneroUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<CancionGeneroCreateWithoutGeneroInput, CancionGeneroUncheckedCreateWithoutGeneroInput> | CancionGeneroCreateWithoutGeneroInput[] | CancionGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: CancionGeneroCreateOrConnectWithoutGeneroInput | CancionGeneroCreateOrConnectWithoutGeneroInput[]
    upsert?: CancionGeneroUpsertWithWhereUniqueWithoutGeneroInput | CancionGeneroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: CancionGeneroCreateManyGeneroInputEnvelope
    set?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    disconnect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    delete?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    connect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    update?: CancionGeneroUpdateWithWhereUniqueWithoutGeneroInput | CancionGeneroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: CancionGeneroUpdateManyWithWhereWithoutGeneroInput | CancionGeneroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: CancionGeneroScalarWhereInput | CancionGeneroScalarWhereInput[]
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

  export type ArtistaGeneroUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<ArtistaGeneroCreateWithoutGeneroInput, ArtistaGeneroUncheckedCreateWithoutGeneroInput> | ArtistaGeneroCreateWithoutGeneroInput[] | ArtistaGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ArtistaGeneroCreateOrConnectWithoutGeneroInput | ArtistaGeneroCreateOrConnectWithoutGeneroInput[]
    upsert?: ArtistaGeneroUpsertWithWhereUniqueWithoutGeneroInput | ArtistaGeneroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: ArtistaGeneroCreateManyGeneroInputEnvelope
    set?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    disconnect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    delete?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    connect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    update?: ArtistaGeneroUpdateWithWhereUniqueWithoutGeneroInput | ArtistaGeneroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: ArtistaGeneroUpdateManyWithWhereWithoutGeneroInput | ArtistaGeneroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: ArtistaGeneroScalarWhereInput | ArtistaGeneroScalarWhereInput[]
  }

  export type AlbumGeneroUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<AlbumGeneroCreateWithoutGeneroInput, AlbumGeneroUncheckedCreateWithoutGeneroInput> | AlbumGeneroCreateWithoutGeneroInput[] | AlbumGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: AlbumGeneroCreateOrConnectWithoutGeneroInput | AlbumGeneroCreateOrConnectWithoutGeneroInput[]
    upsert?: AlbumGeneroUpsertWithWhereUniqueWithoutGeneroInput | AlbumGeneroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: AlbumGeneroCreateManyGeneroInputEnvelope
    set?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    disconnect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    delete?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    connect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    update?: AlbumGeneroUpdateWithWhereUniqueWithoutGeneroInput | AlbumGeneroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: AlbumGeneroUpdateManyWithWhereWithoutGeneroInput | AlbumGeneroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: AlbumGeneroScalarWhereInput | AlbumGeneroScalarWhereInput[]
  }

  export type CancionGeneroUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<CancionGeneroCreateWithoutGeneroInput, CancionGeneroUncheckedCreateWithoutGeneroInput> | CancionGeneroCreateWithoutGeneroInput[] | CancionGeneroUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: CancionGeneroCreateOrConnectWithoutGeneroInput | CancionGeneroCreateOrConnectWithoutGeneroInput[]
    upsert?: CancionGeneroUpsertWithWhereUniqueWithoutGeneroInput | CancionGeneroUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: CancionGeneroCreateManyGeneroInputEnvelope
    set?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    disconnect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    delete?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    connect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    update?: CancionGeneroUpdateWithWhereUniqueWithoutGeneroInput | CancionGeneroUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: CancionGeneroUpdateManyWithWhereWithoutGeneroInput | CancionGeneroUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: CancionGeneroScalarWhereInput | CancionGeneroScalarWhereInput[]
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

  export type ArtistaGeneroCreateNestedManyWithoutArtistaInput = {
    create?: XOR<ArtistaGeneroCreateWithoutArtistaInput, ArtistaGeneroUncheckedCreateWithoutArtistaInput> | ArtistaGeneroCreateWithoutArtistaInput[] | ArtistaGeneroUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: ArtistaGeneroCreateOrConnectWithoutArtistaInput | ArtistaGeneroCreateOrConnectWithoutArtistaInput[]
    createMany?: ArtistaGeneroCreateManyArtistaInputEnvelope
    connect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
  }

  export type AlbumCreateNestedManyWithoutArtistaInput = {
    create?: XOR<AlbumCreateWithoutArtistaInput, AlbumUncheckedCreateWithoutArtistaInput> | AlbumCreateWithoutArtistaInput[] | AlbumUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistaInput | AlbumCreateOrConnectWithoutArtistaInput[]
    createMany?: AlbumCreateManyArtistaInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type CancionCreateNestedManyWithoutArtistaInput = {
    create?: XOR<CancionCreateWithoutArtistaInput, CancionUncheckedCreateWithoutArtistaInput> | CancionCreateWithoutArtistaInput[] | CancionUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: CancionCreateOrConnectWithoutArtistaInput | CancionCreateOrConnectWithoutArtistaInput[]
    createMany?: CancionCreateManyArtistaInputEnvelope
    connect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
  }

  export type ArtistaGeneroUncheckedCreateNestedManyWithoutArtistaInput = {
    create?: XOR<ArtistaGeneroCreateWithoutArtistaInput, ArtistaGeneroUncheckedCreateWithoutArtistaInput> | ArtistaGeneroCreateWithoutArtistaInput[] | ArtistaGeneroUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: ArtistaGeneroCreateOrConnectWithoutArtistaInput | ArtistaGeneroCreateOrConnectWithoutArtistaInput[]
    createMany?: ArtistaGeneroCreateManyArtistaInputEnvelope
    connect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutArtistaInput = {
    create?: XOR<AlbumCreateWithoutArtistaInput, AlbumUncheckedCreateWithoutArtistaInput> | AlbumCreateWithoutArtistaInput[] | AlbumUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistaInput | AlbumCreateOrConnectWithoutArtistaInput[]
    createMany?: AlbumCreateManyArtistaInputEnvelope
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type CancionUncheckedCreateNestedManyWithoutArtistaInput = {
    create?: XOR<CancionCreateWithoutArtistaInput, CancionUncheckedCreateWithoutArtistaInput> | CancionCreateWithoutArtistaInput[] | CancionUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: CancionCreateOrConnectWithoutArtistaInput | CancionCreateOrConnectWithoutArtistaInput[]
    createMany?: CancionCreateManyArtistaInputEnvelope
    connect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
  }

  export type ArtistaGeneroUpdateManyWithoutArtistaNestedInput = {
    create?: XOR<ArtistaGeneroCreateWithoutArtistaInput, ArtistaGeneroUncheckedCreateWithoutArtistaInput> | ArtistaGeneroCreateWithoutArtistaInput[] | ArtistaGeneroUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: ArtistaGeneroCreateOrConnectWithoutArtistaInput | ArtistaGeneroCreateOrConnectWithoutArtistaInput[]
    upsert?: ArtistaGeneroUpsertWithWhereUniqueWithoutArtistaInput | ArtistaGeneroUpsertWithWhereUniqueWithoutArtistaInput[]
    createMany?: ArtistaGeneroCreateManyArtistaInputEnvelope
    set?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    disconnect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    delete?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    connect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    update?: ArtistaGeneroUpdateWithWhereUniqueWithoutArtistaInput | ArtistaGeneroUpdateWithWhereUniqueWithoutArtistaInput[]
    updateMany?: ArtistaGeneroUpdateManyWithWhereWithoutArtistaInput | ArtistaGeneroUpdateManyWithWhereWithoutArtistaInput[]
    deleteMany?: ArtistaGeneroScalarWhereInput | ArtistaGeneroScalarWhereInput[]
  }

  export type AlbumUpdateManyWithoutArtistaNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistaInput, AlbumUncheckedCreateWithoutArtistaInput> | AlbumCreateWithoutArtistaInput[] | AlbumUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistaInput | AlbumCreateOrConnectWithoutArtistaInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistaInput | AlbumUpsertWithWhereUniqueWithoutArtistaInput[]
    createMany?: AlbumCreateManyArtistaInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistaInput | AlbumUpdateWithWhereUniqueWithoutArtistaInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistaInput | AlbumUpdateManyWithWhereWithoutArtistaInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type CancionUpdateManyWithoutArtistaNestedInput = {
    create?: XOR<CancionCreateWithoutArtistaInput, CancionUncheckedCreateWithoutArtistaInput> | CancionCreateWithoutArtistaInput[] | CancionUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: CancionCreateOrConnectWithoutArtistaInput | CancionCreateOrConnectWithoutArtistaInput[]
    upsert?: CancionUpsertWithWhereUniqueWithoutArtistaInput | CancionUpsertWithWhereUniqueWithoutArtistaInput[]
    createMany?: CancionCreateManyArtistaInputEnvelope
    set?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    disconnect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    delete?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    connect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    update?: CancionUpdateWithWhereUniqueWithoutArtistaInput | CancionUpdateWithWhereUniqueWithoutArtistaInput[]
    updateMany?: CancionUpdateManyWithWhereWithoutArtistaInput | CancionUpdateManyWithWhereWithoutArtistaInput[]
    deleteMany?: CancionScalarWhereInput | CancionScalarWhereInput[]
  }

  export type ArtistaGeneroUncheckedUpdateManyWithoutArtistaNestedInput = {
    create?: XOR<ArtistaGeneroCreateWithoutArtistaInput, ArtistaGeneroUncheckedCreateWithoutArtistaInput> | ArtistaGeneroCreateWithoutArtistaInput[] | ArtistaGeneroUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: ArtistaGeneroCreateOrConnectWithoutArtistaInput | ArtistaGeneroCreateOrConnectWithoutArtistaInput[]
    upsert?: ArtistaGeneroUpsertWithWhereUniqueWithoutArtistaInput | ArtistaGeneroUpsertWithWhereUniqueWithoutArtistaInput[]
    createMany?: ArtistaGeneroCreateManyArtistaInputEnvelope
    set?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    disconnect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    delete?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    connect?: ArtistaGeneroWhereUniqueInput | ArtistaGeneroWhereUniqueInput[]
    update?: ArtistaGeneroUpdateWithWhereUniqueWithoutArtistaInput | ArtistaGeneroUpdateWithWhereUniqueWithoutArtistaInput[]
    updateMany?: ArtistaGeneroUpdateManyWithWhereWithoutArtistaInput | ArtistaGeneroUpdateManyWithWhereWithoutArtistaInput[]
    deleteMany?: ArtistaGeneroScalarWhereInput | ArtistaGeneroScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutArtistaNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistaInput, AlbumUncheckedCreateWithoutArtistaInput> | AlbumCreateWithoutArtistaInput[] | AlbumUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistaInput | AlbumCreateOrConnectWithoutArtistaInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutArtistaInput | AlbumUpsertWithWhereUniqueWithoutArtistaInput[]
    createMany?: AlbumCreateManyArtistaInputEnvelope
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutArtistaInput | AlbumUpdateWithWhereUniqueWithoutArtistaInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutArtistaInput | AlbumUpdateManyWithWhereWithoutArtistaInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type CancionUncheckedUpdateManyWithoutArtistaNestedInput = {
    create?: XOR<CancionCreateWithoutArtistaInput, CancionUncheckedCreateWithoutArtistaInput> | CancionCreateWithoutArtistaInput[] | CancionUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: CancionCreateOrConnectWithoutArtistaInput | CancionCreateOrConnectWithoutArtistaInput[]
    upsert?: CancionUpsertWithWhereUniqueWithoutArtistaInput | CancionUpsertWithWhereUniqueWithoutArtistaInput[]
    createMany?: CancionCreateManyArtistaInputEnvelope
    set?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    disconnect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    delete?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    connect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    update?: CancionUpdateWithWhereUniqueWithoutArtistaInput | CancionUpdateWithWhereUniqueWithoutArtistaInput[]
    updateMany?: CancionUpdateManyWithWhereWithoutArtistaInput | CancionUpdateManyWithWhereWithoutArtistaInput[]
    deleteMany?: CancionScalarWhereInput | CancionScalarWhereInput[]
  }

  export type ArtistaCreateNestedOneWithoutGenerosInput = {
    create?: XOR<ArtistaCreateWithoutGenerosInput, ArtistaUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: ArtistaCreateOrConnectWithoutGenerosInput
    connect?: ArtistaWhereUniqueInput
  }

  export type GeneroCreateNestedOneWithoutArtistasInput = {
    create?: XOR<GeneroCreateWithoutArtistasInput, GeneroUncheckedCreateWithoutArtistasInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutArtistasInput
    connect?: GeneroWhereUniqueInput
  }

  export type ArtistaUpdateOneRequiredWithoutGenerosNestedInput = {
    create?: XOR<ArtistaCreateWithoutGenerosInput, ArtistaUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: ArtistaCreateOrConnectWithoutGenerosInput
    upsert?: ArtistaUpsertWithoutGenerosInput
    connect?: ArtistaWhereUniqueInput
    update?: XOR<XOR<ArtistaUpdateToOneWithWhereWithoutGenerosInput, ArtistaUpdateWithoutGenerosInput>, ArtistaUncheckedUpdateWithoutGenerosInput>
  }

  export type GeneroUpdateOneRequiredWithoutArtistasNestedInput = {
    create?: XOR<GeneroCreateWithoutArtistasInput, GeneroUncheckedCreateWithoutArtistasInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutArtistasInput
    upsert?: GeneroUpsertWithoutArtistasInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutArtistasInput, GeneroUpdateWithoutArtistasInput>, GeneroUncheckedUpdateWithoutArtistasInput>
  }

  export type ArtistaCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<ArtistaCreateWithoutAlbumsInput, ArtistaUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistaCreateOrConnectWithoutAlbumsInput
    connect?: ArtistaWhereUniqueInput
  }

  export type CancionCreateNestedManyWithoutAlbumInput = {
    create?: XOR<CancionCreateWithoutAlbumInput, CancionUncheckedCreateWithoutAlbumInput> | CancionCreateWithoutAlbumInput[] | CancionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: CancionCreateOrConnectWithoutAlbumInput | CancionCreateOrConnectWithoutAlbumInput[]
    createMany?: CancionCreateManyAlbumInputEnvelope
    connect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
  }

  export type AlbumGeneroCreateNestedManyWithoutAlbumInput = {
    create?: XOR<AlbumGeneroCreateWithoutAlbumInput, AlbumGeneroUncheckedCreateWithoutAlbumInput> | AlbumGeneroCreateWithoutAlbumInput[] | AlbumGeneroUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumGeneroCreateOrConnectWithoutAlbumInput | AlbumGeneroCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumGeneroCreateManyAlbumInputEnvelope
    connect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
  }

  export type ReseñaCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ReseñaCreateWithoutAlbumInput, ReseñaUncheckedCreateWithoutAlbumInput> | ReseñaCreateWithoutAlbumInput[] | ReseñaUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutAlbumInput | ReseñaCreateOrConnectWithoutAlbumInput[]
    createMany?: ReseñaCreateManyAlbumInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type CalificacionCreateNestedManyWithoutAlbumInput = {
    create?: XOR<CalificacionCreateWithoutAlbumInput, CalificacionUncheckedCreateWithoutAlbumInput> | CalificacionCreateWithoutAlbumInput[] | CalificacionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutAlbumInput | CalificacionCreateOrConnectWithoutAlbumInput[]
    createMany?: CalificacionCreateManyAlbumInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
  }

  export type CancionUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<CancionCreateWithoutAlbumInput, CancionUncheckedCreateWithoutAlbumInput> | CancionCreateWithoutAlbumInput[] | CancionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: CancionCreateOrConnectWithoutAlbumInput | CancionCreateOrConnectWithoutAlbumInput[]
    createMany?: CancionCreateManyAlbumInputEnvelope
    connect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
  }

  export type AlbumGeneroUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<AlbumGeneroCreateWithoutAlbumInput, AlbumGeneroUncheckedCreateWithoutAlbumInput> | AlbumGeneroCreateWithoutAlbumInput[] | AlbumGeneroUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumGeneroCreateOrConnectWithoutAlbumInput | AlbumGeneroCreateOrConnectWithoutAlbumInput[]
    createMany?: AlbumGeneroCreateManyAlbumInputEnvelope
    connect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
  }

  export type ReseñaUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<ReseñaCreateWithoutAlbumInput, ReseñaUncheckedCreateWithoutAlbumInput> | ReseñaCreateWithoutAlbumInput[] | ReseñaUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutAlbumInput | ReseñaCreateOrConnectWithoutAlbumInput[]
    createMany?: ReseñaCreateManyAlbumInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type CalificacionUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<CalificacionCreateWithoutAlbumInput, CalificacionUncheckedCreateWithoutAlbumInput> | CalificacionCreateWithoutAlbumInput[] | CalificacionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutAlbumInput | CalificacionCreateOrConnectWithoutAlbumInput[]
    createMany?: CalificacionCreateManyAlbumInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArtistaUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<ArtistaCreateWithoutAlbumsInput, ArtistaUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistaCreateOrConnectWithoutAlbumsInput
    upsert?: ArtistaUpsertWithoutAlbumsInput
    connect?: ArtistaWhereUniqueInput
    update?: XOR<XOR<ArtistaUpdateToOneWithWhereWithoutAlbumsInput, ArtistaUpdateWithoutAlbumsInput>, ArtistaUncheckedUpdateWithoutAlbumsInput>
  }

  export type CancionUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<CancionCreateWithoutAlbumInput, CancionUncheckedCreateWithoutAlbumInput> | CancionCreateWithoutAlbumInput[] | CancionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: CancionCreateOrConnectWithoutAlbumInput | CancionCreateOrConnectWithoutAlbumInput[]
    upsert?: CancionUpsertWithWhereUniqueWithoutAlbumInput | CancionUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: CancionCreateManyAlbumInputEnvelope
    set?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    disconnect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    delete?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    connect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    update?: CancionUpdateWithWhereUniqueWithoutAlbumInput | CancionUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: CancionUpdateManyWithWhereWithoutAlbumInput | CancionUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: CancionScalarWhereInput | CancionScalarWhereInput[]
  }

  export type AlbumGeneroUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<AlbumGeneroCreateWithoutAlbumInput, AlbumGeneroUncheckedCreateWithoutAlbumInput> | AlbumGeneroCreateWithoutAlbumInput[] | AlbumGeneroUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumGeneroCreateOrConnectWithoutAlbumInput | AlbumGeneroCreateOrConnectWithoutAlbumInput[]
    upsert?: AlbumGeneroUpsertWithWhereUniqueWithoutAlbumInput | AlbumGeneroUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumGeneroCreateManyAlbumInputEnvelope
    set?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    disconnect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    delete?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    connect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    update?: AlbumGeneroUpdateWithWhereUniqueWithoutAlbumInput | AlbumGeneroUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: AlbumGeneroUpdateManyWithWhereWithoutAlbumInput | AlbumGeneroUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumGeneroScalarWhereInput | AlbumGeneroScalarWhereInput[]
  }

  export type ReseñaUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ReseñaCreateWithoutAlbumInput, ReseñaUncheckedCreateWithoutAlbumInput> | ReseñaCreateWithoutAlbumInput[] | ReseñaUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutAlbumInput | ReseñaCreateOrConnectWithoutAlbumInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutAlbumInput | ReseñaUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: ReseñaCreateManyAlbumInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutAlbumInput | ReseñaUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutAlbumInput | ReseñaUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type CalificacionUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<CalificacionCreateWithoutAlbumInput, CalificacionUncheckedCreateWithoutAlbumInput> | CalificacionCreateWithoutAlbumInput[] | CalificacionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutAlbumInput | CalificacionCreateOrConnectWithoutAlbumInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutAlbumInput | CalificacionUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: CalificacionCreateManyAlbumInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutAlbumInput | CalificacionUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutAlbumInput | CalificacionUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
  }

  export type CancionUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<CancionCreateWithoutAlbumInput, CancionUncheckedCreateWithoutAlbumInput> | CancionCreateWithoutAlbumInput[] | CancionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: CancionCreateOrConnectWithoutAlbumInput | CancionCreateOrConnectWithoutAlbumInput[]
    upsert?: CancionUpsertWithWhereUniqueWithoutAlbumInput | CancionUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: CancionCreateManyAlbumInputEnvelope
    set?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    disconnect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    delete?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    connect?: CancionWhereUniqueInput | CancionWhereUniqueInput[]
    update?: CancionUpdateWithWhereUniqueWithoutAlbumInput | CancionUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: CancionUpdateManyWithWhereWithoutAlbumInput | CancionUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: CancionScalarWhereInput | CancionScalarWhereInput[]
  }

  export type AlbumGeneroUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<AlbumGeneroCreateWithoutAlbumInput, AlbumGeneroUncheckedCreateWithoutAlbumInput> | AlbumGeneroCreateWithoutAlbumInput[] | AlbumGeneroUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: AlbumGeneroCreateOrConnectWithoutAlbumInput | AlbumGeneroCreateOrConnectWithoutAlbumInput[]
    upsert?: AlbumGeneroUpsertWithWhereUniqueWithoutAlbumInput | AlbumGeneroUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: AlbumGeneroCreateManyAlbumInputEnvelope
    set?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    disconnect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    delete?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    connect?: AlbumGeneroWhereUniqueInput | AlbumGeneroWhereUniqueInput[]
    update?: AlbumGeneroUpdateWithWhereUniqueWithoutAlbumInput | AlbumGeneroUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: AlbumGeneroUpdateManyWithWhereWithoutAlbumInput | AlbumGeneroUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: AlbumGeneroScalarWhereInput | AlbumGeneroScalarWhereInput[]
  }

  export type ReseñaUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<ReseñaCreateWithoutAlbumInput, ReseñaUncheckedCreateWithoutAlbumInput> | ReseñaCreateWithoutAlbumInput[] | ReseñaUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutAlbumInput | ReseñaCreateOrConnectWithoutAlbumInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutAlbumInput | ReseñaUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: ReseñaCreateManyAlbumInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutAlbumInput | ReseñaUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutAlbumInput | ReseñaUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type CalificacionUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<CalificacionCreateWithoutAlbumInput, CalificacionUncheckedCreateWithoutAlbumInput> | CalificacionCreateWithoutAlbumInput[] | CalificacionUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutAlbumInput | CalificacionCreateOrConnectWithoutAlbumInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutAlbumInput | CalificacionUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: CalificacionCreateManyAlbumInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutAlbumInput | CalificacionUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutAlbumInput | CalificacionUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
  }

  export type AlbumCreateNestedOneWithoutGenerosInput = {
    create?: XOR<AlbumCreateWithoutGenerosInput, AlbumUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutGenerosInput
    connect?: AlbumWhereUniqueInput
  }

  export type GeneroCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<GeneroCreateWithoutAlbumsInput, GeneroUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutAlbumsInput
    connect?: GeneroWhereUniqueInput
  }

  export type AlbumUpdateOneRequiredWithoutGenerosNestedInput = {
    create?: XOR<AlbumCreateWithoutGenerosInput, AlbumUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutGenerosInput
    upsert?: AlbumUpsertWithoutGenerosInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutGenerosInput, AlbumUpdateWithoutGenerosInput>, AlbumUncheckedUpdateWithoutGenerosInput>
  }

  export type GeneroUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<GeneroCreateWithoutAlbumsInput, GeneroUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutAlbumsInput
    upsert?: GeneroUpsertWithoutAlbumsInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutAlbumsInput, GeneroUpdateWithoutAlbumsInput>, GeneroUncheckedUpdateWithoutAlbumsInput>
  }

  export type AlbumCreateNestedOneWithoutCancionesInput = {
    create?: XOR<AlbumCreateWithoutCancionesInput, AlbumUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutCancionesInput
    connect?: AlbumWhereUniqueInput
  }

  export type ArtistaCreateNestedOneWithoutCancionesInput = {
    create?: XOR<ArtistaCreateWithoutCancionesInput, ArtistaUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: ArtistaCreateOrConnectWithoutCancionesInput
    connect?: ArtistaWhereUniqueInput
  }

  export type CancionGeneroCreateNestedManyWithoutCancionInput = {
    create?: XOR<CancionGeneroCreateWithoutCancionInput, CancionGeneroUncheckedCreateWithoutCancionInput> | CancionGeneroCreateWithoutCancionInput[] | CancionGeneroUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: CancionGeneroCreateOrConnectWithoutCancionInput | CancionGeneroCreateOrConnectWithoutCancionInput[]
    createMany?: CancionGeneroCreateManyCancionInputEnvelope
    connect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
  }

  export type ReseñaCreateNestedManyWithoutCancionInput = {
    create?: XOR<ReseñaCreateWithoutCancionInput, ReseñaUncheckedCreateWithoutCancionInput> | ReseñaCreateWithoutCancionInput[] | ReseñaUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutCancionInput | ReseñaCreateOrConnectWithoutCancionInput[]
    createMany?: ReseñaCreateManyCancionInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type CalificacionCreateNestedManyWithoutCancionInput = {
    create?: XOR<CalificacionCreateWithoutCancionInput, CalificacionUncheckedCreateWithoutCancionInput> | CalificacionCreateWithoutCancionInput[] | CalificacionUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutCancionInput | CalificacionCreateOrConnectWithoutCancionInput[]
    createMany?: CalificacionCreateManyCancionInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
  }

  export type CancionGeneroUncheckedCreateNestedManyWithoutCancionInput = {
    create?: XOR<CancionGeneroCreateWithoutCancionInput, CancionGeneroUncheckedCreateWithoutCancionInput> | CancionGeneroCreateWithoutCancionInput[] | CancionGeneroUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: CancionGeneroCreateOrConnectWithoutCancionInput | CancionGeneroCreateOrConnectWithoutCancionInput[]
    createMany?: CancionGeneroCreateManyCancionInputEnvelope
    connect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
  }

  export type ReseñaUncheckedCreateNestedManyWithoutCancionInput = {
    create?: XOR<ReseñaCreateWithoutCancionInput, ReseñaUncheckedCreateWithoutCancionInput> | ReseñaCreateWithoutCancionInput[] | ReseñaUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutCancionInput | ReseñaCreateOrConnectWithoutCancionInput[]
    createMany?: ReseñaCreateManyCancionInputEnvelope
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
  }

  export type CalificacionUncheckedCreateNestedManyWithoutCancionInput = {
    create?: XOR<CalificacionCreateWithoutCancionInput, CalificacionUncheckedCreateWithoutCancionInput> | CalificacionCreateWithoutCancionInput[] | CalificacionUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutCancionInput | CalificacionCreateOrConnectWithoutCancionInput[]
    createMany?: CalificacionCreateManyCancionInputEnvelope
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
  }

  export type AlbumUpdateOneRequiredWithoutCancionesNestedInput = {
    create?: XOR<AlbumCreateWithoutCancionesInput, AlbumUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutCancionesInput
    upsert?: AlbumUpsertWithoutCancionesInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutCancionesInput, AlbumUpdateWithoutCancionesInput>, AlbumUncheckedUpdateWithoutCancionesInput>
  }

  export type ArtistaUpdateOneRequiredWithoutCancionesNestedInput = {
    create?: XOR<ArtistaCreateWithoutCancionesInput, ArtistaUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: ArtistaCreateOrConnectWithoutCancionesInput
    upsert?: ArtistaUpsertWithoutCancionesInput
    connect?: ArtistaWhereUniqueInput
    update?: XOR<XOR<ArtistaUpdateToOneWithWhereWithoutCancionesInput, ArtistaUpdateWithoutCancionesInput>, ArtistaUncheckedUpdateWithoutCancionesInput>
  }

  export type CancionGeneroUpdateManyWithoutCancionNestedInput = {
    create?: XOR<CancionGeneroCreateWithoutCancionInput, CancionGeneroUncheckedCreateWithoutCancionInput> | CancionGeneroCreateWithoutCancionInput[] | CancionGeneroUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: CancionGeneroCreateOrConnectWithoutCancionInput | CancionGeneroCreateOrConnectWithoutCancionInput[]
    upsert?: CancionGeneroUpsertWithWhereUniqueWithoutCancionInput | CancionGeneroUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: CancionGeneroCreateManyCancionInputEnvelope
    set?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    disconnect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    delete?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    connect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    update?: CancionGeneroUpdateWithWhereUniqueWithoutCancionInput | CancionGeneroUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: CancionGeneroUpdateManyWithWhereWithoutCancionInput | CancionGeneroUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: CancionGeneroScalarWhereInput | CancionGeneroScalarWhereInput[]
  }

  export type ReseñaUpdateManyWithoutCancionNestedInput = {
    create?: XOR<ReseñaCreateWithoutCancionInput, ReseñaUncheckedCreateWithoutCancionInput> | ReseñaCreateWithoutCancionInput[] | ReseñaUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutCancionInput | ReseñaCreateOrConnectWithoutCancionInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutCancionInput | ReseñaUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: ReseñaCreateManyCancionInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutCancionInput | ReseñaUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutCancionInput | ReseñaUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type CalificacionUpdateManyWithoutCancionNestedInput = {
    create?: XOR<CalificacionCreateWithoutCancionInput, CalificacionUncheckedCreateWithoutCancionInput> | CalificacionCreateWithoutCancionInput[] | CalificacionUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutCancionInput | CalificacionCreateOrConnectWithoutCancionInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutCancionInput | CalificacionUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: CalificacionCreateManyCancionInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutCancionInput | CalificacionUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutCancionInput | CalificacionUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
  }

  export type CancionGeneroUncheckedUpdateManyWithoutCancionNestedInput = {
    create?: XOR<CancionGeneroCreateWithoutCancionInput, CancionGeneroUncheckedCreateWithoutCancionInput> | CancionGeneroCreateWithoutCancionInput[] | CancionGeneroUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: CancionGeneroCreateOrConnectWithoutCancionInput | CancionGeneroCreateOrConnectWithoutCancionInput[]
    upsert?: CancionGeneroUpsertWithWhereUniqueWithoutCancionInput | CancionGeneroUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: CancionGeneroCreateManyCancionInputEnvelope
    set?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    disconnect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    delete?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    connect?: CancionGeneroWhereUniqueInput | CancionGeneroWhereUniqueInput[]
    update?: CancionGeneroUpdateWithWhereUniqueWithoutCancionInput | CancionGeneroUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: CancionGeneroUpdateManyWithWhereWithoutCancionInput | CancionGeneroUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: CancionGeneroScalarWhereInput | CancionGeneroScalarWhereInput[]
  }

  export type ReseñaUncheckedUpdateManyWithoutCancionNestedInput = {
    create?: XOR<ReseñaCreateWithoutCancionInput, ReseñaUncheckedCreateWithoutCancionInput> | ReseñaCreateWithoutCancionInput[] | ReseñaUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: ReseñaCreateOrConnectWithoutCancionInput | ReseñaCreateOrConnectWithoutCancionInput[]
    upsert?: ReseñaUpsertWithWhereUniqueWithoutCancionInput | ReseñaUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: ReseñaCreateManyCancionInputEnvelope
    set?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    disconnect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    delete?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    connect?: ReseñaWhereUniqueInput | ReseñaWhereUniqueInput[]
    update?: ReseñaUpdateWithWhereUniqueWithoutCancionInput | ReseñaUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: ReseñaUpdateManyWithWhereWithoutCancionInput | ReseñaUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
  }

  export type CalificacionUncheckedUpdateManyWithoutCancionNestedInput = {
    create?: XOR<CalificacionCreateWithoutCancionInput, CalificacionUncheckedCreateWithoutCancionInput> | CalificacionCreateWithoutCancionInput[] | CalificacionUncheckedCreateWithoutCancionInput[]
    connectOrCreate?: CalificacionCreateOrConnectWithoutCancionInput | CalificacionCreateOrConnectWithoutCancionInput[]
    upsert?: CalificacionUpsertWithWhereUniqueWithoutCancionInput | CalificacionUpsertWithWhereUniqueWithoutCancionInput[]
    createMany?: CalificacionCreateManyCancionInputEnvelope
    set?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    disconnect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    delete?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    connect?: CalificacionWhereUniqueInput | CalificacionWhereUniqueInput[]
    update?: CalificacionUpdateWithWhereUniqueWithoutCancionInput | CalificacionUpdateWithWhereUniqueWithoutCancionInput[]
    updateMany?: CalificacionUpdateManyWithWhereWithoutCancionInput | CalificacionUpdateManyWithWhereWithoutCancionInput[]
    deleteMany?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
  }

  export type CancionCreateNestedOneWithoutGenerosInput = {
    create?: XOR<CancionCreateWithoutGenerosInput, CancionUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: CancionCreateOrConnectWithoutGenerosInput
    connect?: CancionWhereUniqueInput
  }

  export type GeneroCreateNestedOneWithoutCancionesInput = {
    create?: XOR<GeneroCreateWithoutCancionesInput, GeneroUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutCancionesInput
    connect?: GeneroWhereUniqueInput
  }

  export type CancionUpdateOneRequiredWithoutGenerosNestedInput = {
    create?: XOR<CancionCreateWithoutGenerosInput, CancionUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: CancionCreateOrConnectWithoutGenerosInput
    upsert?: CancionUpsertWithoutGenerosInput
    connect?: CancionWhereUniqueInput
    update?: XOR<XOR<CancionUpdateToOneWithWhereWithoutGenerosInput, CancionUpdateWithoutGenerosInput>, CancionUncheckedUpdateWithoutGenerosInput>
  }

  export type GeneroUpdateOneRequiredWithoutCancionesNestedInput = {
    create?: XOR<GeneroCreateWithoutCancionesInput, GeneroUncheckedCreateWithoutCancionesInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutCancionesInput
    upsert?: GeneroUpsertWithoutCancionesInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutCancionesInput, GeneroUpdateWithoutCancionesInput>, GeneroUncheckedUpdateWithoutCancionesInput>
  }

  export type UsuarioCreateNestedOneWithoutReseñasInput = {
    create?: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReseñasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CancionCreateNestedOneWithoutReseñasInput = {
    create?: XOR<CancionCreateWithoutReseñasInput, CancionUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: CancionCreateOrConnectWithoutReseñasInput
    connect?: CancionWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutReseñasInput = {
    create?: XOR<AlbumCreateWithoutReseñasInput, AlbumUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutReseñasInput
    connect?: AlbumWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutReseñasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReseñasInput
    upsert?: UsuarioUpsertWithoutReseñasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReseñasInput, UsuarioUpdateWithoutReseñasInput>, UsuarioUncheckedUpdateWithoutReseñasInput>
  }

  export type CancionUpdateOneWithoutReseñasNestedInput = {
    create?: XOR<CancionCreateWithoutReseñasInput, CancionUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: CancionCreateOrConnectWithoutReseñasInput
    upsert?: CancionUpsertWithoutReseñasInput
    disconnect?: CancionWhereInput | boolean
    delete?: CancionWhereInput | boolean
    connect?: CancionWhereUniqueInput
    update?: XOR<XOR<CancionUpdateToOneWithWhereWithoutReseñasInput, CancionUpdateWithoutReseñasInput>, CancionUncheckedUpdateWithoutReseñasInput>
  }

  export type AlbumUpdateOneWithoutReseñasNestedInput = {
    create?: XOR<AlbumCreateWithoutReseñasInput, AlbumUncheckedCreateWithoutReseñasInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutReseñasInput
    upsert?: AlbumUpsertWithoutReseñasInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutReseñasInput, AlbumUpdateWithoutReseñasInput>, AlbumUncheckedUpdateWithoutReseñasInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedOneWithoutCalificacionesInput = {
    create?: XOR<UsuarioCreateWithoutCalificacionesInput, UsuarioUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCalificacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CancionCreateNestedOneWithoutCalificacionesInput = {
    create?: XOR<CancionCreateWithoutCalificacionesInput, CancionUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: CancionCreateOrConnectWithoutCalificacionesInput
    connect?: CancionWhereUniqueInput
  }

  export type AlbumCreateNestedOneWithoutCalificacionesInput = {
    create?: XOR<AlbumCreateWithoutCalificacionesInput, AlbumUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutCalificacionesInput
    connect?: AlbumWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCalificacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutCalificacionesInput, UsuarioUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCalificacionesInput
    upsert?: UsuarioUpsertWithoutCalificacionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCalificacionesInput, UsuarioUpdateWithoutCalificacionesInput>, UsuarioUncheckedUpdateWithoutCalificacionesInput>
  }

  export type CancionUpdateOneWithoutCalificacionesNestedInput = {
    create?: XOR<CancionCreateWithoutCalificacionesInput, CancionUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: CancionCreateOrConnectWithoutCalificacionesInput
    upsert?: CancionUpsertWithoutCalificacionesInput
    disconnect?: CancionWhereInput | boolean
    delete?: CancionWhereInput | boolean
    connect?: CancionWhereUniqueInput
    update?: XOR<XOR<CancionUpdateToOneWithWhereWithoutCalificacionesInput, CancionUpdateWithoutCalificacionesInput>, CancionUncheckedUpdateWithoutCalificacionesInput>
  }

  export type AlbumUpdateOneWithoutCalificacionesNestedInput = {
    create?: XOR<AlbumCreateWithoutCalificacionesInput, AlbumUncheckedCreateWithoutCalificacionesInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutCalificacionesInput
    upsert?: AlbumUpsertWithoutCalificacionesInput
    disconnect?: AlbumWhereInput | boolean
    delete?: AlbumWhereInput | boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<XOR<AlbumUpdateToOneWithWhereWithoutCalificacionesInput, AlbumUpdateWithoutCalificacionesInput>, AlbumUncheckedUpdateWithoutCalificacionesInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
    genero: GeneroCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioGeneroUncheckedCreateWithoutUsuarioInput = {
    id?: number
    generoId: number
  }

  export type UsuarioGeneroCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioGeneroWhereUniqueInput
    create: XOR<UsuarioGeneroCreateWithoutUsuarioInput, UsuarioGeneroUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioGeneroCreateManyUsuarioInputEnvelope = {
    data: UsuarioGeneroCreateManyUsuarioInput | UsuarioGeneroCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReseñaCreateWithoutUsuarioInput = {
    contenido: string
    creadoEn?: Date | string
    cancion?: CancionCreateNestedOneWithoutReseñasInput
    album?: AlbumCreateNestedOneWithoutReseñasInput
  }

  export type ReseñaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    contenido: string
    cancionId?: number | null
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type ReseñaCreateOrConnectWithoutUsuarioInput = {
    where: ReseñaWhereUniqueInput
    create: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReseñaCreateManyUsuarioInputEnvelope = {
    data: ReseñaCreateManyUsuarioInput | ReseñaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CalificacionCreateWithoutUsuarioInput = {
    estrellas: number
    creadoEn?: Date | string
    cancion?: CancionCreateNestedOneWithoutCalificacionesInput
    album?: AlbumCreateNestedOneWithoutCalificacionesInput
  }

  export type CalificacionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    estrellas: number
    cancionId?: number | null
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type CalificacionCreateOrConnectWithoutUsuarioInput = {
    where: CalificacionWhereUniqueInput
    create: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type CalificacionCreateManyUsuarioInputEnvelope = {
    data: CalificacionCreateManyUsuarioInput | CalificacionCreateManyUsuarioInput[]
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
  }

  export type ReseñaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReseñaWhereUniqueInput
    update: XOR<ReseñaUpdateWithoutUsuarioInput, ReseñaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReseñaCreateWithoutUsuarioInput, ReseñaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReseñaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReseñaWhereUniqueInput
    data: XOR<ReseñaUpdateWithoutUsuarioInput, ReseñaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReseñaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReseñaScalarWhereInput
    data: XOR<ReseñaUpdateManyMutationInput, ReseñaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReseñaScalarWhereInput = {
    AND?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
    OR?: ReseñaScalarWhereInput[]
    NOT?: ReseñaScalarWhereInput | ReseñaScalarWhereInput[]
    id?: IntFilter<"Reseña"> | number
    contenido?: StringFilter<"Reseña"> | string
    usuarioId?: IntFilter<"Reseña"> | number
    cancionId?: IntNullableFilter<"Reseña"> | number | null
    albumId?: IntNullableFilter<"Reseña"> | number | null
    creadoEn?: DateTimeFilter<"Reseña"> | Date | string
  }

  export type CalificacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CalificacionWhereUniqueInput
    update: XOR<CalificacionUpdateWithoutUsuarioInput, CalificacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CalificacionCreateWithoutUsuarioInput, CalificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type CalificacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CalificacionWhereUniqueInput
    data: XOR<CalificacionUpdateWithoutUsuarioInput, CalificacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type CalificacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: CalificacionScalarWhereInput
    data: XOR<CalificacionUpdateManyMutationInput, CalificacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CalificacionScalarWhereInput = {
    AND?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
    OR?: CalificacionScalarWhereInput[]
    NOT?: CalificacionScalarWhereInput | CalificacionScalarWhereInput[]
    id?: IntFilter<"Calificacion"> | number
    estrellas?: IntFilter<"Calificacion"> | number
    usuarioId?: IntFilter<"Calificacion"> | number
    cancionId?: IntNullableFilter<"Calificacion"> | number | null
    albumId?: IntNullableFilter<"Calificacion"> | number | null
    creadoEn?: DateTimeFilter<"Calificacion"> | Date | string
  }

  export type UsuarioGeneroCreateWithoutGeneroInput = {
    usuario: UsuarioCreateNestedOneWithoutGenerosInput
  }

  export type UsuarioGeneroUncheckedCreateWithoutGeneroInput = {
    id?: number
    usuarioId: number
  }

  export type UsuarioGeneroCreateOrConnectWithoutGeneroInput = {
    where: UsuarioGeneroWhereUniqueInput
    create: XOR<UsuarioGeneroCreateWithoutGeneroInput, UsuarioGeneroUncheckedCreateWithoutGeneroInput>
  }

  export type UsuarioGeneroCreateManyGeneroInputEnvelope = {
    data: UsuarioGeneroCreateManyGeneroInput | UsuarioGeneroCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type ArtistaGeneroCreateWithoutGeneroInput = {
    artista: ArtistaCreateNestedOneWithoutGenerosInput
  }

  export type ArtistaGeneroUncheckedCreateWithoutGeneroInput = {
    id?: number
    artistaId: number
  }

  export type ArtistaGeneroCreateOrConnectWithoutGeneroInput = {
    where: ArtistaGeneroWhereUniqueInput
    create: XOR<ArtistaGeneroCreateWithoutGeneroInput, ArtistaGeneroUncheckedCreateWithoutGeneroInput>
  }

  export type ArtistaGeneroCreateManyGeneroInputEnvelope = {
    data: ArtistaGeneroCreateManyGeneroInput | ArtistaGeneroCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type AlbumGeneroCreateWithoutGeneroInput = {
    album: AlbumCreateNestedOneWithoutGenerosInput
  }

  export type AlbumGeneroUncheckedCreateWithoutGeneroInput = {
    id?: number
    albumId: number
  }

  export type AlbumGeneroCreateOrConnectWithoutGeneroInput = {
    where: AlbumGeneroWhereUniqueInput
    create: XOR<AlbumGeneroCreateWithoutGeneroInput, AlbumGeneroUncheckedCreateWithoutGeneroInput>
  }

  export type AlbumGeneroCreateManyGeneroInputEnvelope = {
    data: AlbumGeneroCreateManyGeneroInput | AlbumGeneroCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type CancionGeneroCreateWithoutGeneroInput = {
    cancion: CancionCreateNestedOneWithoutGenerosInput
  }

  export type CancionGeneroUncheckedCreateWithoutGeneroInput = {
    id?: number
    cancionId: number
  }

  export type CancionGeneroCreateOrConnectWithoutGeneroInput = {
    where: CancionGeneroWhereUniqueInput
    create: XOR<CancionGeneroCreateWithoutGeneroInput, CancionGeneroUncheckedCreateWithoutGeneroInput>
  }

  export type CancionGeneroCreateManyGeneroInputEnvelope = {
    data: CancionGeneroCreateManyGeneroInput | CancionGeneroCreateManyGeneroInput[]
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

  export type ArtistaGeneroUpsertWithWhereUniqueWithoutGeneroInput = {
    where: ArtistaGeneroWhereUniqueInput
    update: XOR<ArtistaGeneroUpdateWithoutGeneroInput, ArtistaGeneroUncheckedUpdateWithoutGeneroInput>
    create: XOR<ArtistaGeneroCreateWithoutGeneroInput, ArtistaGeneroUncheckedCreateWithoutGeneroInput>
  }

  export type ArtistaGeneroUpdateWithWhereUniqueWithoutGeneroInput = {
    where: ArtistaGeneroWhereUniqueInput
    data: XOR<ArtistaGeneroUpdateWithoutGeneroInput, ArtistaGeneroUncheckedUpdateWithoutGeneroInput>
  }

  export type ArtistaGeneroUpdateManyWithWhereWithoutGeneroInput = {
    where: ArtistaGeneroScalarWhereInput
    data: XOR<ArtistaGeneroUpdateManyMutationInput, ArtistaGeneroUncheckedUpdateManyWithoutGeneroInput>
  }

  export type ArtistaGeneroScalarWhereInput = {
    AND?: ArtistaGeneroScalarWhereInput | ArtistaGeneroScalarWhereInput[]
    OR?: ArtistaGeneroScalarWhereInput[]
    NOT?: ArtistaGeneroScalarWhereInput | ArtistaGeneroScalarWhereInput[]
    id?: IntFilter<"ArtistaGenero"> | number
    artistaId?: IntFilter<"ArtistaGenero"> | number
    generoId?: IntFilter<"ArtistaGenero"> | number
  }

  export type AlbumGeneroUpsertWithWhereUniqueWithoutGeneroInput = {
    where: AlbumGeneroWhereUniqueInput
    update: XOR<AlbumGeneroUpdateWithoutGeneroInput, AlbumGeneroUncheckedUpdateWithoutGeneroInput>
    create: XOR<AlbumGeneroCreateWithoutGeneroInput, AlbumGeneroUncheckedCreateWithoutGeneroInput>
  }

  export type AlbumGeneroUpdateWithWhereUniqueWithoutGeneroInput = {
    where: AlbumGeneroWhereUniqueInput
    data: XOR<AlbumGeneroUpdateWithoutGeneroInput, AlbumGeneroUncheckedUpdateWithoutGeneroInput>
  }

  export type AlbumGeneroUpdateManyWithWhereWithoutGeneroInput = {
    where: AlbumGeneroScalarWhereInput
    data: XOR<AlbumGeneroUpdateManyMutationInput, AlbumGeneroUncheckedUpdateManyWithoutGeneroInput>
  }

  export type AlbumGeneroScalarWhereInput = {
    AND?: AlbumGeneroScalarWhereInput | AlbumGeneroScalarWhereInput[]
    OR?: AlbumGeneroScalarWhereInput[]
    NOT?: AlbumGeneroScalarWhereInput | AlbumGeneroScalarWhereInput[]
    id?: IntFilter<"AlbumGenero"> | number
    albumId?: IntFilter<"AlbumGenero"> | number
    generoId?: IntFilter<"AlbumGenero"> | number
  }

  export type CancionGeneroUpsertWithWhereUniqueWithoutGeneroInput = {
    where: CancionGeneroWhereUniqueInput
    update: XOR<CancionGeneroUpdateWithoutGeneroInput, CancionGeneroUncheckedUpdateWithoutGeneroInput>
    create: XOR<CancionGeneroCreateWithoutGeneroInput, CancionGeneroUncheckedCreateWithoutGeneroInput>
  }

  export type CancionGeneroUpdateWithWhereUniqueWithoutGeneroInput = {
    where: CancionGeneroWhereUniqueInput
    data: XOR<CancionGeneroUpdateWithoutGeneroInput, CancionGeneroUncheckedUpdateWithoutGeneroInput>
  }

  export type CancionGeneroUpdateManyWithWhereWithoutGeneroInput = {
    where: CancionGeneroScalarWhereInput
    data: XOR<CancionGeneroUpdateManyMutationInput, CancionGeneroUncheckedUpdateManyWithoutGeneroInput>
  }

  export type CancionGeneroScalarWhereInput = {
    AND?: CancionGeneroScalarWhereInput | CancionGeneroScalarWhereInput[]
    OR?: CancionGeneroScalarWhereInput[]
    NOT?: CancionGeneroScalarWhereInput | CancionGeneroScalarWhereInput[]
    id?: IntFilter<"CancionGenero"> | number
    cancionId?: IntFilter<"CancionGenero"> | number
    generoId?: IntFilter<"CancionGenero"> | number
  }

  export type UsuarioCreateWithoutGenerosInput = {
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    reseñas?: ReseñaCreateNestedManyWithoutUsuarioInput
    calificaciones?: CalificacionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutGenerosInput = {
    id?: number
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutUsuarioInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutGenerosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutGenerosInput, UsuarioUncheckedCreateWithoutGenerosInput>
  }

  export type GeneroCreateWithoutUsuariosInput = {
    nombre: string
    artistas?: ArtistaGeneroCreateNestedManyWithoutGeneroInput
    albums?: AlbumGeneroCreateNestedManyWithoutGeneroInput
    canciones?: CancionGeneroCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    artistas?: ArtistaGeneroUncheckedCreateNestedManyWithoutGeneroInput
    albums?: AlbumGeneroUncheckedCreateNestedManyWithoutGeneroInput
    canciones?: CancionGeneroUncheckedCreateNestedManyWithoutGeneroInput
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
    reseñas?: ReseñaUpdateManyWithoutUsuarioNestedInput
    calificaciones?: CalificacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutGenerosInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    reseñas?: ReseñaUncheckedUpdateManyWithoutUsuarioNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutUsuarioNestedInput
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
    artistas?: ArtistaGeneroUpdateManyWithoutGeneroNestedInput
    albums?: AlbumGeneroUpdateManyWithoutGeneroNestedInput
    canciones?: CancionGeneroUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    artistas?: ArtistaGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    albums?: AlbumGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    canciones?: CancionGeneroUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type ArtistaGeneroCreateWithoutArtistaInput = {
    genero: GeneroCreateNestedOneWithoutArtistasInput
  }

  export type ArtistaGeneroUncheckedCreateWithoutArtistaInput = {
    id?: number
    generoId: number
  }

  export type ArtistaGeneroCreateOrConnectWithoutArtistaInput = {
    where: ArtistaGeneroWhereUniqueInput
    create: XOR<ArtistaGeneroCreateWithoutArtistaInput, ArtistaGeneroUncheckedCreateWithoutArtistaInput>
  }

  export type ArtistaGeneroCreateManyArtistaInputEnvelope = {
    data: ArtistaGeneroCreateManyArtistaInput | ArtistaGeneroCreateManyArtistaInput[]
    skipDuplicates?: boolean
  }

  export type AlbumCreateWithoutArtistaInput = {
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    canciones?: CancionCreateNestedManyWithoutAlbumInput
    generos?: AlbumGeneroCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistaInput = {
    id?: number
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    canciones?: CancionUncheckedCreateNestedManyWithoutAlbumInput
    generos?: AlbumGeneroUncheckedCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistaInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistaInput, AlbumUncheckedCreateWithoutArtistaInput>
  }

  export type AlbumCreateManyArtistaInputEnvelope = {
    data: AlbumCreateManyArtistaInput | AlbumCreateManyArtistaInput[]
    skipDuplicates?: boolean
  }

  export type CancionCreateWithoutArtistaInput = {
    titulo: string
    spotifyId: string
    duracionMs: number
    album: AlbumCreateNestedOneWithoutCancionesInput
    generos?: CancionGeneroCreateNestedManyWithoutCancionInput
    reseñas?: ReseñaCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionCreateNestedManyWithoutCancionInput
  }

  export type CancionUncheckedCreateWithoutArtistaInput = {
    id?: number
    titulo: string
    spotifyId: string
    duracionMs: number
    albumId: number
    generos?: CancionGeneroUncheckedCreateNestedManyWithoutCancionInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutCancionInput
  }

  export type CancionCreateOrConnectWithoutArtistaInput = {
    where: CancionWhereUniqueInput
    create: XOR<CancionCreateWithoutArtistaInput, CancionUncheckedCreateWithoutArtistaInput>
  }

  export type CancionCreateManyArtistaInputEnvelope = {
    data: CancionCreateManyArtistaInput | CancionCreateManyArtistaInput[]
    skipDuplicates?: boolean
  }

  export type ArtistaGeneroUpsertWithWhereUniqueWithoutArtistaInput = {
    where: ArtistaGeneroWhereUniqueInput
    update: XOR<ArtistaGeneroUpdateWithoutArtistaInput, ArtistaGeneroUncheckedUpdateWithoutArtistaInput>
    create: XOR<ArtistaGeneroCreateWithoutArtistaInput, ArtistaGeneroUncheckedCreateWithoutArtistaInput>
  }

  export type ArtistaGeneroUpdateWithWhereUniqueWithoutArtistaInput = {
    where: ArtistaGeneroWhereUniqueInput
    data: XOR<ArtistaGeneroUpdateWithoutArtistaInput, ArtistaGeneroUncheckedUpdateWithoutArtistaInput>
  }

  export type ArtistaGeneroUpdateManyWithWhereWithoutArtistaInput = {
    where: ArtistaGeneroScalarWhereInput
    data: XOR<ArtistaGeneroUpdateManyMutationInput, ArtistaGeneroUncheckedUpdateManyWithoutArtistaInput>
  }

  export type AlbumUpsertWithWhereUniqueWithoutArtistaInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutArtistaInput, AlbumUncheckedUpdateWithoutArtistaInput>
    create: XOR<AlbumCreateWithoutArtistaInput, AlbumUncheckedCreateWithoutArtistaInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutArtistaInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutArtistaInput, AlbumUncheckedUpdateWithoutArtistaInput>
  }

  export type AlbumUpdateManyWithWhereWithoutArtistaInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutArtistaInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: IntFilter<"Album"> | number
    titulo?: StringFilter<"Album"> | string
    spotifyId?: StringFilter<"Album"> | string
    fechaLanzamiento?: DateTimeFilter<"Album"> | Date | string
    imagenUrl?: StringNullableFilter<"Album"> | string | null
    tipoAlbum?: StringFilter<"Album"> | string
    totalCanciones?: IntFilter<"Album"> | number
    artistaId?: IntFilter<"Album"> | number
  }

  export type CancionUpsertWithWhereUniqueWithoutArtistaInput = {
    where: CancionWhereUniqueInput
    update: XOR<CancionUpdateWithoutArtistaInput, CancionUncheckedUpdateWithoutArtistaInput>
    create: XOR<CancionCreateWithoutArtistaInput, CancionUncheckedCreateWithoutArtistaInput>
  }

  export type CancionUpdateWithWhereUniqueWithoutArtistaInput = {
    where: CancionWhereUniqueInput
    data: XOR<CancionUpdateWithoutArtistaInput, CancionUncheckedUpdateWithoutArtistaInput>
  }

  export type CancionUpdateManyWithWhereWithoutArtistaInput = {
    where: CancionScalarWhereInput
    data: XOR<CancionUpdateManyMutationInput, CancionUncheckedUpdateManyWithoutArtistaInput>
  }

  export type CancionScalarWhereInput = {
    AND?: CancionScalarWhereInput | CancionScalarWhereInput[]
    OR?: CancionScalarWhereInput[]
    NOT?: CancionScalarWhereInput | CancionScalarWhereInput[]
    id?: IntFilter<"Cancion"> | number
    titulo?: StringFilter<"Cancion"> | string
    spotifyId?: StringFilter<"Cancion"> | string
    duracionMs?: IntFilter<"Cancion"> | number
    albumId?: IntFilter<"Cancion"> | number
    artistaId?: IntFilter<"Cancion"> | number
  }

  export type ArtistaCreateWithoutGenerosInput = {
    nombre: string
    spotifyId: string
    imagenUrl?: string | null
    albums?: AlbumCreateNestedManyWithoutArtistaInput
    canciones?: CancionCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaUncheckedCreateWithoutGenerosInput = {
    id?: number
    nombre: string
    spotifyId: string
    imagenUrl?: string | null
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistaInput
    canciones?: CancionUncheckedCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaCreateOrConnectWithoutGenerosInput = {
    where: ArtistaWhereUniqueInput
    create: XOR<ArtistaCreateWithoutGenerosInput, ArtistaUncheckedCreateWithoutGenerosInput>
  }

  export type GeneroCreateWithoutArtistasInput = {
    nombre: string
    usuarios?: UsuarioGeneroCreateNestedManyWithoutGeneroInput
    albums?: AlbumGeneroCreateNestedManyWithoutGeneroInput
    canciones?: CancionGeneroCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateWithoutArtistasInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioGeneroUncheckedCreateNestedManyWithoutGeneroInput
    albums?: AlbumGeneroUncheckedCreateNestedManyWithoutGeneroInput
    canciones?: CancionGeneroUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroCreateOrConnectWithoutArtistasInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutArtistasInput, GeneroUncheckedCreateWithoutArtistasInput>
  }

  export type ArtistaUpsertWithoutGenerosInput = {
    update: XOR<ArtistaUpdateWithoutGenerosInput, ArtistaUncheckedUpdateWithoutGenerosInput>
    create: XOR<ArtistaCreateWithoutGenerosInput, ArtistaUncheckedCreateWithoutGenerosInput>
    where?: ArtistaWhereInput
  }

  export type ArtistaUpdateToOneWithWhereWithoutGenerosInput = {
    where?: ArtistaWhereInput
    data: XOR<ArtistaUpdateWithoutGenerosInput, ArtistaUncheckedUpdateWithoutGenerosInput>
  }

  export type ArtistaUpdateWithoutGenerosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUpdateManyWithoutArtistaNestedInput
    canciones?: CancionUpdateManyWithoutArtistaNestedInput
  }

  export type ArtistaUncheckedUpdateWithoutGenerosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumUncheckedUpdateManyWithoutArtistaNestedInput
    canciones?: CancionUncheckedUpdateManyWithoutArtistaNestedInput
  }

  export type GeneroUpsertWithoutArtistasInput = {
    update: XOR<GeneroUpdateWithoutArtistasInput, GeneroUncheckedUpdateWithoutArtistasInput>
    create: XOR<GeneroCreateWithoutArtistasInput, GeneroUncheckedCreateWithoutArtistasInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutArtistasInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutArtistasInput, GeneroUncheckedUpdateWithoutArtistasInput>
  }

  export type GeneroUpdateWithoutArtistasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUpdateManyWithoutGeneroNestedInput
    albums?: AlbumGeneroUpdateManyWithoutGeneroNestedInput
    canciones?: CancionGeneroUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateWithoutArtistasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    albums?: AlbumGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    canciones?: CancionGeneroUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type ArtistaCreateWithoutAlbumsInput = {
    nombre: string
    spotifyId: string
    imagenUrl?: string | null
    generos?: ArtistaGeneroCreateNestedManyWithoutArtistaInput
    canciones?: CancionCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaUncheckedCreateWithoutAlbumsInput = {
    id?: number
    nombre: string
    spotifyId: string
    imagenUrl?: string | null
    generos?: ArtistaGeneroUncheckedCreateNestedManyWithoutArtistaInput
    canciones?: CancionUncheckedCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaCreateOrConnectWithoutAlbumsInput = {
    where: ArtistaWhereUniqueInput
    create: XOR<ArtistaCreateWithoutAlbumsInput, ArtistaUncheckedCreateWithoutAlbumsInput>
  }

  export type CancionCreateWithoutAlbumInput = {
    titulo: string
    spotifyId: string
    duracionMs: number
    artista: ArtistaCreateNestedOneWithoutCancionesInput
    generos?: CancionGeneroCreateNestedManyWithoutCancionInput
    reseñas?: ReseñaCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionCreateNestedManyWithoutCancionInput
  }

  export type CancionUncheckedCreateWithoutAlbumInput = {
    id?: number
    titulo: string
    spotifyId: string
    duracionMs: number
    artistaId: number
    generos?: CancionGeneroUncheckedCreateNestedManyWithoutCancionInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutCancionInput
  }

  export type CancionCreateOrConnectWithoutAlbumInput = {
    where: CancionWhereUniqueInput
    create: XOR<CancionCreateWithoutAlbumInput, CancionUncheckedCreateWithoutAlbumInput>
  }

  export type CancionCreateManyAlbumInputEnvelope = {
    data: CancionCreateManyAlbumInput | CancionCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type AlbumGeneroCreateWithoutAlbumInput = {
    genero: GeneroCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumGeneroUncheckedCreateWithoutAlbumInput = {
    id?: number
    generoId: number
  }

  export type AlbumGeneroCreateOrConnectWithoutAlbumInput = {
    where: AlbumGeneroWhereUniqueInput
    create: XOR<AlbumGeneroCreateWithoutAlbumInput, AlbumGeneroUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumGeneroCreateManyAlbumInputEnvelope = {
    data: AlbumGeneroCreateManyAlbumInput | AlbumGeneroCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type ReseñaCreateWithoutAlbumInput = {
    contenido: string
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReseñasInput
    cancion?: CancionCreateNestedOneWithoutReseñasInput
  }

  export type ReseñaUncheckedCreateWithoutAlbumInput = {
    id?: number
    contenido: string
    usuarioId: number
    cancionId?: number | null
    creadoEn?: Date | string
  }

  export type ReseñaCreateOrConnectWithoutAlbumInput = {
    where: ReseñaWhereUniqueInput
    create: XOR<ReseñaCreateWithoutAlbumInput, ReseñaUncheckedCreateWithoutAlbumInput>
  }

  export type ReseñaCreateManyAlbumInputEnvelope = {
    data: ReseñaCreateManyAlbumInput | ReseñaCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type CalificacionCreateWithoutAlbumInput = {
    estrellas: number
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCalificacionesInput
    cancion?: CancionCreateNestedOneWithoutCalificacionesInput
  }

  export type CalificacionUncheckedCreateWithoutAlbumInput = {
    id?: number
    estrellas: number
    usuarioId: number
    cancionId?: number | null
    creadoEn?: Date | string
  }

  export type CalificacionCreateOrConnectWithoutAlbumInput = {
    where: CalificacionWhereUniqueInput
    create: XOR<CalificacionCreateWithoutAlbumInput, CalificacionUncheckedCreateWithoutAlbumInput>
  }

  export type CalificacionCreateManyAlbumInputEnvelope = {
    data: CalificacionCreateManyAlbumInput | CalificacionCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type ArtistaUpsertWithoutAlbumsInput = {
    update: XOR<ArtistaUpdateWithoutAlbumsInput, ArtistaUncheckedUpdateWithoutAlbumsInput>
    create: XOR<ArtistaCreateWithoutAlbumsInput, ArtistaUncheckedCreateWithoutAlbumsInput>
    where?: ArtistaWhereInput
  }

  export type ArtistaUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: ArtistaWhereInput
    data: XOR<ArtistaUpdateWithoutAlbumsInput, ArtistaUncheckedUpdateWithoutAlbumsInput>
  }

  export type ArtistaUpdateWithoutAlbumsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: ArtistaGeneroUpdateManyWithoutArtistaNestedInput
    canciones?: CancionUpdateManyWithoutArtistaNestedInput
  }

  export type ArtistaUncheckedUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: ArtistaGeneroUncheckedUpdateManyWithoutArtistaNestedInput
    canciones?: CancionUncheckedUpdateManyWithoutArtistaNestedInput
  }

  export type CancionUpsertWithWhereUniqueWithoutAlbumInput = {
    where: CancionWhereUniqueInput
    update: XOR<CancionUpdateWithoutAlbumInput, CancionUncheckedUpdateWithoutAlbumInput>
    create: XOR<CancionCreateWithoutAlbumInput, CancionUncheckedCreateWithoutAlbumInput>
  }

  export type CancionUpdateWithWhereUniqueWithoutAlbumInput = {
    where: CancionWhereUniqueInput
    data: XOR<CancionUpdateWithoutAlbumInput, CancionUncheckedUpdateWithoutAlbumInput>
  }

  export type CancionUpdateManyWithWhereWithoutAlbumInput = {
    where: CancionScalarWhereInput
    data: XOR<CancionUpdateManyMutationInput, CancionUncheckedUpdateManyWithoutAlbumInput>
  }

  export type AlbumGeneroUpsertWithWhereUniqueWithoutAlbumInput = {
    where: AlbumGeneroWhereUniqueInput
    update: XOR<AlbumGeneroUpdateWithoutAlbumInput, AlbumGeneroUncheckedUpdateWithoutAlbumInput>
    create: XOR<AlbumGeneroCreateWithoutAlbumInput, AlbumGeneroUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumGeneroUpdateWithWhereUniqueWithoutAlbumInput = {
    where: AlbumGeneroWhereUniqueInput
    data: XOR<AlbumGeneroUpdateWithoutAlbumInput, AlbumGeneroUncheckedUpdateWithoutAlbumInput>
  }

  export type AlbumGeneroUpdateManyWithWhereWithoutAlbumInput = {
    where: AlbumGeneroScalarWhereInput
    data: XOR<AlbumGeneroUpdateManyMutationInput, AlbumGeneroUncheckedUpdateManyWithoutAlbumInput>
  }

  export type ReseñaUpsertWithWhereUniqueWithoutAlbumInput = {
    where: ReseñaWhereUniqueInput
    update: XOR<ReseñaUpdateWithoutAlbumInput, ReseñaUncheckedUpdateWithoutAlbumInput>
    create: XOR<ReseñaCreateWithoutAlbumInput, ReseñaUncheckedCreateWithoutAlbumInput>
  }

  export type ReseñaUpdateWithWhereUniqueWithoutAlbumInput = {
    where: ReseñaWhereUniqueInput
    data: XOR<ReseñaUpdateWithoutAlbumInput, ReseñaUncheckedUpdateWithoutAlbumInput>
  }

  export type ReseñaUpdateManyWithWhereWithoutAlbumInput = {
    where: ReseñaScalarWhereInput
    data: XOR<ReseñaUpdateManyMutationInput, ReseñaUncheckedUpdateManyWithoutAlbumInput>
  }

  export type CalificacionUpsertWithWhereUniqueWithoutAlbumInput = {
    where: CalificacionWhereUniqueInput
    update: XOR<CalificacionUpdateWithoutAlbumInput, CalificacionUncheckedUpdateWithoutAlbumInput>
    create: XOR<CalificacionCreateWithoutAlbumInput, CalificacionUncheckedCreateWithoutAlbumInput>
  }

  export type CalificacionUpdateWithWhereUniqueWithoutAlbumInput = {
    where: CalificacionWhereUniqueInput
    data: XOR<CalificacionUpdateWithoutAlbumInput, CalificacionUncheckedUpdateWithoutAlbumInput>
  }

  export type CalificacionUpdateManyWithWhereWithoutAlbumInput = {
    where: CalificacionScalarWhereInput
    data: XOR<CalificacionUpdateManyMutationInput, CalificacionUncheckedUpdateManyWithoutAlbumInput>
  }

  export type AlbumCreateWithoutGenerosInput = {
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artista: ArtistaCreateNestedOneWithoutAlbumsInput
    canciones?: CancionCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutGenerosInput = {
    id?: number
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artistaId: number
    canciones?: CancionUncheckedCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutGenerosInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutGenerosInput, AlbumUncheckedCreateWithoutGenerosInput>
  }

  export type GeneroCreateWithoutAlbumsInput = {
    nombre: string
    usuarios?: UsuarioGeneroCreateNestedManyWithoutGeneroInput
    artistas?: ArtistaGeneroCreateNestedManyWithoutGeneroInput
    canciones?: CancionGeneroCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateWithoutAlbumsInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioGeneroUncheckedCreateNestedManyWithoutGeneroInput
    artistas?: ArtistaGeneroUncheckedCreateNestedManyWithoutGeneroInput
    canciones?: CancionGeneroUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroCreateOrConnectWithoutAlbumsInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutAlbumsInput, GeneroUncheckedCreateWithoutAlbumsInput>
  }

  export type AlbumUpsertWithoutGenerosInput = {
    update: XOR<AlbumUpdateWithoutGenerosInput, AlbumUncheckedUpdateWithoutGenerosInput>
    create: XOR<AlbumCreateWithoutGenerosInput, AlbumUncheckedCreateWithoutGenerosInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutGenerosInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutGenerosInput, AlbumUncheckedUpdateWithoutGenerosInput>
  }

  export type AlbumUpdateWithoutGenerosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artista?: ArtistaUpdateOneRequiredWithoutAlbumsNestedInput
    canciones?: CancionUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutGenerosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    canciones?: CancionUncheckedUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type GeneroUpsertWithoutAlbumsInput = {
    update: XOR<GeneroUpdateWithoutAlbumsInput, GeneroUncheckedUpdateWithoutAlbumsInput>
    create: XOR<GeneroCreateWithoutAlbumsInput, GeneroUncheckedCreateWithoutAlbumsInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutAlbumsInput, GeneroUncheckedUpdateWithoutAlbumsInput>
  }

  export type GeneroUpdateWithoutAlbumsInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUpdateManyWithoutGeneroNestedInput
    artistas?: ArtistaGeneroUpdateManyWithoutGeneroNestedInput
    canciones?: CancionGeneroUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateWithoutAlbumsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    artistas?: ArtistaGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    canciones?: CancionGeneroUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type AlbumCreateWithoutCancionesInput = {
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artista: ArtistaCreateNestedOneWithoutAlbumsInput
    generos?: AlbumGeneroCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutCancionesInput = {
    id?: number
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artistaId: number
    generos?: AlbumGeneroUncheckedCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutCancionesInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutCancionesInput, AlbumUncheckedCreateWithoutCancionesInput>
  }

  export type ArtistaCreateWithoutCancionesInput = {
    nombre: string
    spotifyId: string
    imagenUrl?: string | null
    generos?: ArtistaGeneroCreateNestedManyWithoutArtistaInput
    albums?: AlbumCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaUncheckedCreateWithoutCancionesInput = {
    id?: number
    nombre: string
    spotifyId: string
    imagenUrl?: string | null
    generos?: ArtistaGeneroUncheckedCreateNestedManyWithoutArtistaInput
    albums?: AlbumUncheckedCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaCreateOrConnectWithoutCancionesInput = {
    where: ArtistaWhereUniqueInput
    create: XOR<ArtistaCreateWithoutCancionesInput, ArtistaUncheckedCreateWithoutCancionesInput>
  }

  export type CancionGeneroCreateWithoutCancionInput = {
    genero: GeneroCreateNestedOneWithoutCancionesInput
  }

  export type CancionGeneroUncheckedCreateWithoutCancionInput = {
    id?: number
    generoId: number
  }

  export type CancionGeneroCreateOrConnectWithoutCancionInput = {
    where: CancionGeneroWhereUniqueInput
    create: XOR<CancionGeneroCreateWithoutCancionInput, CancionGeneroUncheckedCreateWithoutCancionInput>
  }

  export type CancionGeneroCreateManyCancionInputEnvelope = {
    data: CancionGeneroCreateManyCancionInput | CancionGeneroCreateManyCancionInput[]
    skipDuplicates?: boolean
  }

  export type ReseñaCreateWithoutCancionInput = {
    contenido: string
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReseñasInput
    album?: AlbumCreateNestedOneWithoutReseñasInput
  }

  export type ReseñaUncheckedCreateWithoutCancionInput = {
    id?: number
    contenido: string
    usuarioId: number
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type ReseñaCreateOrConnectWithoutCancionInput = {
    where: ReseñaWhereUniqueInput
    create: XOR<ReseñaCreateWithoutCancionInput, ReseñaUncheckedCreateWithoutCancionInput>
  }

  export type ReseñaCreateManyCancionInputEnvelope = {
    data: ReseñaCreateManyCancionInput | ReseñaCreateManyCancionInput[]
    skipDuplicates?: boolean
  }

  export type CalificacionCreateWithoutCancionInput = {
    estrellas: number
    creadoEn?: Date | string
    usuario: UsuarioCreateNestedOneWithoutCalificacionesInput
    album?: AlbumCreateNestedOneWithoutCalificacionesInput
  }

  export type CalificacionUncheckedCreateWithoutCancionInput = {
    id?: number
    estrellas: number
    usuarioId: number
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type CalificacionCreateOrConnectWithoutCancionInput = {
    where: CalificacionWhereUniqueInput
    create: XOR<CalificacionCreateWithoutCancionInput, CalificacionUncheckedCreateWithoutCancionInput>
  }

  export type CalificacionCreateManyCancionInputEnvelope = {
    data: CalificacionCreateManyCancionInput | CalificacionCreateManyCancionInput[]
    skipDuplicates?: boolean
  }

  export type AlbumUpsertWithoutCancionesInput = {
    update: XOR<AlbumUpdateWithoutCancionesInput, AlbumUncheckedUpdateWithoutCancionesInput>
    create: XOR<AlbumCreateWithoutCancionesInput, AlbumUncheckedCreateWithoutCancionesInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutCancionesInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutCancionesInput, AlbumUncheckedUpdateWithoutCancionesInput>
  }

  export type AlbumUpdateWithoutCancionesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artista?: ArtistaUpdateOneRequiredWithoutAlbumsNestedInput
    generos?: AlbumGeneroUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutCancionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    generos?: AlbumGeneroUncheckedUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type ArtistaUpsertWithoutCancionesInput = {
    update: XOR<ArtistaUpdateWithoutCancionesInput, ArtistaUncheckedUpdateWithoutCancionesInput>
    create: XOR<ArtistaCreateWithoutCancionesInput, ArtistaUncheckedCreateWithoutCancionesInput>
    where?: ArtistaWhereInput
  }

  export type ArtistaUpdateToOneWithWhereWithoutCancionesInput = {
    where?: ArtistaWhereInput
    data: XOR<ArtistaUpdateWithoutCancionesInput, ArtistaUncheckedUpdateWithoutCancionesInput>
  }

  export type ArtistaUpdateWithoutCancionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: ArtistaGeneroUpdateManyWithoutArtistaNestedInput
    albums?: AlbumUpdateManyWithoutArtistaNestedInput
  }

  export type ArtistaUncheckedUpdateWithoutCancionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: ArtistaGeneroUncheckedUpdateManyWithoutArtistaNestedInput
    albums?: AlbumUncheckedUpdateManyWithoutArtistaNestedInput
  }

  export type CancionGeneroUpsertWithWhereUniqueWithoutCancionInput = {
    where: CancionGeneroWhereUniqueInput
    update: XOR<CancionGeneroUpdateWithoutCancionInput, CancionGeneroUncheckedUpdateWithoutCancionInput>
    create: XOR<CancionGeneroCreateWithoutCancionInput, CancionGeneroUncheckedCreateWithoutCancionInput>
  }

  export type CancionGeneroUpdateWithWhereUniqueWithoutCancionInput = {
    where: CancionGeneroWhereUniqueInput
    data: XOR<CancionGeneroUpdateWithoutCancionInput, CancionGeneroUncheckedUpdateWithoutCancionInput>
  }

  export type CancionGeneroUpdateManyWithWhereWithoutCancionInput = {
    where: CancionGeneroScalarWhereInput
    data: XOR<CancionGeneroUpdateManyMutationInput, CancionGeneroUncheckedUpdateManyWithoutCancionInput>
  }

  export type ReseñaUpsertWithWhereUniqueWithoutCancionInput = {
    where: ReseñaWhereUniqueInput
    update: XOR<ReseñaUpdateWithoutCancionInput, ReseñaUncheckedUpdateWithoutCancionInput>
    create: XOR<ReseñaCreateWithoutCancionInput, ReseñaUncheckedCreateWithoutCancionInput>
  }

  export type ReseñaUpdateWithWhereUniqueWithoutCancionInput = {
    where: ReseñaWhereUniqueInput
    data: XOR<ReseñaUpdateWithoutCancionInput, ReseñaUncheckedUpdateWithoutCancionInput>
  }

  export type ReseñaUpdateManyWithWhereWithoutCancionInput = {
    where: ReseñaScalarWhereInput
    data: XOR<ReseñaUpdateManyMutationInput, ReseñaUncheckedUpdateManyWithoutCancionInput>
  }

  export type CalificacionUpsertWithWhereUniqueWithoutCancionInput = {
    where: CalificacionWhereUniqueInput
    update: XOR<CalificacionUpdateWithoutCancionInput, CalificacionUncheckedUpdateWithoutCancionInput>
    create: XOR<CalificacionCreateWithoutCancionInput, CalificacionUncheckedCreateWithoutCancionInput>
  }

  export type CalificacionUpdateWithWhereUniqueWithoutCancionInput = {
    where: CalificacionWhereUniqueInput
    data: XOR<CalificacionUpdateWithoutCancionInput, CalificacionUncheckedUpdateWithoutCancionInput>
  }

  export type CalificacionUpdateManyWithWhereWithoutCancionInput = {
    where: CalificacionScalarWhereInput
    data: XOR<CalificacionUpdateManyMutationInput, CalificacionUncheckedUpdateManyWithoutCancionInput>
  }

  export type CancionCreateWithoutGenerosInput = {
    titulo: string
    spotifyId: string
    duracionMs: number
    album: AlbumCreateNestedOneWithoutCancionesInput
    artista: ArtistaCreateNestedOneWithoutCancionesInput
    reseñas?: ReseñaCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionCreateNestedManyWithoutCancionInput
  }

  export type CancionUncheckedCreateWithoutGenerosInput = {
    id?: number
    titulo: string
    spotifyId: string
    duracionMs: number
    albumId: number
    artistaId: number
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutCancionInput
  }

  export type CancionCreateOrConnectWithoutGenerosInput = {
    where: CancionWhereUniqueInput
    create: XOR<CancionCreateWithoutGenerosInput, CancionUncheckedCreateWithoutGenerosInput>
  }

  export type GeneroCreateWithoutCancionesInput = {
    nombre: string
    usuarios?: UsuarioGeneroCreateNestedManyWithoutGeneroInput
    artistas?: ArtistaGeneroCreateNestedManyWithoutGeneroInput
    albums?: AlbumGeneroCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateWithoutCancionesInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioGeneroUncheckedCreateNestedManyWithoutGeneroInput
    artistas?: ArtistaGeneroUncheckedCreateNestedManyWithoutGeneroInput
    albums?: AlbumGeneroUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroCreateOrConnectWithoutCancionesInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutCancionesInput, GeneroUncheckedCreateWithoutCancionesInput>
  }

  export type CancionUpsertWithoutGenerosInput = {
    update: XOR<CancionUpdateWithoutGenerosInput, CancionUncheckedUpdateWithoutGenerosInput>
    create: XOR<CancionCreateWithoutGenerosInput, CancionUncheckedCreateWithoutGenerosInput>
    where?: CancionWhereInput
  }

  export type CancionUpdateToOneWithWhereWithoutGenerosInput = {
    where?: CancionWhereInput
    data: XOR<CancionUpdateWithoutGenerosInput, CancionUncheckedUpdateWithoutGenerosInput>
  }

  export type CancionUpdateWithoutGenerosInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    album?: AlbumUpdateOneRequiredWithoutCancionesNestedInput
    artista?: ArtistaUpdateOneRequiredWithoutCancionesNestedInput
    reseñas?: ReseñaUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUpdateManyWithoutCancionNestedInput
  }

  export type CancionUncheckedUpdateWithoutGenerosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    reseñas?: ReseñaUncheckedUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type GeneroUpsertWithoutCancionesInput = {
    update: XOR<GeneroUpdateWithoutCancionesInput, GeneroUncheckedUpdateWithoutCancionesInput>
    create: XOR<GeneroCreateWithoutCancionesInput, GeneroUncheckedCreateWithoutCancionesInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutCancionesInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutCancionesInput, GeneroUncheckedUpdateWithoutCancionesInput>
  }

  export type GeneroUpdateWithoutCancionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUpdateManyWithoutGeneroNestedInput
    artistas?: ArtistaGeneroUpdateManyWithoutGeneroNestedInput
    albums?: AlbumGeneroUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateWithoutCancionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    artistas?: ArtistaGeneroUncheckedUpdateManyWithoutGeneroNestedInput
    albums?: AlbumGeneroUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type UsuarioCreateWithoutReseñasInput = {
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    generos?: UsuarioGeneroCreateNestedManyWithoutUsuarioInput
    calificaciones?: CalificacionCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutReseñasInput = {
    id?: number
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    generos?: UsuarioGeneroUncheckedCreateNestedManyWithoutUsuarioInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutReseñasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReseñasInput, UsuarioUncheckedCreateWithoutReseñasInput>
  }

  export type CancionCreateWithoutReseñasInput = {
    titulo: string
    spotifyId: string
    duracionMs: number
    album: AlbumCreateNestedOneWithoutCancionesInput
    artista: ArtistaCreateNestedOneWithoutCancionesInput
    generos?: CancionGeneroCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionCreateNestedManyWithoutCancionInput
  }

  export type CancionUncheckedCreateWithoutReseñasInput = {
    id?: number
    titulo: string
    spotifyId: string
    duracionMs: number
    albumId: number
    artistaId: number
    generos?: CancionGeneroUncheckedCreateNestedManyWithoutCancionInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutCancionInput
  }

  export type CancionCreateOrConnectWithoutReseñasInput = {
    where: CancionWhereUniqueInput
    create: XOR<CancionCreateWithoutReseñasInput, CancionUncheckedCreateWithoutReseñasInput>
  }

  export type AlbumCreateWithoutReseñasInput = {
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artista: ArtistaCreateNestedOneWithoutAlbumsInput
    canciones?: CancionCreateNestedManyWithoutAlbumInput
    generos?: AlbumGeneroCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutReseñasInput = {
    id?: number
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artistaId: number
    canciones?: CancionUncheckedCreateNestedManyWithoutAlbumInput
    generos?: AlbumGeneroUncheckedCreateNestedManyWithoutAlbumInput
    calificaciones?: CalificacionUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutReseñasInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutReseñasInput, AlbumUncheckedCreateWithoutReseñasInput>
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
    calificaciones?: CalificacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutReseñasInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: UsuarioGeneroUncheckedUpdateManyWithoutUsuarioNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CancionUpsertWithoutReseñasInput = {
    update: XOR<CancionUpdateWithoutReseñasInput, CancionUncheckedUpdateWithoutReseñasInput>
    create: XOR<CancionCreateWithoutReseñasInput, CancionUncheckedCreateWithoutReseñasInput>
    where?: CancionWhereInput
  }

  export type CancionUpdateToOneWithWhereWithoutReseñasInput = {
    where?: CancionWhereInput
    data: XOR<CancionUpdateWithoutReseñasInput, CancionUncheckedUpdateWithoutReseñasInput>
  }

  export type CancionUpdateWithoutReseñasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    album?: AlbumUpdateOneRequiredWithoutCancionesNestedInput
    artista?: ArtistaUpdateOneRequiredWithoutCancionesNestedInput
    generos?: CancionGeneroUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUpdateManyWithoutCancionNestedInput
  }

  export type CancionUncheckedUpdateWithoutReseñasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    generos?: CancionGeneroUncheckedUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type AlbumUpsertWithoutReseñasInput = {
    update: XOR<AlbumUpdateWithoutReseñasInput, AlbumUncheckedUpdateWithoutReseñasInput>
    create: XOR<AlbumCreateWithoutReseñasInput, AlbumUncheckedCreateWithoutReseñasInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutReseñasInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutReseñasInput, AlbumUncheckedUpdateWithoutReseñasInput>
  }

  export type AlbumUpdateWithoutReseñasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artista?: ArtistaUpdateOneRequiredWithoutAlbumsNestedInput
    canciones?: CancionUpdateManyWithoutAlbumNestedInput
    generos?: AlbumGeneroUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutReseñasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    canciones?: CancionUncheckedUpdateManyWithoutAlbumNestedInput
    generos?: AlbumGeneroUncheckedUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type UsuarioCreateWithoutCalificacionesInput = {
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    generos?: UsuarioGeneroCreateNestedManyWithoutUsuarioInput
    reseñas?: ReseñaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCalificacionesInput = {
    id?: number
    correo: string
    nombreUsuario: string
    contraseña: string
    nombre?: string | null
    imagenPerfil?: string | null
    generos?: UsuarioGeneroUncheckedCreateNestedManyWithoutUsuarioInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCalificacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCalificacionesInput, UsuarioUncheckedCreateWithoutCalificacionesInput>
  }

  export type CancionCreateWithoutCalificacionesInput = {
    titulo: string
    spotifyId: string
    duracionMs: number
    album: AlbumCreateNestedOneWithoutCancionesInput
    artista: ArtistaCreateNestedOneWithoutCancionesInput
    generos?: CancionGeneroCreateNestedManyWithoutCancionInput
    reseñas?: ReseñaCreateNestedManyWithoutCancionInput
  }

  export type CancionUncheckedCreateWithoutCalificacionesInput = {
    id?: number
    titulo: string
    spotifyId: string
    duracionMs: number
    albumId: number
    artistaId: number
    generos?: CancionGeneroUncheckedCreateNestedManyWithoutCancionInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutCancionInput
  }

  export type CancionCreateOrConnectWithoutCalificacionesInput = {
    where: CancionWhereUniqueInput
    create: XOR<CancionCreateWithoutCalificacionesInput, CancionUncheckedCreateWithoutCalificacionesInput>
  }

  export type AlbumCreateWithoutCalificacionesInput = {
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artista: ArtistaCreateNestedOneWithoutAlbumsInput
    canciones?: CancionCreateNestedManyWithoutAlbumInput
    generos?: AlbumGeneroCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutCalificacionesInput = {
    id?: number
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
    artistaId: number
    canciones?: CancionUncheckedCreateNestedManyWithoutAlbumInput
    generos?: AlbumGeneroUncheckedCreateNestedManyWithoutAlbumInput
    reseñas?: ReseñaUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutCalificacionesInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutCalificacionesInput, AlbumUncheckedCreateWithoutCalificacionesInput>
  }

  export type UsuarioUpsertWithoutCalificacionesInput = {
    update: XOR<UsuarioUpdateWithoutCalificacionesInput, UsuarioUncheckedUpdateWithoutCalificacionesInput>
    create: XOR<UsuarioCreateWithoutCalificacionesInput, UsuarioUncheckedCreateWithoutCalificacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCalificacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCalificacionesInput, UsuarioUncheckedUpdateWithoutCalificacionesInput>
  }

  export type UsuarioUpdateWithoutCalificacionesInput = {
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: UsuarioGeneroUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCalificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    correo?: StringFieldUpdateOperationsInput | string
    nombreUsuario?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    imagenPerfil?: NullableStringFieldUpdateOperationsInput | string | null
    generos?: UsuarioGeneroUncheckedUpdateManyWithoutUsuarioNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CancionUpsertWithoutCalificacionesInput = {
    update: XOR<CancionUpdateWithoutCalificacionesInput, CancionUncheckedUpdateWithoutCalificacionesInput>
    create: XOR<CancionCreateWithoutCalificacionesInput, CancionUncheckedCreateWithoutCalificacionesInput>
    where?: CancionWhereInput
  }

  export type CancionUpdateToOneWithWhereWithoutCalificacionesInput = {
    where?: CancionWhereInput
    data: XOR<CancionUpdateWithoutCalificacionesInput, CancionUncheckedUpdateWithoutCalificacionesInput>
  }

  export type CancionUpdateWithoutCalificacionesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    album?: AlbumUpdateOneRequiredWithoutCancionesNestedInput
    artista?: ArtistaUpdateOneRequiredWithoutCancionesNestedInput
    generos?: CancionGeneroUpdateManyWithoutCancionNestedInput
    reseñas?: ReseñaUpdateManyWithoutCancionNestedInput
  }

  export type CancionUncheckedUpdateWithoutCalificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    generos?: CancionGeneroUncheckedUpdateManyWithoutCancionNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type AlbumUpsertWithoutCalificacionesInput = {
    update: XOR<AlbumUpdateWithoutCalificacionesInput, AlbumUncheckedUpdateWithoutCalificacionesInput>
    create: XOR<AlbumCreateWithoutCalificacionesInput, AlbumUncheckedCreateWithoutCalificacionesInput>
    where?: AlbumWhereInput
  }

  export type AlbumUpdateToOneWithWhereWithoutCalificacionesInput = {
    where?: AlbumWhereInput
    data: XOR<AlbumUpdateWithoutCalificacionesInput, AlbumUncheckedUpdateWithoutCalificacionesInput>
  }

  export type AlbumUpdateWithoutCalificacionesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artista?: ArtistaUpdateOneRequiredWithoutAlbumsNestedInput
    canciones?: CancionUpdateManyWithoutAlbumNestedInput
    generos?: AlbumGeneroUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutCalificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    canciones?: CancionUncheckedUpdateManyWithoutAlbumNestedInput
    generos?: AlbumGeneroUncheckedUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type UsuarioGeneroCreateManyUsuarioInput = {
    id?: number
    generoId: number
  }

  export type ReseñaCreateManyUsuarioInput = {
    id?: number
    contenido: string
    cancionId?: number | null
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type CalificacionCreateManyUsuarioInput = {
    id?: number
    estrellas: number
    cancionId?: number | null
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type UsuarioGeneroUpdateWithoutUsuarioInput = {
    genero?: GeneroUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioGeneroUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioGeneroUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReseñaUpdateWithoutUsuarioInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cancion?: CancionUpdateOneWithoutReseñasNestedInput
    album?: AlbumUpdateOneWithoutReseñasNestedInput
  }

  export type ReseñaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReseñaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalificacionUpdateWithoutUsuarioInput = {
    estrellas?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    cancion?: CancionUpdateOneWithoutCalificacionesNestedInput
    album?: AlbumUpdateOneWithoutCalificacionesNestedInput
  }

  export type CalificacionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    estrellas?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalificacionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    estrellas?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioGeneroCreateManyGeneroInput = {
    id?: number
    usuarioId: number
  }

  export type ArtistaGeneroCreateManyGeneroInput = {
    id?: number
    artistaId: number
  }

  export type AlbumGeneroCreateManyGeneroInput = {
    id?: number
    albumId: number
  }

  export type CancionGeneroCreateManyGeneroInput = {
    id?: number
    cancionId: number
  }

  export type UsuarioGeneroUpdateWithoutGeneroInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutGenerosNestedInput
  }

  export type UsuarioGeneroUncheckedUpdateWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioGeneroUncheckedUpdateManyWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistaGeneroUpdateWithoutGeneroInput = {
    artista?: ArtistaUpdateOneRequiredWithoutGenerosNestedInput
  }

  export type ArtistaGeneroUncheckedUpdateWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistaGeneroUncheckedUpdateManyWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumGeneroUpdateWithoutGeneroInput = {
    album?: AlbumUpdateOneRequiredWithoutGenerosNestedInput
  }

  export type AlbumGeneroUncheckedUpdateWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumGeneroUncheckedUpdateManyWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type CancionGeneroUpdateWithoutGeneroInput = {
    cancion?: CancionUpdateOneRequiredWithoutGenerosNestedInput
  }

  export type CancionGeneroUncheckedUpdateWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type CancionGeneroUncheckedUpdateManyWithoutGeneroInput = {
    id?: IntFieldUpdateOperationsInput | number
    cancionId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistaGeneroCreateManyArtistaInput = {
    id?: number
    generoId: number
  }

  export type AlbumCreateManyArtistaInput = {
    id?: number
    titulo: string
    spotifyId: string
    fechaLanzamiento: Date | string
    imagenUrl?: string | null
    tipoAlbum: string
    totalCanciones: number
  }

  export type CancionCreateManyArtistaInput = {
    id?: number
    titulo: string
    spotifyId: string
    duracionMs: number
    albumId: number
  }

  export type ArtistaGeneroUpdateWithoutArtistaInput = {
    genero?: GeneroUpdateOneRequiredWithoutArtistasNestedInput
  }

  export type ArtistaGeneroUncheckedUpdateWithoutArtistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistaGeneroUncheckedUpdateManyWithoutArtistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumUpdateWithoutArtistaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    canciones?: CancionUpdateManyWithoutAlbumNestedInput
    generos?: AlbumGeneroUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
    canciones?: CancionUncheckedUpdateManyWithoutAlbumNestedInput
    generos?: AlbumGeneroUncheckedUpdateManyWithoutAlbumNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutAlbumNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateManyWithoutArtistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    fechaLanzamiento?: DateTimeFieldUpdateOperationsInput | Date | string
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tipoAlbum?: StringFieldUpdateOperationsInput | string
    totalCanciones?: IntFieldUpdateOperationsInput | number
  }

  export type CancionUpdateWithoutArtistaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    album?: AlbumUpdateOneRequiredWithoutCancionesNestedInput
    generos?: CancionGeneroUpdateManyWithoutCancionNestedInput
    reseñas?: ReseñaUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUpdateManyWithoutCancionNestedInput
  }

  export type CancionUncheckedUpdateWithoutArtistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
    generos?: CancionGeneroUncheckedUpdateManyWithoutCancionNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type CancionUncheckedUpdateManyWithoutArtistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type CancionCreateManyAlbumInput = {
    id?: number
    titulo: string
    spotifyId: string
    duracionMs: number
    artistaId: number
  }

  export type AlbumGeneroCreateManyAlbumInput = {
    id?: number
    generoId: number
  }

  export type ReseñaCreateManyAlbumInput = {
    id?: number
    contenido: string
    usuarioId: number
    cancionId?: number | null
    creadoEn?: Date | string
  }

  export type CalificacionCreateManyAlbumInput = {
    id?: number
    estrellas: number
    usuarioId: number
    cancionId?: number | null
    creadoEn?: Date | string
  }

  export type CancionUpdateWithoutAlbumInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    artista?: ArtistaUpdateOneRequiredWithoutCancionesNestedInput
    generos?: CancionGeneroUpdateManyWithoutCancionNestedInput
    reseñas?: ReseñaUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUpdateManyWithoutCancionNestedInput
  }

  export type CancionUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
    generos?: CancionGeneroUncheckedUpdateManyWithoutCancionNestedInput
    reseñas?: ReseñaUncheckedUpdateManyWithoutCancionNestedInput
    calificaciones?: CalificacionUncheckedUpdateManyWithoutCancionNestedInput
  }

  export type CancionUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    spotifyId?: StringFieldUpdateOperationsInput | string
    duracionMs?: IntFieldUpdateOperationsInput | number
    artistaId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumGeneroUpdateWithoutAlbumInput = {
    genero?: GeneroUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type AlbumGeneroUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumGeneroUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReseñaUpdateWithoutAlbumInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReseñasNestedInput
    cancion?: CancionUpdateOneWithoutReseñasNestedInput
  }

  export type ReseñaUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReseñaUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalificacionUpdateWithoutAlbumInput = {
    estrellas?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCalificacionesNestedInput
    cancion?: CancionUpdateOneWithoutCalificacionesNestedInput
  }

  export type CalificacionUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    estrellas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalificacionUncheckedUpdateManyWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    estrellas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cancionId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CancionGeneroCreateManyCancionInput = {
    id?: number
    generoId: number
  }

  export type ReseñaCreateManyCancionInput = {
    id?: number
    contenido: string
    usuarioId: number
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type CalificacionCreateManyCancionInput = {
    id?: number
    estrellas: number
    usuarioId: number
    albumId?: number | null
    creadoEn?: Date | string
  }

  export type CancionGeneroUpdateWithoutCancionInput = {
    genero?: GeneroUpdateOneRequiredWithoutCancionesNestedInput
  }

  export type CancionGeneroUncheckedUpdateWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type CancionGeneroUncheckedUpdateManyWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    generoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReseñaUpdateWithoutCancionInput = {
    contenido?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReseñasNestedInput
    album?: AlbumUpdateOneWithoutReseñasNestedInput
  }

  export type ReseñaUncheckedUpdateWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReseñaUncheckedUpdateManyWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    contenido?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalificacionUpdateWithoutCancionInput = {
    estrellas?: IntFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutCalificacionesNestedInput
    album?: AlbumUpdateOneWithoutCalificacionesNestedInput
  }

  export type CalificacionUncheckedUpdateWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    estrellas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalificacionUncheckedUpdateManyWithoutCancionInput = {
    id?: IntFieldUpdateOperationsInput | number
    estrellas?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
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