const request =require ('supertest')
const app=require ('../src/app')

//Testing get all users
//describe()
//it que me respondan con 200
// it('responde con json y contiene una lista de usuarios', done=>{
//     request(app)
//         .get('/api/empleados')
//         .set('Aceptado','application/json')
//         .expect('Content-Type, /json/')
//         .expect(200,done);
// })

describe('GET /api/empleados/:id',()=>{
    it('Respuesta cuando llamo por id', async (done)=>{
        await request(app)
            .get('/api/empleados')
            .set('Aceptado','application/json')
            .expect('Content-Type, /json/')
            .expect(200,done)
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
    it('Respuesta cuando llamo por id y no funciona',async (done)=>{
        await request(app)
            .get('/api/empleados/6514bf4e98f1fd4f09dab614')
            .set('Aceptado','application/json')
            .expect('Content-Type, /json/')
            .expect(404)
            .expect('Usuario no creado')
            .end((err, res) => {
                if (err) return done(err);
                done();
            });
    });
} );

describe('POST /api/empleado',()=>{
    it('TEST 05 usuario creado', done=>{
        const data={
            username:'admin',
            password:'admin01'
        }
        request(app)
            .post('/api/empleado')
            .send(data)
            .set('Aceptado','application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err)=>{
                if(err) return done(err);
                done();
            });
    });
    
    it('TEST 06 usuario no creado', done=>{
        const data={};
        request(app)
            .post('/api/empleado')
            .send(data)
            .set('Aceptado','application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .expect('Usuario no creado')
            .end((err)=>{
                if(err) return done(err);
                done();
            })
    });
});

module.exports =app;