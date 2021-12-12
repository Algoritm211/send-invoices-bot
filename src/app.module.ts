import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserInvoicesModule } from './user-invoices/user-invoices.module';

@Module({
  imports: [UserInvoicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
