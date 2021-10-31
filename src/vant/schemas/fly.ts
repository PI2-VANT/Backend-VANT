import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Vant } from './vant';

export type FlyDocument = Fly & Document;

@Schema()
export class Fly {
  @Prop({ required: true })
  flyCode: string;

  @Prop()
  velocidade: number;

  @Prop()
  bateria: number;

  @Prop()
  pesticida: number;

  @Prop()
  temperatura: number;

  @Prop()
  umidade: number;

  @Prop()
  latitude: string;

  @Prop()
  longitude: string;

  @Prop()
  date: Date;

  @Prop()
  registrationCode: string;

  @Prop({ default: false, required: false })
  start: boolean;
}

export const FlySchema = SchemaFactory.createForClass(Fly);
