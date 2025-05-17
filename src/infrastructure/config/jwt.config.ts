import { JwtModuleOptions } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config(); 

export const jwtConfig: JwtModuleOptions = {
  secret: process.env.JWT_SECRET || 'tu_secreto_super_seguro',
  signOptions: { expiresIn: '1d' },
};