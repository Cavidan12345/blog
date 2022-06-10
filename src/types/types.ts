export type PostType = {
  title: string;
  body: string;
  id: number;
  comments?: {
    postId: string;
    body: string;
    id: string;
  }[];
};

export enum Status {
  idle = 'idle',
  fetching = 'fetching',
  error = 'error',
}
