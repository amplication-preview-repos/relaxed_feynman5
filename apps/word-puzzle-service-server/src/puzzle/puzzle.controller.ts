import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PuzzleService } from "./puzzle.service";
import { PuzzleControllerBase } from "./base/puzzle.controller.base";

@swagger.ApiTags("puzzles")
@common.Controller("puzzles")
export class PuzzleController extends PuzzleControllerBase {
  constructor(protected readonly service: PuzzleService) {
    super(service);
  }
}
