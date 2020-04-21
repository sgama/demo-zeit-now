import { NowRequest, NowResponse } from '@now/node'

export default (request: NowRequest, response: NowResponse) => {
    const { num1, num2 } = request.body;
    response.status(200).send(num1 + num2)
}
