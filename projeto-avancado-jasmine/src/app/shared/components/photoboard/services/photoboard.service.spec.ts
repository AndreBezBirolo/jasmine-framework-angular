import { TestBed } from '@angular/core/testing';

import { PhotoboardService } from './photoboard.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../../environments/environment';

const mockData = {
  api: `${environment.API_URL}/photos`,
  data: [
    {
      id: 1,
      description: 'example 1',
      src: ''
    },
    {
      id: 2,
      description: 'example 2',
      src: ''
    },
    {
      id: 3,
      description: 'example 3',
      src: ''
    },
  ]
}

describe(PhotoboardService.name, () => {
  let service: PhotoboardService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoboardService]
    });
    service = TestBed.inject(PhotoboardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => httpController.verify());

  it(`#${PhotoboardService.prototype.getPhotos.name} should return photos with description in uppercase`, done => {
    service.getPhotos().subscribe((photos) => {
      expect(photos[ 0 ].description).toBe('EXAMPLE 1');
      expect(photos[ 1 ].description).toBe('EXAMPLE 2');
      done();
    })
    httpController
      .expectOne(mockData.api)
      .flush(mockData.data);
  })

});
