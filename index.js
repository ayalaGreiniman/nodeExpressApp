
const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');
sdk.auth('rnd_IVAX7vCw2i5F5VTrc9sHLLLXIznA');
sdk.getServices({limit: '20'})
.then(({ data }) => console.log("data"))
.catch(err => console.error(err));
