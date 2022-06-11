import { Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

export class LoggerMiddlewear implements NestMiddleware {
  // context :
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: (error?: any) => void) {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    next();
  }
}
