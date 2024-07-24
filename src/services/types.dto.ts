export type IssuesStatusDto = 'New' | 'In Progress' | 'Done';

export interface CommentDto {
  id: number;
  issue: string;
  date_created: string;
  message: string;
  designer: {
    avatar: string;
    username: string;
    thumbnails: {
      avatar: string;
      avatar_2x: string;
      avatar_webp: string;
      avatar_webp_2x: string;
    };
  };
}

// Если "issue" используется в API как "задача", то лучше, я считаю, использовать слово "task". Issue с англ. -
// это "проблема".
interface IssueByDesignerDto {
  id: number;
  key: string;
  date_created: string;
  // Лучше - start_date_by_designer.
  date_started_by_designer: string;
  // Лучше - finish_date_by_designer.
  date_finished_by_designer: string | null;
  status: IssuesStatusDto;
}

export interface DesignerDto {
  avatar: string;
  username: string;
  email: string;
  thumbnails: {
    avatar: string;
    avatar_2x: string;
    avatar_webp: string;
    avatar_webp_2x: string;
  };
  issues: IssueByDesignerDto[];
}

export interface DesignersDto {
  count: number;
  next: string;
  // Не понял, зачем это поле?
  previous: null;
  // Почему ResultS? Если это результат запроса списка дизайнеров, то он один - result.
  results: DesignerDto[];
}

// TaskDto...
export interface IssueDto {
  id: number;
  status: IssuesStatusDto;
  designer: string;
  project: string;
  date_created: string;
  summary: string;
  received_from_client: number;
  send_to_project_manager: number;
  send_to_account_manager: number;
  send_to_designer: number;
  date_updated: string;
  date_started_by_designer: string;
  date_finished_by_designer: string;
  date_finished: string;
}
