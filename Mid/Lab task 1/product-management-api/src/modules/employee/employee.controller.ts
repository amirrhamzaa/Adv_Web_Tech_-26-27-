
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { Employee } from "./entities/employee.entity";

@Controller("employees")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() data: Partial<Employee>) {
    return this.employeeService.create(data);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.employeeService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: Partial<Employee>,
  ) {
    return this.employeeService.update(id, data);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.employeeService.remove(id);
  }
}
