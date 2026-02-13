<!-- # Mục lục -->


<a name="gioi-thieu"></a>

# I. Giới thiệu: 

Cây đỏ đen (RB Tree) là một dạng cây nhị phân tìm kiếm tự cân bằng, RB Tree được giới thiệu vào năm 1972 bởi [Rudolf Bayer](https://en.wikipedia.org/wiki/Rudolf_Bayer). 

Các phép toán trên chúng như tìm kiếm (search), chèn (insert), và xóa (delete) trong thời gian $O(\log_n)$, trong đó $n$ là số các phần tử của cây.

<a name="tong-quan"></a>

# II. Tổng quan về RB Tree: 

<a name="cac-tinh-chat"></a>

## 1. Các tính chất:

RB Tree là một cây tìm kiếm nhị phân (BST) nên trước hết nó thừa hưởng hết mọi tính chất của một BST thông thường. Chúng ta sẽ nói về các tính chất riêng của RB Tree. Đầu tiên, điểm đặt biệt ở RB Tree so với các BST khác đó là mỗi nút của nó có thêm một thuộc tính là **color** chỉ nhận một trong hai giá trị là **Red** hoặc **Black** (**đỏ** hoặc **đen**) và đây cũng là lí do tại sao nó được đặt tên là cây đỏ đen.

Các điểm đặc trưng của RB Tree so với các BST khác có thể được tóm tắt bằng 5 tình chất sau:

1. Một node trên cây sẽ có màu là đỏ hoặc đen.
2. Nút gốc có màu là đen.
3. Tất cả các node **NULL** đều có màu đen (con của các node lá hoặc các node không đủ 2 node con).
4. Không tồn tại một đường đi trên cây đi từ gốc đến nút NULL mà có 2 nút liên tiếp là màu đỏ (và suy ra mọi nút đỏ đều có nút cha là đen, không có con hoặc có 2 nút con là đen).
5. Xét một node **bất kì**, ta luôn có **tất cả** các đường đi từ node đó đến các **node NULL** sẽ có số lượng node màu đen bằng nhau (ở đây và cả trong bài viết này, đường đi có nghĩa là đi từ một node xuống một node sâu hơn)

<a name="su-can-bang-cua-rb-tree"></a>

## 2. Sự cân bằng của RB-Tree.

Trước hết, cần lưu ý rằng, sự cân bằng của RB Tree không phải là tuyệt đối như cây AVL.
Từ 5 tính chất trên, ta có thể rút ra được các nhận xét như sau:

- Gọi $A$ là độ dài đường đi dài nhất từ gốc đến một nút NULL, $B$ là độ dài đường đi ngắn nhất từ gốc đến một nút NULL. Ta sẽ có $A \leq 2B$. 
> **Chứng minh**: 
>
> Dựa vào tính chất **4**, ta luôn có số nút đen trên một đường đi là bằng nhau. Với một số luợng nút đen cho trước, đường đi **ngắn nhất có thể** sẽ chỉ gồm các nút đen, và đường đi **dài nhất có thể** sẽ có các nút đỏ, đen xen kẽ nhau (vì theo tính chất **5** ta không thể có 2 nút đen liên tiếp trên đường đi nhưng vì muốn độ dài đường đi càng lớn càng tốt nên ta sẽ thêm càng nhiều nút đỏ càng tốt, và thêm xen kẽ là cách tối ưu) mà gốc là nút đen, nên số nút đỏ trên một đường đi tối đa bằng số nút đen trên đường đi đó. 
>
> Nói các khác, chênh lệch tối đa giữa đường đi dài nhất và đường đi ngắn nhất bằng với **số lượng nút đỏ tối đa có thể có trên đường đi** và đúng bằng số nút đen trên đó. Từ đó ta suy ra được tính chất trên: $A \leq 2B$

- Một nút nếu có duy nhất _1_ con thì nút con đó phải là **nút lá** có màu đỏ. Xét một nút _S_, gọi _2_ nút con của _S_ là _SL_ và _SR_. Không mất tính tổng quát, giả sử nút con khác NULL của _S_ là _SL_ và _SR_ là nút NULL. Khi đó nếu _SL_ có màu đen thì đường đi từ gốc đến một nút NULL mà đi qua _SL_ sẽ nhiều hơn ít nhất là _1_ nút đen so với đường đi đến nút NULL _SR_. Còn nếu _SL_ không phải là lá, thì _SL_ sẽ có ít nhất một nút con _C_. Khi đó giữa _SL_ và _C_ phải có **ít nhất** một nút đen và cũng dễ dàng chứng minh được đường đi đến nút NULL qua _C_ sẽ đi qua nhiều nút đen hơn đường đi đến _SR_.
![](/assets/2022-05-04-red-black-tree/balance.png)

Cũng từ tính chất _2_ ta có thể nhận thấy rằng, nếu gọi độ dài đường đi ngắn nhất từ gốc đến một nút lá nào đó là _H_ thì tất cả các đỉnh có khoảng cách tới gốc không vượt quá $H$ sẽ tạo thành **cây nhị phân đầy đủ** có độ cao _H_. Kết hợp với nhận xét đầu tiên thì RB Tree sẽ có độ cao trong khoảng _[log(n+1), 2log(n+1)]_ - nói cách khác, độ cao của RB Tree sẽ không thể **vượt quá** _2log(n+1)_.

Tham khảo thêm: [https://doctrina.org/maximum-height-of-red-black-tree.html](https://doctrina.org/maximum-height-of-red-black-tree.html)

<a name="thao-tac-tren-rb-tree"></a>

# III. Thao tác trên RB Tree:

<a name="bieu-dien-rb-tree"></a>

## 1. Biểu diễn RB Tree:

Kiểu dữ liệu của các nút trên cây:
```cpp

class Node {
    private:
        int color;
        int data;
        Node *leftChild;
        Node *rightChild;
        Node *parent;
    public:
        Node(int color, int data) {
            this->color = color;
            this->data = data;
            this->leftChild = NULL;
            this->rightChild = NULL;
            this->parent = NULL;
        }
    friend class RBTree;
};
```

Dữ liệu của lớp biểu diễn cây chỉ cần lưu lại nút gốc:

```cpp
class RBTree {
    private:
        Node *root;
};
```

<a name="phep-quay-cay"></a>

## 2. Phép quay cây

![](/assets/2022-05-04-red-black-tree/rotate.gif)

Các bạn có thể xem thêm phần này tại [đây.](https://en.wikipedia.org/wiki/Tree_rotation)
Mục đích của phép quay cây là để chỉnh sửa cây BST lại (mục đích thường là hướng tới việc giảm độ cao) mà cây mới sau khi quay vẫn là cây BST. Quay cây gồm có quay qua trái và quay qua phải. Phép quay sẽ được diễn ra như sau:

<a name="quay-trai"></a>

### 2.1 Quay trái

![](/assets/2022-05-04-red-black-tree/rotateLeft.png)
- Quay trái cây tại nút _ptr_:
    + Đặt con phải của _ptr_ thành _ptrRL_.
    + Nếu _ptrRL_ không phải NULL thì đặt cha của _ptrRL_ là _ptr_.
    + Nếu _ptr_ là gốc thì đặt lại gốc mới là _ptrR_. Ngược lại, tùy theo _ptr_ là con trái hay con phải của cha nó mà đặt lại con trái/phải đó thành _ptrR_.
    + Đặt lại con trái của _ptrR_ thành _ptr_, cha của _ptrR_ thành cha cũ của _ptr_, cha mới của _ptr_ thành _ptrR_.

```cpp

void RBTree::rotateLeft(Node *&ptr) {
    Node *rightChild = ptr->rightChild;

    ptr->rightChild = rightChild->leftChild;
    if (ptr->rightChild != NULL)
        ptr->rightChild->parent = ptr;

    if (ptr == this->root)
        this->root = rightChild;

    else if (ptr == ptr->parent->leftChild)
        ptr->parent->leftChild = rightChild;
    else
        ptr->parent->rightChild = rightChild;

    rightChild->leftChild = ptr;
    rightChild->parent = ptr->parent;
    ptr->parent = rightChild;
}
```

<a name="quay-phai"></a>

### 2.2 Quay phải

![](/assets/2022-05-04-red-black-tree/rotateRight.png)

- Quay phải cây tại nút _ptr_:
    + Đặt con trái của _ptr_ thành _ptrLR_.
    + Nếu _ptrLR_ không phải NULL thì đặt cha của _ptrLR_ là _ptr_.
    + Nếu _ptr_ là gốc thì đặt lại gốc mới là _ptrL_. Ngược lại, tùy theo _ptr_ là con trái hay con phải của cha nó mà đặt lại con trái/phải đó thành _ptrL_.
    + Đặt lại con phải của _ptrL_ thành _ptr_, cha của _ptrL_ thành cha cũ của _ptr_, cha mới của _ptr_ thành _ptrL_.

```cpp

void RBTree::rotateRight(Node *&ptr) {
    Node *leftChild = ptr->leftChild;

    ptr->leftChild = leftChild->rightChild;
    if (ptr->leftChild != NULL)
        ptr->leftChild->parent = ptr;

    if (ptr == this->root)
        this->root = leftChild;
    else if (ptr == ptr->parent->leftChild)
        ptr->parent->leftChild = leftChild;
    else
        ptr->parent->rightChild = leftChild;

    leftChild->rightChild = ptr;
    leftChild->parent = ptr->parent;
    ptr->parent = leftChild;
}
```
<a name="insert"></a>

## 3. Insert

<a name="chon-vi-tri"></a>

### 3.1 Chọn vị trí.

Khi thêm một giá trị vào RB Tree, ta cần chú ý cây có rỗng hay không, nếu cây đang rỗng thì ta chỉ cần cho nút đó trở thành gốc và gán cho nó màu đen.

Trong trường hợp cây không rỗng, ta sẽ duyệt như duyệt cây BST để tìm vị trí thích hợp trên cây. Cụ thể, gọi _x_ là giá trị cần thêm vào cây. Bắt đầu từ _linker = root_, nếu _x < linker->data_ thì ta đi về phía bên trái của _linker_. Trong trường hợp _linker->leftChild_ là một nút NULL thì ta cho luôn nút mới vào vị trí này. Còn nếu _x >= linker->data_ thì ta cho _linker_ đi về nhánh phải, nếu nhánh này NULL thì cho luôn nút mới vào vị trí này.

Sau khi đã thêm được nút vào cây, ta cần chỉnh lại cấu trúc của cây để cây thỏa 5 tính chất ở trên bằng cách quay cây và đổi màu của nút. Cụ thể hơn sẽ được nói ở phần tiếp theo.

Lưu ý, mặc định thì nút mới sẽ có màu là đỏ.

```cpp
void RBTree::insert(int data) {
    Node *ptr = new Node(RED,data);
    if (root == NULL) {
        root = ptr;
        root->color = BLACK;
        return;
    }   
    Node *linker = root;
    while (linker != NULL) {
        if (data < linker->data) { // go left
            if (linker -> leftChild == NULL) {
                linker->leftChild = ptr;
                break;
            } else
                linker = linker->leftChild;
        } else { // go right
            if (linker->rightChild == NULL) {
                linker->rightChild = ptr;
                break;
            } else
                linker = linker->rightChild;
        }
    }
    ptr->parent = linker;
    insertFix(ptr);
}
```

<a name="chinh-cay-insert"></a>

### 3.2 Chỉnh cây:

Trước hết ta có cách gọi các nút liên quan đến một nút **X** nào đó như sau:

![](/assets/2022-05-04-red-black-tree/defination.png)

<a name="nut-cha-co-mau-den"></a>

#### 3.2.1 Nút cha có màu đen:

Khi nút cha của nút **X** vừa được thêm vào có màu đen thì cây vẫn thỏa mãn đủ 5 tính chất, nên ta không cần làm gì thêm ở bước này nữa.

<a name="nut-cha-co-mau-do"></a>

#### 3.2.2 Nút cha có màu đỏ:

##### 3.2.2.1 Nút uncle có màu đỏ:

![](/assets/2022-05-04-red-black-tree/redred.png)

Trường hợp này ta sẽ đổi màu các nút **P, U, G** sau đó coi **G** như là **X** mới và xử lí tiếp trên nút **X** mới này.

##### 3.2.2.1 Nút uncle có màu đen:

![](/assets/2022-05-04-red-black-tree/redblack.png)

Cần lưu ý rằng, trường hợp này không xảy ra ngay từ đầu mà nó sẽ xảy ra sau khi gặp trường hợp **3.2.2.1** một số lần. Tức là sau khi ta thực hiện đổi màu trong trường hợp trên thì mới có khả năng xuất hiện trường hợp này (các bạn có thể tưởng tượng thật ra trước đó nút X là màu đen chữ không phải màu đỏ như hình vì thật chất nó là nút G cũ trong trường hợp trên mà sau đó nó mới được gán thành nút X). Và hiện tại thì đường đi từ **X** đến NULL vẫn có số đỉnh đen bằng với đi từ **U** xuống NULL.

Ta sẽ có 4 trường hợp như sau:

+ **P** là con trái của **G**, **X** là con trái của **P**: 
    + Đổi màu **G** và **P**.
    + Quay phải **G**.
![](/assets/2022-05-04-red-black-tree/redblack1.png)

+ **P** là con trái ủa **G**, **X** là con phải của **P**:
    + Quay trái **P**.
    + Swap (đổi tên lại) **P** và **X** (X mới là P cũ và ngược lại).
    + Lúc này xử lí tiếp như trường hợp 1.
![](/assets/2022-05-04-red-black-tree/redblack2.webp)

+ **P** là con phải của **G**, **X** là con phải của **P**: 
    + Đổi màu **G** và **P**.
    + Quay trái **G**.
![](/assets/2022-05-04-red-black-tree/redblack3.png)

+ **P** là con phải ủa **G**, **X** là con trái của **P**:
    + Quay phải **P**.
    + Swap (đổi tên lại) **P** và **X** (X mới là P cũ và ngược lại).
    + Lúc này xử lí tiếp như trường hợp 3.
![](/assets/2022-05-04-red-black-tree/redblack4.png)

<a name="giai-thich-them"></a>

#### 3.3 Giải thích thêm:

1. Hình trong trường hợp **2** bị sai vị trí các nút T1, T2, T3 sau khi quay cây, nhưng không cần quan tâm đến các nút đó.

<a name="code"></a>

#### 3.4 Code:

```cpp
void RBTree::insertFix(Node *&ptr) {
    while (ptr != root && getColor(ptr) == RED && getColor(ptr->parent) == RED) {
        Node *parent = ptr->parent;
        Node *grandparent = parent->parent;
        if (parent == grandparent->leftChild) {
            Node *uncle = grandparent->rightChild;
            if (getColor(uncle) == RED) {
                setColor(uncle, BLACK);
                setColor(parent, BLACK);
                setColor(grandparent, RED);
                ptr = grandparent;
            } else {
                if (ptr == parent->rightChild) {
                    rotateLeft(parent);
                    ptr = parent;
                    parent = ptr->parent;
                }
                rotateRight(grandparent);
                setColor(grandparent, RED);
                setColor(parent, BLACK);
                ptr = parent;
            }
        } else {
            Node *uncle = grandparent->leftChild;
            if (getColor(uncle) == RED) {
                setColor(uncle, BLACK);
                setColor(parent, BLACK);
                setColor(grandparent, RED);
                ptr = grandparent;
            } else {
                if (ptr == parent->leftChild) {
                    rotateRight(parent);
                    ptr = parent;
                    parent = ptr->parent;

                }
                rotateLeft(grandparent);
                setColor(grandparent, RED);
                setColor(parent, BLACK);
                ptr = parent;
            }
        }

    }
    setColor(root, BLACK);
}
```

<a name="delete"></a>

## 4. Delete

<a name="tien-xu-li"></a>

### 4.1 Tiền xử lí

Khi xóa một nút **V** bất kì, nếu nút **V** đó có cả 2 nút con thì ta hoàn toàn có thể đi tới nút **X** là nút có giá trị nhỏ nhất trong cây con của nút con phải hoặc nút **X** là nút có giá trị lớn nhất trong cây con của nút con trái. Gán _V->data = X->data_. Sau đó xóa nút **X** đi. Như vậy cũng tương đương với việc xóa trực tiếp nút **V**.

![](/assets/2022-05-04-red-black-tree/delete2Node.png)

Chú ý: Nếu nút **V** chỉ có 1 con thì ta cũng có thể làm tương tự như vậy nhưng chỉ có 1 lựa chọn (nhỏ nhất nhánh phải hoặc lớn nhất nhánh trái). Nhưng điều này cũng không cần thiết lắm vì nếu có 1 nút con duy nhất thì nút đó phải là **nút lá màu đỏ**, và nó sẽ thuộc trường hợp đơn giản sẽ được nói sau đây, nên việc tìm nút để thay thế là không cần thiết.

Vậy giờ ta chỉ cần quan tâm đến việc xóa nút có nhiều nhất **1** nhánh con.

Gọi **U** là nút con duy nhất của nút **V** cần xóa (nếu **V** không có nút con nào thì **U** là nút NULL và sẽ có màu đen).

Như vậy việc đầu tiên cần làm sau khi xóa **V** đó là để **U** thay vào vị trí của **V** sau đó ta sẽ tiến hành chỉnh cây lại nếu cần.

Nếu **V** và **U** có một nút mang màu đỏ (cả hai nút không thể cùng có màu đỏ được). Ta sẽ đổi màu của **U** thành đen khi đó các ràng buộc sẽ được đảm bảo. Như đã nói ở phần chú ý, nếu có duy nhất một con thì con đó phải là **nút lá màu đỏ** nên trường hợp này đã giải quyết được 2 trường hợp: **V** là lá màu đỏ, **V** có một nút con.


Vậy thì chỉ còn lại trường hợp **V** đen và không có con nào cả (**U** là NULL). Khi đó ta sẽ gọi hàm _eraseFix_

```cpp
void RBTree::eraseNode(Node *&ptr) {
    Node* child = (ptr->leftChild == NULL) ? ptr->rightChild : ptr->leftChild;
    Node* parent = ptr->parent;
    // case one of ptr & child red

    if (ptr->color == RED || getColor(child) == RED) {
        //child->parent = parent;
        setParent(child, parent);
        // case ptr is root
        if (parent != NULL)
            if (parent->leftChild == ptr)
                parent->leftChild = child;
            else
                parent->rightChild = child;
        else
            root = child;
        setColor(child, BLACK); // child is red then set child as black
        delete ptr; // delete because we return right now
        return;
    }
    // luc nay ptr va child deu la mau den, nen se goi ham eraseFix
    Node *sibling = getSibling(ptr); // de tien hon cho ham eraseFix
    if (parent != NULL)
        if (parent->leftChild == ptr)
            parent->leftChild = NULL;
        else
            parent->rightChild = NULL;
    else
        root = child;
    delete ptr;
    
    eraseFix(parent, sibling);
}

void RBTree::erase(int data) {
    Node *ptr = find(data);   

    if (ptr->leftChild != NULL && ptr->rightChild != NULL) {
        Node *beErase = minimumRight(ptr);
        ptr->data = beErase->data;
        ptr = beErase;
    }
    eraseNode(ptr);
}
```

<a name="chinh-cay-delete"></a>

### 4.2 Chỉnh cây

Nhắc lại một lần nữa, khi đã gọi hàm _eraseFix_ thì chắc chắn rơi vào trường hợp cả **V** và **U** đều là màu đen (**V** là lá và **U** là NULL), nhánh của **U** ít hơn nhánh của **sibling** một nút đen. Gọi **sibling** của **U** là **S**, cha của **sibling** là **P**, con trái và con phải của **S** lần lượt là **SL** và **SR** (2 nút con này có thể là NULL hoặc RED)

![](/assets/2022-05-04-red-black-tree/deleteFixTree.png)

<a name="sl-va-sr-co-it-nhat-mot-nut-mau-do"></a>

#### 4.3.1 SL và SR có ít nhất một nút màu đỏ

- **S** là con trái của **P**, **SL** có màu đỏ:

    - _S->color = P->color_
    - _P->color = BLACK_ (**P** đang đen thì vẫn là đen, đang đỏ thì cũng sẽ thành đen)
    - _SL->color = BLACK_
    - Quay phải **P**.

![](/assets/2022-05-04-red-black-tree/deleteRed1.png)

- **S** là con trái của **P**, chỉ có **SR** màu đỏ:

    - Quay trái **S** sẽ được như cây thứ 2 ở hình bên dưới.
    - Đặt lại _S = SR_ và cập nhập lại _SL_, _SR_ theo **S** mới.
    - Đưa về trường hợp phía trên, làm như trên với **S**, **SL** mới và **P**.
![](/assets/2022-05-04-red-black-tree/deleteRed2.png)

- **S** là con phải của **P**, **SR** có màu đỏ:

    - _S->color = P->color_
    - _P->color = BLACK_
    - _SR->color = BLACK_ (trong hình nó là bằng sib->color, nhưng mà **SR** đã đỏ rồi thì **S** phải đen)
    - Quay trái **P**

![](/assets/2022-05-04-red-black-tree/deleteRed3.webp)

- **S** là con phải của **P**, chỉ có **SL** màu đỏ:

    - Quay phải **S** sẽ được như cây thứ 2 ở hình bên dưới.
    - Đặt lại _S = SL_ và cập nhập lại _SL_, _SR_ theo **S** mới.
    - Đưa về trường hợp phía trên, làm như trên với **S**, **SR** mới và **P**.

![](/assets/2022-05-04-red-black-tree/deleteRed4.png)

P/S: Đổi màu trước hay quay trước đều được cả, không ảnh hưởng đến kết quả. Trong trường hợp 1 và 3, _nếu_ cả hai nút con của **S** đều là đỏ thì cũng không ảnh hưởng đến kết quả, nhưng nếu nút con ở vị trí thuận không phải màu đỏ (trường hợp 2 và 4) thì phải xoay cây để đưa về trường hợp thuận chiều (1 và 3).

<a name="s-sl-va-sr-deu-co-mau-den"></a>

#### 4.3.2 S, SL và SR đều có màu đen:

Thì **SL** và **SR** đều là **NULL**, ta sẽ xử lí trường hợp này như sau:
- _S->color = RED_
- Nếu _P_ là màu đỏ thì đổi màu P: _P->color = BLACK_

![](/assets/2022-05-04-red-black-tree/deleteBlack1.2.png)

- Nếu không thì gọi hàm eraseFix với **P** mới là _P->parent_ và **S** mới là _sibling_ của P.

![](/assets/2022-05-04-red-black-tree/deleteBlack1.png)

Trước hết cần lưu ý rằng, đường đi đến nút NULL có qua **S** là một đường đi chuẩn, tức là nó có số nút đen bằng với các đường đi từ root đến các nút NULL khác.

Vậy thì ta chỉ cần fix làm sao mà từ **P** đến **S** không thay đổi số lượng nút đen và từ **P** đến **U** tăng thêm 1 nút đen vì từ **P** đến **U** đang ít hơn 1 nút đen so với từ **P** đến **S**.

Còn nếu không có khả năng làm việc đó, thì ta giảm số nút đen đến **S** đi 1 rồi tăng số nút đen đến **P** lên 1 mà không ảnh hưởng đến số nút đen đến **U** khi đó chỉ tính riêng cây con gốc P thì đã bằng, nên nếu **P** đang là gốc rồi thì không cần phải chỉnh nữa.

<a name="s-co-mau-do"></a>

#### 4.3.3 S có màu đỏ:

Trường hợp này thì đơn giản thôi (vì nó là cái cuối rồi)

![](/assets/2022-05-04-red-black-tree/deleteRedS.webp)

**S** là màu đỏ thì **P**, **SL**, **SR** đều là màu đen, xử lí như trên là được:

- Nếu **S** là con phải của **P**:

    - Quay trái **P**.
    - _P->color = RED_
    - _S->color = BLACK_
    - Đưa về trường hợp **S** đen như **4.3.2** (cái hình thứ 3 ấy, không phải hình thứ 4 đâu) với **S** mới là **SL** cũ (cái hình là nó tự chỉnh **SL** thành **S** luôn rồi)

- Nếu **S** là con trái của **P**:

    - Quay phải **P**.
    - _P->color = RED_
    - _S->color = BLACK_
    - Đưa về trường hợp **S** đen như **4.3.2**

```cpp
void RBTree::eraseFix(Node *&parent, Node *sibling) {
    if (parent == NULL) return;
    //cout << parent->data << " " << sibling->data << " " << "\n";
    //Node *sibling = (parent->leftChild == NULL) ? parent->rightChild : parent->leftChild;
    Node *leftChild = sibling->leftChild;
    Node *rightChild = sibling->rightChild;

    if (getColor(leftChild) == RED || getColor(rightChild) == RED) {
        if (parent -> leftChild == sibling) {
            if (getColor(leftChild) != RED) {
                setColor(sibling, RED);
                setColor(rightChild, BLACK);
                rotateLeft(sibling);
                sibling = sibling->parent;
                leftChild = sibling->leftChild;
            }
            int oldColor = getColor(parent);
            setColor(parent, BLACK);
            setColor(leftChild, BLACK);
            rotateRight(parent);
            setColor(sibling, oldColor);
        }
        else {
            //cout << "ok\n" ;
            if (getColor(rightChild) != RED) {
                setColor(sibling, RED);
                setColor(leftChild, BLACK);
                rotateRight(sibling);
                sibling = sibling->parent;
                rightChild = sibling->rightChild;
            }
            int oldColor = getColor(parent);
            setColor(parent, BLACK);
            setColor(rightChild, BLACK);
            rotateLeft(parent);
            setColor(sibling, oldColor);
        }
        return;
    }
    if (getColor(sibling) == BLACK) {
        setColor(sibling, RED);
        if (getColor(parent) == RED)     
            setColor(parent, BLACK);
        else
            eraseFix(parent->parent, getSibling(parent));
        return;
    }

    if (getColor(sibling) == RED) {
        Node* other = getSibling(sibling);
        setColor(sibling, BLACK);
        setColor(parent, RED);
        if (sibling == parent->rightChild)
            rotateLeft(parent);
        else
            rotateRight(parent);
        // cout << parent->color << " " << sibling->color << "\n\n";
        // (*this)._display_tree();
        eraseFix(parent, otherChild(parent, other));
        eraseFix(parent, sibling);
        return;
    }
}
```
<a name="tong-ket"></a>

#### 4.3.4 Tổng kết:

Với thao tác delete ta sẽ chia thành các trường hợp:

- Nút cần xóa có cả hai con 
- Nút cần xóa có 1 con hoặc nút cần xóa không có con nào nhưng bản thân nó là màu đỏ
- Nút cần xóa màu đen, không có con, sibling có ít nhất 1 child màu đỏ
- Nút cần xóa màu đen, không có con, sibling và 2 con của sibling đều màu đen
- Nút cần xóa màu đen, không có con, sibling màu đỏ

<a name="loi-ket"><a>

# III. Lời kết

<a name="tham-khao"><a>

# IV. Tham khảo

1. [Lập trình không khó](https://nguyenvanhieu.vn/cay-do-den-red-black-tree-phan-3/#1-sibingcolor-black-and-hasredchildsibling)
2. [Geek for geeks](https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/)
3. [Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
