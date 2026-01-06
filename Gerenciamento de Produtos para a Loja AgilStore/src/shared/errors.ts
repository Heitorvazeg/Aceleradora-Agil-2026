// Classe abstrata para modelar os erros internos
export abstract class AppError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
};

// Erro da camada repository
export class RepositoryError extends AppError {
  constructor(message = "Erro de acesso aos dados") {
    super(message, 500);
  }
};

// Erro da camada service
export class ServiceError extends AppError {
  constructor(message: string, statusCode = 400) {
    super(message, statusCode);
  }
};
