'use strict';

/**
 * This directive is the large preview of the purchasing option / detailed picture view.
 *
 * @class mypixPackagePreviewDirective
 */
define(function () {
    var directive = function ($timeout, scrollArea, state, media) {
        return {
            link: function ($scope) {
                $scope.ZoomIsOpen = false;
                var maxColumnCount = 12;//this is determined by bootstap columnization

                Object.defineProperty($scope, 'previewItemColumns', {
                    get: function () {
                        return Math.ceil(maxColumnCount / $scope.previewItems.length);
                    }
                });

                /**
                 * .
                 *
                 * @property selectedPurchaseViewCollection
                 * @type Object
                 */
                Object.defineProperty($scope, 'selectedPurchaseViewProducts', {
                    get: function () {
                        var products = [];

                        $scope.selectedPurchaseViewCollection.forEach(function (purchaseObject) {
                            purchaseObject.contents.forEach(function (item) {
                                if (item.show_visually && !products.some(function (product) {
                                        return (product.id === item.id)
                                    })) {
                                    products.push(item);
                                }
                            })
                        });
                        return products;
                    }
                });

                /**
                 * .
                 *
                 * @property zoomImage
                 * @type String
                 */
                Object.defineProperty($scope, 'zoomImage', {
                    value: '',
                    writable: true
                });

                $scope.dragPreview = function (event) {
                    var deltaX = event.gesture.deltaX;

                    $('.mypix-package-preview .preview-container').css({
                        'transform': 'translateX(' + deltaX + 'px)'
                    });
                };

                $scope.endDragPreview = function (event) {

                    if (!$scope.ZoomIsOpen) {
                        var deltaX = event.gesture.deltaX;

                        if (deltaX > 250) {
                            $scope.changeSelectedPicture(-1);
                        } else if (deltaX < -250) {
                            $scope.changeSelectedPicture(1);
                        }

                        $('.mypix-package-preview .preview-container').css({
                            'transform': 'translateX(0)'
                        });
                    }

                };

                var waitingForSecondClick = false;
                $scope.dblClickClose = function () {
                    if (waitingForSecondClick) {
                        waitingForSecondClick = false;
                        $scope.closeZoom();
                    } else {
                        waitingForSecondClick = true;
                        setTimeout(function () {
                            waitingForSecondClick = false;
                        }, 500);
                    }
                };

                $scope.selectPic = function (item, event) {

                    if ($(event.currentTarget).hasClass('selected')) {
                        $(event.currentTarget).addClass('zoom');

                        $scope.zoomImage = item.media.orig_image;

                        var enlargedImageContainer = $('.enlarged-image');
                        var zoomPreviewBox = $('.zoomPreviewBox');
                        var previewImage = $(event.currentTarget);

                        zoomPreviewBox.css({
                            'position': 'absolute',
                            'left': (previewImage[0].offsetParent.offsetLeft + event.offsetX - 100),
                            'top': (previewImage[0].offsetParent.offsetTop + event.offsetY - 50),
                            'display': 'block',
                            'height': 100,
                            'width': 200,
                            'border': 'solid 4px #36759f'
                        });

                        enlargedImageContainer.css({
                            'position': 'absolute',
                            'left': (previewImage[0].offsetParent.offsetLeft + event.offsetX),
                            'top': (previewImage[0].offsetParent.offsetTop + event.offsetY),
                            'width': 0,
                            'height': 0
                        });

                        $timeout(function () {
                            zoomPreviewBox.css('display', 'none');

                            enlargedImageContainer.animate({
                                'left': 70,
                                'top': 480,
                                'width': 1010,
                                'height': 600
                            }, 300);
                        }, 200);

                        $scope.ZoomIsOpen = true;
                        setTimeout(function () {
                            var enlargedImage = $('.enlarged-image img');
                            var mainPhotoView = $('.main-photo-view');

                            var scrollFinalX = ((enlargedImage.width() * .5 * (event.offsetX / event.target.width)) * -1) + (mainPhotoView.width() / 2);
                            var scrollFinalY = ((enlargedImage.height() * .5 * (event.offsetY / event.target.height)) * -1) + (mainPhotoView.height() / 2);

                            scrollArea.iScroll['enlarged-image'].scrollTo(scrollFinalX, scrollFinalY, 0);
                            $timeout(function () {
                                scrollArea.iScroll['enlarged-image'].refresh();
                            }, 500);

                        }, 50);
                    }
                };
            },
            replace: true,
            restrict: 'E',
            templateUrl: '../app/views/mypixDetailViewPreview.html'
        };
    };
    directive.$inject = ['$timeout', 'scrollArea', 'state', 'media'];
    return directive;
});