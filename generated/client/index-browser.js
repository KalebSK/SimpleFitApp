
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.ExerciseProgressesScalarFieldEnum = {
  id: 'id',
  date: 'date',
  prevRep: 'prevRep',
  newRep: 'newRep',
  prevWeight: 'prevWeight',
  newWeight: 'newWeight',
  prevDur: 'prevDur',
  newDur: 'newDur'
};

exports.Prisma.ExercisesScalarFieldEnum = {
  id: 'id',
  createdBy: 'createdBy',
  name: 'name',
  description: 'description',
  muscle_group: 'muscle_group',
  exercise_type: 'exercise_type'
};

exports.Prisma.Exercises_WorkoutPlansScalarFieldEnum = {
  Exercises_id: 'Exercises_id',
  WorkoutPlans_id: 'WorkoutPlans_id'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.RefreshTokensScalarFieldEnum = {
  id: 'id',
  token: 'token',
  userId: 'userId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  username: 'username',
  email: 'email',
  created_at: 'created_at',
  profile_pic_uri: 'profile_pic_uri',
  password: 'password'
};

exports.Prisma.Users_ExercisesScalarFieldEnum = {
  Users_id: 'Users_id',
  Exercises_id: 'Exercises_id'
};

exports.Prisma.Users_WorkoutPlansScalarFieldEnum = {
  Users_id: 'Users_id',
  WorkoutPlans_id: 'WorkoutPlans_id'
};

exports.Prisma.WorkoutPlansScalarFieldEnum = {
  id: 'id',
  createdBy: 'createdBy',
  name: 'name',
  description: 'description'
};
exports.ExerciseType = {
  Cardio: 'Cardio',
  Strength: 'Strength'
};

exports.MuscleGroup = {
  Chest: 'Chest',
  Back: 'Back',
  Legs: 'Legs',
  Shoulders: 'Shoulders',
  Arms: 'Arms',
  Abs: 'Abs'
};

exports.Prisma.ModelName = {
  ExerciseProgresses: 'ExerciseProgresses',
  Exercises: 'Exercises',
  Exercises_WorkoutPlans: 'Exercises_WorkoutPlans',
  Users: 'Users',
  Users_Exercises: 'Users_Exercises',
  Users_WorkoutPlans: 'Users_WorkoutPlans',
  WorkoutPlans: 'WorkoutPlans',
  RefreshTokens: 'RefreshTokens'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
