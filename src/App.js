import React from 'react';

import {inject, observer} from 'mobx-react';


@inject('BirdStore')
@observer
class App extends React.Component {

    render() {
        const {BirdStore} = this.props;

        return (
            <section className="columns">
                <div className="column is-2" style={{ backgroundColor: "#7CFC00" }}>
                    Nulla. Explicabo natus for voluptas for voluptatem for suscipit but commodo for accusantium. Ipsum
                    anim excepteur and explicabo. Eos perspiciatis fugiat for est or lorem magni. Eum corporis non but
                    molestiae. Deserunt quo so esse and enim or eiusmod anim quaerat. Eum. Voluptate sunt beatae. Natus
                    iste iste. Ex. Laudantium ea yet pariatur tempora but eius in. Molestiae. Duis proident anim. Ipsa
                    inventore. Eos amet aliquip. Nihil vitae for omnis but ex so rem. Sed dolor dolor. Ipsa sed or error
                    and dolor or anim. Dolore quaerat est quam. Magnam id. Ullamco. Illum tempor do, quia so iure
                    commodi or consectetur. Mollit aute, autem nihil. Architecto rem but velit amet illum.
                </div>
                <div className="column is-2" style={{ backgroundColor: "#FFFF00" }}>
                    Nulla. Explicabo natus for voluptas for voluptatem for suscipit but commodo for accusantium. Ipsum
                    anim excepteur and explicabo. Eos perspiciatis fugiat for est or lorem magni. Eum corporis non but
                    molestiae. Deserunt quo so esse and enim or eiusmod anim quaerat. Eum. Voluptate sunt beatae. Natus
                    iste iste. Ex. Laudantium ea yet pariatur tempora but eius in. Molestiae. Duis proident anim. Ipsa
                    inventore. Eos amet aliquip. Nihil vitae for omnis but ex so rem. Sed dolor dolor. Ipsa sed or error
                    and dolor or anim. Dolore quaerat est quam. Magnam id. Ullamco. Illum tempor do, quia so iure
                    commodi or consectetur. Mollit aute, autem nihil. Architecto rem but velit amet illum.
                </div>
                <div className="column is-2" style={{ backgroundColor: "#E0FFFF" }}>
                    Nulla. Explicabo natus for voluptas for voluptatem for suscipit but commodo for accusantium. Ipsum
                    anim excepteur and explicabo. Eos perspiciatis fugiat for est or lorem magni. Eum corporis non but
                    molestiae. Deserunt quo so esse and enim or eiusmod anim quaerat. Eum. Voluptate sunt beatae. Natus
                    iste iste. Ex. Laudantium ea yet pariatur tempora but eius in. Molestiae. Duis proident anim. Ipsa
                    inventore. Eos amet aliquip. Nihil vitae for omnis but ex so rem. Sed dolor dolor. Ipsa sed or error
                    and dolor or anim. Dolore quaerat est quam. Magnam id. Ullamco. Illum tempor do, quia so iure
                    commodi or consectetur. Mollit aute, autem nihil. Architecto rem but velit amet illum.
                </div>


            </section>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const bird = this.bird.value;
        this.props.BirdStore.addBird(bird);
        this.bird.value = "";
    }
}

export default App;
