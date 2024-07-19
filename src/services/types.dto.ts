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
