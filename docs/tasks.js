module.exports = {
    paths: {
        "/create": {
            post: {
                tags: {
                    Tasks: "Create a task",
                },
                description: "Create Task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses:  {
                    201: {
                        description: "Task created successfully",
                    },
                    500: {
                        description: "Server error",
                    }
                }
            }
        }
    }
}

// Esto van a ser los endpoints
// headers ----> content-type: application/json
// request body