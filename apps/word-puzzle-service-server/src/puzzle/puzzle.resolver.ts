import * as graphql from "@nestjs/graphql";
import { PuzzleResolverBase } from "./base/puzzle.resolver.base";
import { Puzzle } from "./base/Puzzle";
import { PuzzleService } from "./puzzle.service";

@graphql.Resolver(() => Puzzle)
export class PuzzleResolver extends PuzzleResolverBase {
  constructor(protected readonly service: PuzzleService) {
    super(service);
  }
}
