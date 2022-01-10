// To parse this data:
//
//   import { Convert, Credits } from "./file";
//
//   const credits = Convert.toCredits(json);

export interface CreditModel {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string; 
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCredits(json: string): CreditModel {
    return JSON.parse(json);
  }

  public static creditsToJson(value: CreditModel): string {
    return JSON.stringify(value);
  }
}
