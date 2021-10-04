import { PartialType } from '@nestjs/mapped-types';
import { CreateVantDto } from './create-vant.dto';

export class UpdateVantDto extends PartialType(CreateVantDto) {}
