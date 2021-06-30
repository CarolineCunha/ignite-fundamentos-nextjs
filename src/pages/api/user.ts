import { NextApiRequest, NextApiResponse} from 'next';

export default(request, response) => {
    const users =[
        { id: 1, name:'Carol'},
        { id: 2, name: 'Carlos'},
        { id: 3, name: 'Camila'},
    ]

    return response.json(users)
}