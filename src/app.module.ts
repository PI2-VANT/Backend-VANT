import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VantModule } from './vant/vant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@db_backend_vant:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    ),
    VantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
