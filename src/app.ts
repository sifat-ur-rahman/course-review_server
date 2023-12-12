import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoute } from './app/modules/course/course.route';
import { CategoryRoute } from './app/modules/category/category.route';
import { ReviewRoute } from './app/modules/review/review.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

//application route.

app.use('/', UserRoute);

app.use('/', CategoryRoute);
app.use('/', ReviewRoute);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
  });
});
//route error handler
app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route is not found',
  });
});

export default app;
