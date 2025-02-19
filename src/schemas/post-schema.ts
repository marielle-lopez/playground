import * as z from 'zod';

export const postSchema = z.object({
    title: z.string().min(1, { message: 'Title must be at least 1 character long' }),
    author: z.string().min(1, { message: 'Author must be at least 1 character long' }),
    introduction: z.string().min(1, { message: 'Introduction must be at least 1 character long' }),
    body: z.string().min(1, { message: 'Body must be at least 1 character long' }),
    conclusion: z.string().min(1, { message: 'Conclusion must be at least 1 character long' }),
    tags: z.array(
        z.string().min(1, { message: 'Tag must be at least 1 character long' })).min(1, { message: 'At least one tag is required' }        
    ),
});