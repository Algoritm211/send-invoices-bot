import { Module } from '@nestjs/common';
import { UserInvoicesController } from './user-invoices.controller';
import { UserInvoicesService } from './user-invoices.service';

@Module({
  controllers: [UserInvoicesController],
  providers: [UserInvoicesService],
})
export class UserInvoicesModule {}
