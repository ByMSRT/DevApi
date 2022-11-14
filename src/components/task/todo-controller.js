import Joi from "joi";
import Task from "#components/task/todo-model.js";

// CREATE CRUD

export async function readAll(ctx) {
    try {
        ctx.body = await Task.find();
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function create(ctx) {
    try {
        const taskValidationSchema = Joi.object({
            title: Joi.string().required(),
            status: Joi.boolean().required(),
            description: Joi.string(),
        });

        const { error } = taskValidationSchema.validate(ctx.request.body);
        if (error) throw new Error(error);

        await Task.create({
            title: ctx.request.body.title,
            status: ctx.request.body.status,
            description: ctx.request.body.description,
            updatedAt: new Date(),
            createdAt: new Date(),
        });
        ctx.status = 201;
        ctx.body = "Task created";
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function findById(ctx) {
    try {
        const idValidation = Joi.object({
            id: Joi.string().required(),
        });

        const { error } = idValidation.validate({ id: ctx.params.id });
        if (error) throw new Error(error);

        ctx.body = await Task.findById(ctx.params.id);
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

/* export async function update(ctx) {
    try {
        const idValidation = Joi.object({
            id: Joi.string().required(),
            title: Joi.string(),
            status: Joi.boolean(),
            description: Joi.string(),
        });

        const { error } = idValidation.validate({
            id: ctx.params.id,
            title: ctx.request.body.title,
            status: ctx.request.body.status,
            description: ctx.request.body.description,
        });
        if (error) throw new Error(error);

        const updateTime = {
            updatedAt: new Date(),
        };


        await Task.findByIdAndUpdate(ctx.params.id, {
            title: ctx.request.body.title,
            status: ctx.request.body.status,
            description: ctx.request.body.description,
            updatedAt: updateTime,
        });
        ctx.status = 200;
        ctx.body = "Task updated";
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
} */

export async function update(ctx) {
    try {
        const idValidation = Joi.object({
            id: Joi.string().required(),
            title: Joi.string(),
            status: Joi.boolean(),
            description: Joi.string(),
        });

        const { error } = idValidation.validate({
            id: ctx.params.id,
            title: ctx.request.body.title,
            status: ctx.request.body.status,
            description: ctx.request.body.description,
        });
        if (error) throw new Error(error);

        const updateTime = {
            updatedAt: new Date(),
        };

        const task = await Task.findById(ctx.params.id, {
            title: ctx.request.body.title,
            status: ctx.request.body.status,
            description: ctx.request.body.description,
            updatedAt: updateTime,
        });
        if (!task) throw new Error("Task not found");

        await task.updateOne(task);

        ctx.status = 200;
        ctx.body = "Task updated";
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}

export async function deleteTask(ctx) {
    try {
        const taskId = Joi.object({
            id: Joi.string().required(),
        });
        const { error } = taskId.validate({ id: ctx.params.id });
        if (error) throw new Error(error);

        ctx.body = await Task.deleteOne({ id: ctx.params.id });
        ctx.status = 200;
    } catch (e) {
        ctx.badRequest({ message: e.message });
    }
}