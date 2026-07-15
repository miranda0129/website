import React from 'react';
import Image from 'next/image';

const photos = [
	'/website/images/gallery/4D39DCBA-D20F-4FC8-8CF7-C527049B79BC.jpg',
    '/website/images/gallery/IMG_0236.jpeg',
    '/website/images/gallery/IMG_6407.JPG',
    '/website/images/gallery/IMG_6417.JPG',
    '/website/images/gallery/IMG_6418.JPG',
    '/website/images/gallery/IMG_6470.JPG',
    '/website/images/gallery/IMG_6580.JPG',
    '/website/images/gallery/101_2254.JPG',
    '/website/images/gallery/101_2410.JPG',
    '/website/images/gallery/101_2211.JPG',
    '/website/images/gallery/101_2228.JPG',
    '/website/images/gallery/IMG_6640.JPG',
    '/website/images/gallery/100_2491.JPG',
    '/website/images/gallery/100_2468.JPG'
];

const PhotoGallery = () => {
    const photoPairs = [];
	for (let i = 0; i < photos.length; i += 2) {
		photoPairs.push(photos.slice(i, i + 2));
	}

    
	return (
		<div className="max-w-7xl mx-auto p-4">
			<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
                {photos.map((src, index) => (
                    <div key={index} className="mb-4 break-inside-avoid">
                    <Image
                        src={src}
                        alt={`Photo ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full rounded-lg"
                    />
                    </div>
                ))}
                </div>
		</div>
	);
};

export default PhotoGallery;