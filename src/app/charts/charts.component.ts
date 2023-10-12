import { Component, ElementRef, ViewChild, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import html2canvas from 'html2canvas';

interface Point {
    PunktDimension0: number;
    PunktDimension1: number;
    ZentDimension0: number;
    ZentDimension1: number;
}

interface GroupedPoints {
    ZentDimension0: number;
    ZentDimension1: number;
    points: Point[];
}


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, OnChanges {
    @ViewChild('chartContainer') chartContainer!: ElementRef;
    data: any;
    options: any;
    @Input() apiResponse: any;
    sortedApiResponse: any;
    @Input() localResponse: any;
    sortedLocalResponse: any;
    public chart: any;
    datasets: any = [];

    ngOnChanges(changes: SimpleChanges): void {
        alert("Hallo");
        if (changes['apiResponse'].currentValue !== undefined) {
            console.log(this.apiResponse)
            this.sortedApiResponse = this.groupPointsByZentDimensions(this.apiResponse);
            this.generateAPIDatasets()
            if (this.chart) {
                this.chart.destroy()
            }
            this.renderChart()
        }
        else if (changes['localResponse'].currentValue !== undefined) {
            alert("Hallo");
            console.log("Test; " + this.localResponse)
            this.sortedLocalResponse = this.localResponse;
            //this.sortedLocalResponse = this.groupPointsByZentDimensions(this.localResponse);
            this.generateLocalDatasets()
            if (this.chart) {
                this.chart.destroy()
            }
        }
    }

    ngOnInit() {

    }

    downloadChart() {
        const chartContainerElement = this.chartContainer.nativeElement;

        html2canvas(chartContainerElement).then((canvas) => {
            const downloadLink = document.createElement('a');

            downloadLink.href = canvas.toDataURL('image/jpeg');

            downloadLink.download = 'chart.jpg';

            document.body.appendChild(downloadLink);
            downloadLink.click();

            document.body.removeChild(downloadLink);
        });
    }

    groupPointsByZentDimensions(data: any): GroupedPoints[] {
        const groupedPointsMap = new Map<string, GroupedPoints>();

        const avgDistance = parseFloat(data[0].avgDistance);
        const k = parseInt(data[0].k, 10);
        const pointsArray = data[1] as Point[];

        for (const point of pointsArray) {
            const key = `${point.ZentDimension0},${point.ZentDimension1}`;
            if (groupedPointsMap.has(key)) {
                groupedPointsMap.get(key)!.points.push(point);
            } else {
                groupedPointsMap.set(key, { ZentDimension0: point.ZentDimension0, ZentDimension1: point.ZentDimension1, points: [point] });
            }
        }

        const groupedPoints: GroupedPoints[] = [];
        for (const group of groupedPointsMap.values()) {
            groupedPoints.push(group);
        }

        console.log(groupedPoints)
        return groupedPoints;
    }


    renderChart() {
        console.log(this.datasets)
        this.chart = new Chart('Chart', {
            type: 'scatter',
            data: {
                datasets: this.datasets
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'K-Means Clustering'
                    }
                }
            },
        })
    }

    generateAPIDatasets(): void {
        this.datasets = []
        const centroids: any[] = []
        const clusterArray: any[] = []
        this.sortedApiResponse.map((cluster: any) => {
            const dataset: any = {
                label: 'Cluster',
                data: cluster.points,
                parsing: {
                    xAxisKey: 'PunktDimension0',
                    yAxisKey: 'PunktDimension1',
                }
            } 
            let centroid = {
                'PunktDimension0': cluster.ZentDimension0,
                'PunktDimension1': cluster.ZentDimension1
            }
            centroids.push(centroid)
            clusterArray.push(dataset)
        })
        const centroidDataset: any = {
            label: 'Centroids',
            data: centroids,
            parsing: {
                xAxisKey: 'PunktDimension0',
                yAxisKey: 'PunktDimension1',
            },
            pointStyle: 'rectRot',
            radius: 10
        }
        this.datasets.push(centroidDataset)
        clusterArray.map(cluster => {
            this.datasets.push(cluster)
        })
        console.log(this.datasets)
    }

    generateLocalDatasets(): void {
        this.datasets = []
        const centroids: any[] = []
        const clusterArray: any[] = []
        this.sortedLocalResponse.map((cluster: any) => {
            const dataset: any = {
                label: 'Cluster',
                data: cluster.points,
                parsing: {
                    xAxisKey: 'x',
                    yAxisKey: 'y',
                }
            } 
            let centroid = {
                'x': cluster.x,
                'y': cluster.y
            }
            centroids.push(centroid)
            clusterArray.push(dataset)
        })
        const centroidDataset: any = {
            label: 'Centroids',
            data: centroids,
            /*parsing: {
                xAxisKey: 'PunktDimension0',
                yAxisKey: 'PunktDimension1',
            }, */
            pointStyle: 'rectRot',
            radius: 10
        }
        this.datasets.push(centroidDataset)
        clusterArray.map(cluster => {
            this.datasets.push(cluster)
        })
        console.log(this.datasets)
    }

}