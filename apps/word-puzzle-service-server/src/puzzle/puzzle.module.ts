import { Module } from "@nestjs/common";
import { PuzzleModuleBase } from "./base/puzzle.module.base";
import { PuzzleService } from "./puzzle.service";
import { PuzzleController } from "./puzzle.controller";
import { PuzzleResolver } from "./puzzle.resolver";

@Module({
  imports: [PuzzleModuleBase],
  controllers: [PuzzleController],
  providers: [PuzzleService, PuzzleResolver],
  exports: [PuzzleService],
})
export class PuzzleModule {}
