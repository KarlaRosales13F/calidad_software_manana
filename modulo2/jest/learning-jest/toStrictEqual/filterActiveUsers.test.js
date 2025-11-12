const {filterActiveUsers}=require('/filterActiveUsers');

describe('Filtar usuarios Activos', ()=>{
    test('Happy path: Usuarios Filtrados Correctamente', ()=>{
        const users= [
            {id: 1, username: "Pisco", active:true},
            {id: 2, username: "Aviles", active:false},
            {id: 3, username: "Lopezp", active:true},
        ]
        const response = filterActiveUsers(users);
        const expectedUsers=[
            {id: 1, username: "Pisco", active:true},
            {id: 2, username: "Aviles", active:true},

        ]
        expect(response).toStrictEqual(expectedUsers);

    });
    test ('Sad patj:diferencia tipos de objetos',
        ()=>{
            const users =[
                {id: 1, username: "Pisco", active:true},
                {id: 2, username: "Lopezp", active:false},
            ]
            
            expect(response).not.toStrictEqual(expectedUsers);

    
        });

});