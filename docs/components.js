module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    }, 
                    title:{
                        type:'string',
                        description:"title task",
                        example:"Aprender swagger"
                    },
                    completed:{
                        type:'boolean',
                        description:"task completed or not",
                        example:"false"
                    },

                }
            }
        }
    } 
}

//Definimos los esqquemas, los modelos que vamos a utilizar en el proyecto