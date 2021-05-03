// 快速排序-基本思想
// 1.选定pivot中心轴，
// 2.将大于pivot的数字放在pivot的右边，
// 3.将小于pivot的数字放在pivot的左边，
// 分别对左右序列重复前面三步，直到序列长度为1，停止排序

export default {
    

    print() {
        let arr = [6, 7, 3, 4, 9, 8, 4, 5, 1, 0, 5];
        let length = arr.length;
        this.quickSort(arr, length);
        console.log(arr)
    },


    // 入口函数
    quickSort(arr = [], n) {
        this.qSort(arr, 0, n - 1)

    },

    //递归快速排序
    qSort(arr, low, height) {
        if (low < height) {
            let mid = this.partition(arr, low, height)
            this.qSort(arr, low, mid - 1) // 左子序列排序
            this.qSort(arr, mid + 1, height) // 右子序列排序
        }

    },
    // 划分函数
    partition(arr, low, height) {
        let i = low - 1;
        let j = height;
        let pivot = arr[height]
        // 死循环
        while (1) {
            while (arr[++i] < pivot) ;
            while (arr[--j] > pivot) ;
            if (i < j) {
                this.swap(arr, i, j)
            } else {
                break
            }
        }
        // 把枢纽元素放在正确的位置上
        this.swap(arr, i, height)
        return i;

    },

    //   // 交换位置
    swap(arr, i, j) {
        let temp1 = arr[i];
        arr[i] = arr[j];
        arr[j] = temp1;
    }


}

